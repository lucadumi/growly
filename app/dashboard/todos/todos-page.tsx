"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ListChecks,
  BarChart3,
  LayoutPanelLeft,
  Target,
  TableProperties,
  Timer,
  Trash2,
  Search,
  ChevronUp,
  ChevronDown,
  GripVertical,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

import CollectionCard from "./components/collection-card";
import TodoForm, { type TodoFormHandle } from "./components/todo-form";
import type { Collection, Priority, Status, TodoRow } from "./types";
import { priorityDots, statusColors } from "./constants";
import Button from "@/app/components/ui/button";
import UnsavedChangesDialog from "@/app/components/ui/unsaved-changes-dialog";
import { useXP } from "@/app/context/xp-context";
import { XP_PER_TODO } from "@/lib/xp";
import PageHeading from "@/app/components/page-heading";

interface TodosPageProps {
  initialTodos?: Array<{
    id: string;
    title: string;
    status: string;
    priority: string;
    category: string;
    tags: string;
    collections?: string[];
  }>;
  initialCollections?: Collection[];
  collectionContext?: {
    id: string;
    name: string;
    description?: string | null;
  };
}

const buttonBase =
  "w-full rounded-full flex items-center justify-center select-none gap-2 cursor-pointer";

const statusLanes: Status[] = ["Planned", "In Progress", "Completed", "Missed"];

const statusToApi: Record<Status, string> = {
  Planned: "PLANNED",
  "In Progress": "IN_PROGRESS",
  Completed: "COMPLETED",
  Missed: "MISSED",
};

const getStatusColor = (status: Status) =>
  statusColors[status] || statusColors.Planned;

const formatStatus = (status: string): Status => {
  switch (status?.toUpperCase()) {
    case "IN_PROGRESS":
      return "In Progress";
    case "COMPLETED":
      return "Completed";
    case "MISSED":
      return "Missed";
    default:
      return "Planned";
  }
};

const formatPriority = (priority: string): Priority => {
  switch (priority?.toUpperCase()) {
    case "LOW":
      return "Low";
    case "HIGH":
      return "High";
    case "CRITICAL":
      return "Critical";
    default:
      return "Medium";
  }
};

const toTagList = (raw: string) =>
  raw
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

const normalizeCollection = (payload: any): Collection => ({
  id: payload?.id as string,
  name: (payload?.name as string) || "Untitled",
  description: payload?.description || "",
  todoIds: Array.isArray(payload?.todoIds) ? payload.todoIds : [],
});

const mapToRow = (
  todo: NonNullable<TodosPageProps["initialTodos"]>[number],
): TodoRow => {
  const status = formatStatus(todo.status);

  return {
    id: todo.id,
    title: todo.title,
    status,
    category: todo.category,
    priority: formatPriority(todo.priority),
    tags: toTagList(todo.tags || ""),
    collectionIds: todo.collections || [],
  };
};

type TabKey = "board" | "list" | "analytics" | "focus";

const TodosPage: React.FC<TodosPageProps> = ({
  initialTodos = [],
  initialCollections = [],
  collectionContext,
}) => {
  const [todos, setTodos] = useState<TodoRow[]>(() =>
    initialTodos.map(mapToRow),
  );
  const [tagFilter, setTagFilter] = useState<string[]>([]);
  const [showTagPicker, setShowTagPicker] = useState(false);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("board");
  const [collections, setCollections] = useState<Collection[]>(
    initialCollections.map(normalizeCollection),
  );
  const [newCollection, setNewCollection] = useState<{
    name: string;
    description: string;
    todoIds: string[];
  }>({ name: "", description: "", todoIds: [] });
  const [collectionMessage, setCollectionMessage] = useState<string | null>(
    null,
  );
  const [collectionError, setCollectionError] = useState<string | null>(null);
  const [collectionPending, setCollectionPending] = useState(false);
  const [collectionDeletingId, setCollectionDeletingId] = useState<
    string | null
  >(null);
  const [assignmentPending, setAssignmentPending] = useState(false);
  const [deleteCompletedPending, setDeleteCompletedPending] = useState(false);
  const [deleteCompletedError, setDeleteCompletedError] = useState<
    string | null
  >(null);
  const [dropTargetCollectionId, setDropTargetCollectionId] = useState<
    string | null
  >(null);
  const [listSort, setListSort] = useState<{
    key: "title" | "status" | "priority" | "tags";
    dir: "asc" | "desc";
  }>({ key: "title", dir: "asc" });
  const [newCollectionSearch, setNewCollectionSearch] = useState("");
  const [showCreateTodoPopup, setShowCreateTodoPopup] = useState(false);
  const createFormRef = useRef<TodoFormHandle | null>(null);
  const createTodoSectionRef = useRef<HTMLDivElement | null>(null);
  const editRequestRef = useRef(0);
  const queryActionRef = useRef<{ edit: string | null; create: string | null }>(
    { edit: null, create: null },
  );
  const [showCreateFormGuard, setShowCreateFormGuard] = useState(false);
  const [createFormGuardSaving, setCreateFormGuardSaving] = useState(false);
  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [editTodoData, setEditTodoData] = useState<{
    id: string;
    title: string;
    description: string | null;
    category: string | null;
    priority: string | null;
    status: string | null;
    tags: string | null;
    iconName: string | null;
    iconColor: string | null;
  } | null>(null);
  const [editTodoLoading, setEditTodoLoading] = useState(false);
  const [editTodoError, setEditTodoError] = useState<string | null>(null);

  const isCollectionView = Boolean(collectionContext);
  const searchParams = useSearchParams();
  const { addXP } = useXP();

  const heroDescriptionHtml = isCollectionView
    ? (
        collectionContext?.description ??
        "Manage the todos that live inside this collection. Items you assign here stay out of the main list."
      ).replace(/\./g, ".<br/>")
    : "Drag them between statuses, then drop them into a collection when you're ready to move them off the main list.".replace(
        /\./g,
        ".<br/>",
      );

  const tabs: ReadonlyArray<{
    id: TabKey;
    label: string;
    Icon: typeof LayoutPanelLeft;
  }> = useMemo(() => {
    const shared = [
      { id: "board", label: "Board", Icon: LayoutPanelLeft },
      { id: "list", label: "List", Icon: TableProperties },
      { id: "analytics", label: "Analytics", Icon: BarChart3 },
      { id: "focus", label: "Focus", Icon: Target },
    ] as const;

    return shared;
  }, []);

  useEffect(() => {
    setTodos(initialTodos.map(mapToRow));
  }, [initialTodos]);

  useEffect(() => {
    setCollections(initialCollections.map(normalizeCollection));
  }, [initialCollections]);

  const handleEditTodo = useCallback(async (todoId: string) => {
    setShowCreateTodoPopup(true);
    setEditTodoId(todoId);
    setEditTodoError(null);
    setEditTodoData(null);
    setEditTodoLoading(true);
    const requestId = ++editRequestRef.current;

    try {
      const response = await fetch(`/api/todos/${todoId}`, {
        credentials: "include",
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.error || "Failed to load todo");
      }

      if (requestId !== editRequestRef.current) {
        return;
      }

      setEditTodoData(payload?.todo ?? null);
    } catch (error) {
      console.error(error);
      if (requestId !== editRequestRef.current) {
        return;
      }
      setEditTodoError(
        error instanceof Error
          ? error.message
          : "Unable to load this todo right now.",
      );
      setEditTodoData(null);
    } finally {
      if (requestId === editRequestRef.current) {
        setEditTodoLoading(false);
      }
    }
  }, []);

  const handleCancelEdit = useCallback(() => {
    setEditTodoId(null);
    setEditTodoData(null);
    setEditTodoError(null);
  }, []);

  const handleCreateSuccess = useCallback(
    (_message: string) => {
      setShowCreateTodoPopup(false);
      handleCancelEdit();
      createFormRef.current?.discardChanges();
    },
    [handleCancelEdit],
  );

  const handleRequestCreateFormClose = useCallback(() => {
    const isDirty = createFormRef.current?.isDirty() ?? false;
    if (isDirty) {
      setShowCreateFormGuard(true);
      return;
    }
    setShowCreateTodoPopup(false);
  }, []);

  const handleCreateFormGuardKeep = useCallback(() => {
    setShowCreateFormGuard(false);
  }, []);

  const handleCreateFormGuardDiscard = useCallback(() => {
    createFormRef.current?.discardChanges();
    setShowCreateFormGuard(false);
    setShowCreateTodoPopup(false);
  }, []);

  const handleCreateFormGuardSave = useCallback(async () => {
    const formHandle = createFormRef.current;
    if (!formHandle) {
      setShowCreateFormGuard(false);
      setShowCreateTodoPopup(false);
      return;
    }

    setCreateFormGuardSaving(true);
    try {
      const saved = await formHandle.saveChanges();
      if (saved) {
        setShowCreateFormGuard(false);
        setShowCreateTodoPopup(false);
      }
    } finally {
      setCreateFormGuardSaving(false);
    }
  }, []);

  useEffect(() => {
    const editId = searchParams.get("edit");
    const createFlag = searchParams.get("create");

    if (editId && queryActionRef.current.edit !== editId) {
      queryActionRef.current = { edit: editId, create: null };
      void handleEditTodo(editId);
      return;
    }

    if (
      !isCollectionView &&
      createFlag &&
      queryActionRef.current.create !== createFlag
    ) {
      queryActionRef.current = { edit: null, create: createFlag };
      setShowCreateTodoPopup(true);
      handleCancelEdit();
    }
  }, [handleCancelEdit, handleEditTodo, isCollectionView, searchParams]);

  useEffect(() => {
    if (!showCreateTodoPopup) return;
    const node = createTodoSectionRef.current;
    if (!node) return;

    const handle = window.requestAnimationFrame(() => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const extraSpacing = 12;
      const top =
        node.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        extraSpacing;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(handle);
  }, [showCreateTodoPopup]);

  const availableTodos = useMemo(
    () => todos.filter((todo) => todo.collectionIds.length === 0),
    [todos],
  );

  const visibleTodos = useMemo(() => {
    if (isCollectionView && collectionContext) {
      return todos.filter((todo) =>
        todo.collectionIds.includes(collectionContext.id),
      );
    }
    return availableTodos;
  }, [availableTodos, collectionContext, isCollectionView, todos]);

  const filtered = useMemo(() => {
    if (tagFilter.length === 0) return visibleTodos;
    const targets = tagFilter.map((tag) => tag.toLowerCase());
    return visibleTodos.filter((todo) =>
      todo.tags.some((tag) => targets.includes(tag.toLowerCase())),
    );
  }, [tagFilter, visibleTodos]);

  const grouped = useMemo(
    () =>
      statusLanes.map((status) => ({
        status,
        items: filtered.filter((todo) => todo.status === status),
      })),
    [filtered],
  );

  const uniqueTags = useMemo(() => {
    const all = visibleTodos.flatMap((todo) => todo.tags);
    return Array.from(new Set(all));
  }, [visibleTodos]);

  const totals = useMemo(() => {
    const completed = visibleTodos.filter(
      (todo) => todo.status === "Completed",
    ).length;
    const active = visibleTodos.filter(
      (todo) => todo.status === "In Progress" || todo.status === "Planned",
    ).length;

    return { completed, active };
  }, [visibleTodos]);

  const visibleCompletedIds = useMemo(
    () =>
      visibleTodos
        .filter((todo) => todo.status === "Completed")
        .map((todo) => todo.id),
    [visibleTodos],
  );

  const handleDrop = async (event: React.DragEvent, targetStatus: Status) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/todo-id");
    setDraggingId(null);
    setShowTagPicker(false);

    if (!id) return;
    const current = todos.find((todo) => todo.id === id);
    if (!current || current.status === targetStatus) return;

    const statusPayload = statusToApi[targetStatus];
    if (!statusPayload) return;

    const previousStatus = current.status;
    const reopenedFromCompleted =
      previousStatus === "Completed" && targetStatus === "In Progress";
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: targetStatus } : todo,
      ),
    );

    try {
      setUpdatingId(id);
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: statusPayload }),
        credentials: "include",
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(
          payload?.error || "Failed to update todo status, please try again",
        );
      }

      const confirmedStatus = formatStatus(
        payload?.todo?.status ?? statusPayload,
      );
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, status: confirmedStatus } : todo,
        ),
      );

      if (reopenedFromCompleted) {
        addXP(-XP_PER_TODO, "todo", {
          label: current?.title ?? "Reopened todo",
          detail: "Reopened from completed",
        });
      }
    } catch (error) {
      console.error(error);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, status: previousStatus } : todo,
        ),
      );
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteCompleted = async () => {
    const targetIds = visibleCompletedIds.slice();
    if (targetIds.length === 0) {
      return;
    }

    setDeleteCompletedPending(true);
    setDeleteCompletedError(null);

    try {
      const requests = targetIds.map((id) =>
        fetch(`/api/todos/${id}`, {
          method: "DELETE",
          credentials: "include",
        }).then(async (response) => {
          if (!response.ok) {
            const body = await response.json().catch(() => ({}));
            throw new Error(body?.error || "Failed to delete completed todos");
          }
        }),
      );

      await Promise.all(requests);

      const deletedSet = new Set(targetIds);
      setTodos((prev) => prev.filter((todo) => !deletedSet.has(todo.id)));
      setCollections((prev) =>
        prev.map((collection) => ({
          ...collection,
          todoIds: collection.todoIds.filter((id) => !deletedSet.has(id)),
        })),
      );
    } catch (error) {
      console.error(error);
      setDeleteCompletedError(
        error instanceof Error
          ? error.message
          : "Unable to delete completed todos right now.",
      );
    } finally {
      setDeleteCompletedPending(false);
    }
  };

  const statusBreakdown = statusLanes.map((status) => ({
    status,
    count: visibleTodos.filter((todo) => todo.status === status).length,
  }));

  const focusStats = useMemo(() => {
    const completed = visibleTodos.filter(
      (todo) => todo.status === "Completed",
    ).length;
    const missed = visibleTodos.filter(
      (todo) => todo.status === "Missed",
    ).length;
    const total = completed + missed;
    const focusScore = total === 0 ? 0 : Math.round((completed / total) * 100);

    return { completed, missed, total, focusScore };
  }, [visibleTodos]);

  const focusMessage = useMemo(() => {
    if (focusStats.total === 0) {
      return "Complete or miss at least one todo to unlock this score.";
    }

    if (focusStats.focusScore >= 80) {
      return "You are maintaining strong focus.";
    }

    if (focusStats.focusScore >= 50) {
      return "You are keeping a steady pace.";
    }

    return "Wrap up more todos before they slip.";
  }, [focusStats.total, focusStats.focusScore]);

  const isEditingTodo = Boolean(editTodoId);
  const editInitialTodo = editTodoData
    ? {
        id: editTodoData.id,
        title: editTodoData.title,
        description: editTodoData.description,
        category: editTodoData.category,
        priority: editTodoData.priority,
        status: editTodoData.status,
        tags: editTodoData.tags,
        iconName: editTodoData.iconName,
        iconColor: editTodoData.iconColor,
      }
    : null;

  const tagCounts = filtered.reduce<Record<string, number>>((acc, todo) => {
    todo.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const priorityOrder: Record<string, number> = {
    Critical: 0,
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const sortedFiltered = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const dir = listSort.dir === "asc" ? 1 : -1;
      if (listSort.key === "priority") {
        return (
          dir *
          ((priorityOrder[a.priority] ?? 99) -
            (priorityOrder[b.priority] ?? 99))
        );
      }
      if (listSort.key === "status") {
        return dir * a.status.localeCompare(b.status);
      }
      if (listSort.key === "tags") {
        return dir * a.tags.join(",").localeCompare(b.tags.join(","));
      }
      return dir * a.title.localeCompare(b.title);
    });
  }, [filtered, listSort]);

  const priorityBreakdown = useMemo(() => {
    return (["Critical", "High", "Medium", "Low"] as const).map((priority) => ({
      priority,
      count: visibleTodos.filter((t) => t.priority === priority).length,
    }));
  }, [visibleTodos]);

  const filteredCreationTodos = useMemo(() => {
    const term = newCollectionSearch.trim().toLowerCase();
    if (!term) return availableTodos;
    return availableTodos.filter((todo) => {
      if (todo.title.toLowerCase().includes(term)) return true;
      return todo.tags.some((tag) => tag.toLowerCase().includes(term));
    });
  }, [availableTodos, newCollectionSearch]);

  const handleCreateCollection = async () => {
    if (!newCollection.name.trim()) return;
    setCollectionMessage(null);
    setCollectionError(null);
    setCollectionPending(true);

    try {
      const response = await fetch("/api/collections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newCollection.name.trim(),
          description: newCollection.description,
          todoIds: newCollection.todoIds,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create collection");
      }

      const data = await response.json();
      const saved = normalizeCollection(data.collection);

      setCollections((prev) => [...prev, saved]);
      setTodos((prev) =>
        prev.map((todo) =>
          saved.todoIds.includes(todo.id)
            ? {
                ...todo,
                collectionIds: Array.from(
                  new Set([...(todo.collectionIds || []), saved.id]),
                ),
              }
            : todo,
        ),
      );
      setNewCollection({ name: "", description: "", todoIds: [] });
      setNewCollectionSearch("");
      setCollectionMessage("Collection saved");
    } catch (error) {
      console.error(error);
      setCollectionError("Unable to save the collection right now.");
    } finally {
      setCollectionPending(false);
    }
  };

  const toggleCollectionTodo = (todoId: string) => {
    setNewCollection((prev) => {
      const exists = prev.todoIds.includes(todoId);
      return {
        ...prev,
        todoIds: exists
          ? prev.todoIds.filter((id) => id !== todoId)
          : [...prev.todoIds, todoId],
      };
    });
  };

  const addTodoToExistingCollection = async (
    todoId: string,
    collectionId: string,
  ) => {
    setCollectionMessage(null);
    setCollectionError(null);
    setAssignmentPending(true);
    try {
      const response = await fetch(`/api/collections/${collectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todoId, action: "add" }),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      const data = await response.json();
      const updated = normalizeCollection(data.collection);
      setCollections((prev) =>
        prev.map((collection) =>
          collection.id === collectionId ? updated : collection,
        ),
      );
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId
            ? {
                ...todo,
                collectionIds: Array.from(
                  new Set([...(todo.collectionIds || []), collectionId]),
                ),
              }
            : todo,
        ),
      );
      setCollectionMessage("Todo added to collection");
    } catch (error) {
      console.error(error);
      setCollectionError("Unable to update the collection right now.");
    } finally {
      setAssignmentPending(false);
    }
  };

  const handleDeleteCollection = async (collectionId: string) => {
    setCollectionMessage(null);
    setCollectionError(null);
    setCollectionDeletingId(collectionId);

    try {
      const response = await fetch(`/api/collections/${collectionId}`, {
        method: "DELETE",
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.error || "Failed to delete collection");
      }

      setCollections((prev) =>
        prev.filter((collection) => collection.id !== collectionId),
      );
      setTodos((prev) =>
        prev.map((todo) => ({
          ...todo,
          collectionIds: todo.collectionIds.filter((id) => id !== collectionId),
        })),
      );
      setCollectionMessage("Collection deleted.");
    } catch (error) {
      console.error(error);
      setCollectionError(
        error instanceof Error
          ? error.message
          : "Unable to delete collection right now.",
      );
    } finally {
      setCollectionDeletingId(null);
    }
  };

  const handleCollectionDrop = (todoId: string, collectionId: string) => {
    setDropTargetCollectionId((prev) => (prev === collectionId ? null : prev));
    if (!todoId) return;
    addTodoToExistingCollection(todoId, collectionId);
  };

  return (
    <>
      <UnsavedChangesDialog
        open={showCreateFormGuard}
        isSaving={createFormGuardSaving}
        onKeepEditing={handleCreateFormGuardKeep}
        onDiscard={handleCreateFormGuardDiscard}
        onSave={handleCreateFormGuardSave}
      />
      <main className="relative w-full min-h-screen lg:pt-18 xl:pt-24 2xl:pt-28 text-foreground lg:pb-8 xl:pb-12 2xl:pb-16 overflow-x-hidden overflow-y-visible bg-linear-to-b from-green-soft/20 via-card/70 to-primary/20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 right-10 h-64 w-64 rounded-[2.5rem] bg-primary/20 blur-3xl" />
          <div className="absolute bottom-6 left-12 h-56 w-56 rounded-full bg-green-soft/20 blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="lg:px-4 xl:px-8 2xl:px-28 pb-8 space-y-8">
            <div className="relative overflow-visible lg:space-y-4 xl:space-y-6">
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-12 left-6 h-48 w-48 rounded-full bg-green-soft/30 blur-3xl" />
              <div className="relative z-10 space-y-6">
                <PageHeading
                  badgeLabel={
                    isCollectionView ? "Collection overview" : "Todos overview"
                  }
                  title={
                    isCollectionView
                      ? `${collectionContext?.name || "Collection"} todos`
                      : "Your todos"
                  }
                  titleClassName="font-bold"
                  description={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: heroDescriptionHtml,
                      }}
                    />
                  }
                  descriptionClassName="text-muted-foreground"
                  actions={
                    <div className="flex items-center gap-2">
                      <div>
                        {isCollectionView && (
                          <Link
                            href="/dashboard/todos"
                            className={`${buttonBase} lg:text-[10px] xl:text-xs 2xl:text-sm lg:h-6 xl:h-8 2xl:h-10 lg:px-3 xl:px-4 2xl:px-6 bg-white border border-gray-100 shadow-sm hover:border-primary/40`}
                          >
                            Back to all todos
                          </Link>
                        )}
                      </div>
                      <div>
                        <Button
                          className="inline-flex items-center gap-2 rounded-full bg-primary lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(240,144,41,0.35)] transition hover:brightness-105 active:scale-95"
                          onClick={() => {
                            if (!showCreateTodoPopup) {
                              handleCancelEdit();
                              setShowCreateTodoPopup(true);
                              return;
                            }
                            handleRequestCreateFormClose();
                          }}
                          aria-expanded={showCreateTodoPopup}
                          aria-controls="create-todo-section"
                        >
                          <p>{showCreateTodoPopup ? "Hide" : "Create todo"}</p>
                        </Button>
                      </div>
                    </div>
                  }
                />
              </div>
              <div className="grid md:grid-cols-3 lg:gap-3 xl:gap-4">
                <div className="lg:rounded-xl xl:rounded-2xl bg-card shadow-sm lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-green-soft/15 blur-xl" />
                  <div className="lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 shrink-0 rounded-full bg-green-soft/20 flex items-center justify-center">
                    <CheckCircle2 className="lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-green-soft" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Completed
                    </p>
                    <p className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-foreground leading-tight">
                      {totals.completed}
                    </p>
                    <div className="mt-1 h-1 w-full rounded-full bg-green-soft/20 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-green-soft transition-all duration-500"
                        style={{
                          width: visibleTodos.length
                            ? `${(totals.completed / visibleTodos.length) * 100}%`
                            : "0%",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:rounded-xl xl:rounded-2xl bg-card shadow-sm lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/15 blur-xl" />
                  <div className="lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                    <Timer className="lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Active
                    </p>
                    <p className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-foreground leading-tight">
                      {totals.active}
                    </p>
                    <div className="mt-1 h-1 w-full rounded-full bg-primary/20 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{
                          width: visibleTodos.length
                            ? `${(totals.active / visibleTodos.length) * 100}%`
                            : "0%",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:rounded-xl xl:rounded-2xl bg-card shadow-sm lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-coral/15 blur-xl" />
                  <div className="lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-13 2xl:h-13 shrink-0 rounded-full bg-coral/20 flex items-center justify-center">
                    <Target className="lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-coral" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Focus score
                    </p>
                    <p className="lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-foreground leading-tight">
                      {focusStats.focusScore}%
                    </p>
                    <div className="mt-1 h-1 w-full rounded-full bg-coral/20 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-coral transition-all duration-500"
                        style={{ width: `${focusStats.focusScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  type="button"
                  disabled={
                    deleteCompletedPending || visibleCompletedIds.length === 0
                  }
                  onClick={handleDeleteCompleted}
                  className="cursor-pointer inline-flex shadow-sm items-center gap-2 rounded-full lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 text-xs font-medium text-red-400 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 bg-red-100"
                >
                  Delete completed
                </button>
                {deleteCompletedError ? (
                  <p className="text-[11px] text-destructive">
                    {deleteCompletedError}
                  </p>
                ) : null}
              </div>

              {showCreateTodoPopup || isEditingTodo ? (
                <div
                  id="create-todo-section"
                  aria-hidden={!showCreateTodoPopup}
                  className={`transition-[max-height,opacity,margin] duration-300 ease-out ${
                    showCreateTodoPopup
                      ? "max-h-[2600px] opacity-100 lg:mt-4 xl:mt-6 overflow-visible"
                      : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
                  }`}
                  ref={createTodoSectionRef}
                >
                  <div className="rounded-3xl border border-gray-100 bg-card shadow-inner lg:p-4 xl:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between" />
                    {editTodoError ? (
                      <div className="rounded-xl border border-destructive/50 bg-destructive/10 lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm text-destructive">
                        {editTodoError}
                      </div>
                    ) : null}
                    {isEditingTodo ? (
                      editTodoLoading ? (
                        <div className="rounded-2xl border border-gray-100 bg-white/70 lg:p-4 xl:p-6 space-y-4 animate-pulse">
                          <div className="space-y-2">
                            <div className="h-3 w-20 rounded bg-muted/50" />
                            <div className="h-9 w-full rounded-xl bg-muted/40" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 w-24 rounded bg-muted/50" />
                            <div className="h-20 w-full rounded-xl bg-muted/40" />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-2">
                              <div className="h-3 w-16 rounded bg-muted/50" />
                              <div className="h-9 w-full rounded-xl bg-muted/40" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 w-16 rounded bg-muted/50" />
                              <div className="h-9 w-full rounded-xl bg-muted/40" />
                            </div>
                          </div>
                          <div className="h-9 w-24 rounded-full bg-muted/40" />
                        </div>
                      ) : editInitialTodo ? (
                        <TodoForm
                          ref={createFormRef}
                          variant="inline"
                          mode="edit"
                          initialTodo={editInitialTodo}
                          onSuccess={() => handleCancelEdit()}
                        />
                      ) : null
                    ) : (
                      <TodoForm
                        ref={createFormRef}
                        variant="inline"
                        mode="create"
                        collectionId={collectionContext?.id}
                        onSuccess={handleCreateSuccess}
                      />
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full h-auto lg:px-4 xl:px-8 2xl:px-28">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <ListChecks className="lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-primary" />
                    <h2 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                      Todo views
                    </h2>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Unassigned todos live here.
                  </p>
                </div>
                <div className="flex flex-wrap items-center lg:gap-3 xl:gap-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowTagPicker((open) => !open)}
                      className="lg:px-2 xl:px-3 lg:py-0.5 xl:py-1 rounded-full lg:text-[9px] xl:text-[11px] 2xl:text-xs transition border bg-white text-muted-foreground border-gray-100 hover:border-muted-foreground/30 flex items-center gap-2"
                      type="button"
                    >
                      <span className="lg:h-1 lg:w-1 xl:h-2 xl:w-2 rounded-full bg-muted-foreground" />
                      <span>
                        {tagFilter.length === 0
                          ? "All tags"
                          : `Tags: ${tagFilter.join(", ")}`}
                      </span>
                    </button>
                    {showTagPicker ? (
                      <div className="absolute right-0 mt-2 lg:w-48 xl:w-72 lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-white shadow-xl lg:p-2 xl:p-3 z-10">
                        <div className="flex items-center justify-between mb-2 lg:text-[8px] xl:text-[10px] 2xl:text-xs text-muted-foreground">
                          <span>Select tags</span>
                          <button
                            type="button"
                            className="hover:text-primary"
                            onClick={() => setTagFilter([])}
                          >
                            Clear
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 lg:text-[10px] xl:text-xs 2xl:text-sm">
                          {uniqueTags.length === 0 ? (
                            <div className="col-span-2 lg:text-[10px] xl:text-xs text-muted-foreground lg:px-2 lg:py-0.5 xl:py-1">
                              No tags yet
                            </div>
                          ) : (
                            uniqueTags.map((tag) => {
                              const active = tagFilter.includes(tag);
                              return (
                                <button
                                  key={tag}
                                  type="button"
                                  onClick={() => {
                                    setTagFilter((prev) =>
                                      prev.includes(tag)
                                        ? prev.filter((t) => t !== tag)
                                        : [...prev, tag],
                                    );
                                  }}
                                  className={`w-full lg:px-2 xl:px-3 lg:py-1 xl:py-2 rounded-xl border transition text-left ${
                                    active
                                      ? "bg-muted-foreground/50 text-white border-white"
                                      : "bg-white text-foreground border-gray-100 hover:border-muted-foreground/40"
                                  }`}
                                >
                                  {tag}
                                </button>
                              );
                            })
                          )}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-muted/70 lg:p-0.5 xl:p-1 shadow-inner">
                    {tabs.map(({ id, label, Icon }) => {
                      const active = activeTab === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setActiveTab(id)}
                          className={`flex items-center gap-2 rounded-full lg:px-2 xl:px-3 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs font-semibold transition ${
                            active
                              ? "bg-white text-foreground shadow-sm border border-gray-100"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
                          <span>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {activeTab === "board" ? (
                <div className="grid lg:gap-3 xl:gap-4 lg:grid-cols-4">
                  {grouped.map(({ status, items }) => {
                    const laneStatusColor = getStatusColor(status);
                    return (
                      <div
                        key={status}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={(event) => handleDrop(event, status)}
                        className={`lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-muted/30 shadow-inner shadow-black/10 overflow-hidden lg:min-h-40 xl:min-h-60 transition ${
                          draggingId ? "ring-1 ring-primary/40" : ""
                        }`}
                      >
                        <div
                          className="h-1"
                          style={{ backgroundColor: laneStatusColor }}
                        />
                        <div className="lg:p-3 xl:p-4 2xl:p-5">
                          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                            <div
                              className="select-none flex items-center gap-2 px-3 rounded-full py-1"
                              style={{
                                backgroundColor: `${laneStatusColor}22`,
                                color: laneStatusColor,
                              }}
                            >
                              <span
                                className="lg:w-1.5 lg:h-1.5 xl:h-2 xl:w-2 rounded-full"
                                style={{ backgroundColor: laneStatusColor }}
                              />
                              <span className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm">
                                {status}
                              </span>
                            </div>
                            <span className="lg:text-[10px] xl:text-xs text-muted-foreground font-medium">
                              {items.length}{" "}
                              {items.length === 1 ? "todo" : "todos"}
                            </span>
                          </div>

                          <div className="lg:pt-2 xl:pt-3 lg:space-y-2 xl:space-y-3">
                            {items.length === 0 ? (
                              <div className="rounded-xl border border-dashed border-gray-100 bg-muted/50 lg:px-2 xl:px-3 lg:py-3 xl:py-4 lg:text-[11px] xl:text-xs text-muted-foreground text-center">
                                Drop a todo here
                              </div>
                            ) : (
                              items.map((todo) => {
                                const statusColor = getStatusColor(todo.status);
                                return (
                                  <button
                                    key={todo.id}
                                    type="button"
                                    onClick={() => handleEditTodo(todo.id)}
                                    draggable
                                    onDragStart={(event) => {
                                      event.dataTransfer.setData(
                                        "text/todo-id",
                                        todo.id,
                                      );
                                      event.dataTransfer.effectAllowed = "move";
                                      setDraggingId(todo.id);
                                    }}
                                    onDragEnd={() => setDraggingId(null)}
                                    className={`block w-full text-left cursor-pointer rounded-xl border border-gray-100 bg-white lg:p-2 xl:p-3 shadow-sm hover:border-primary/40 hover:shadow transition ${
                                      draggingId === todo.id ? "opacity-70" : ""
                                    }`}
                                  >
                                    <div className="flex items-start justify-between lg:gap-2 xl:gap-3">
                                      <div className="space-y-1">
                                        <p className="font-semibold lg:text-xs xl:text-sm leading-tight">
                                          {todo.title}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2 lg:text-[9px] xl:text-[11px] text-muted-foreground">
                                          {todo.tags.length === 0 ? (
                                            <span className="text-muted-foreground/70">
                                              No tags yet
                                            </span>
                                          ) : (
                                            todo.tags.map((tag) => (
                                              <span
                                                key={tag}
                                                className="lg:px-2 lg:py-0.5 rounded-full bg-muted text-muted-foreground"
                                              >
                                                {tag}
                                              </span>
                                            ))
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="lg:mt-2 xl:mt-3 flex items-center justify-between text-muted-foreground">
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={`lg:w-1.5 lg:h-1.5 xl:h-2.5 xl:w-2.5 rounded-full ${
                                            priorityDots[todo.priority]
                                          }`}
                                        />
                                        <span className="lg:text-[10px] xl:text-xs">
                                          {todo.priority}
                                        </span>
                                      </div>
                                      <span
                                        className="inline-flex items-center gap-2 lg:px-2 lg:py-0.5 xl:py-1 rounded-full lg:text-[9px] xl:text-[11px] font-semibold"
                                        style={{
                                          backgroundColor: `${statusColor}22`,
                                          color: statusColor,
                                        }}
                                      >
                                        <span
                                          className="lg:h-1 lg:w-1 xl:h-1.5 xl:w-1.5 rounded-full"
                                          style={{
                                            backgroundColor: statusColor,
                                          }}
                                        />
                                        {todo.status}
                                      </span>
                                    </div>
                                    {updatingId === todo.id ? (
                                      <p className="lg:mt-1 xl:mt-2 lg:text-[9px] xl:text-[11px] text-primary">
                                        Updating status...
                                      </p>
                                    ) : null}
                                  </button>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              {activeTab === "list" ? (
                <div className="rounded-2xl border border-gray-100 bg-card shadow-inner overflow-hidden">
                  {/* Sortable column headers */}
                  <div className="grid grid-cols-4 bg-muted/40 border-b border-gray-100">
                    {(
                      [
                        { key: "title", label: "Title" },
                        { key: "status", label: "Status" },
                        { key: "priority", label: "Priority" },
                        { key: "tags", label: "Tags" },
                      ] as const
                    ).map(({ key, label }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() =>
                          setListSort((prev) => ({
                            key,
                            dir:
                              prev.key === key && prev.dir === "asc"
                                ? "desc"
                                : "asc",
                          }))
                        }
                        className="flex items-center gap-1 lg:px-3 xl:px-4 lg:py-2 xl:py-2.5 lg:text-[9px] xl:text-[11px] font-semibold text-muted-foreground uppercase tracking-wide hover:text-foreground transition text-left"
                      >
                        {label}
                        {listSort.key === key ? (
                          listSort.dir === "asc" ? (
                            <ChevronUp className="lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 shrink-0" />
                          ) : (
                            <ChevronDown className="lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 shrink-0" />
                          )
                        ) : (
                          <span className="lg:w-2.5 xl:w-3" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Row count */}
                  <div className="lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 border-b border-gray-50 bg-muted/20">
                    <span className="lg:text-[9px] xl:text-[10px] text-muted-foreground">
                      {sortedFiltered.length}{" "}
                      {sortedFiltered.length === 1 ? "todo" : "todos"}
                    </span>
                  </div>

                  <div className="divide-y divide-gray-50">
                    {sortedFiltered.length === 0 ? (
                      <div className="xl:px-4 lg:px-3 lg:py-5 xl:py-6 lg:text-xs xl:text-sm text-muted-foreground">
                        No todos match these filters.
                      </div>
                    ) : (
                      sortedFiltered.map((todo) => {
                        const statusColor = getStatusColor(todo.status);
                        return (
                          <button
                            key={todo.id}
                            type="button"
                            onClick={() => handleEditTodo(todo.id)}
                            draggable
                            onDragStart={(event) => {
                              event.dataTransfer.setData(
                                "text/todo-id",
                                todo.id,
                              );
                              event.dataTransfer.effectAllowed = "move";
                              setDraggingId(todo.id);
                            }}
                            onDragEnd={() => setDraggingId(null)}
                            className={`grid grid-cols-4 lg:px-3 xl:px-4 lg:py-2.5 xl:py-3 lg:gap-3 xl:gap-4 lg:text-xs xl:text-sm items-center hover:bg-primary/5 transition text-left w-full ${
                              draggingId === todo.id
                                ? "opacity-50 bg-primary/5"
                                : ""
                            }`}
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              <GripVertical className="lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-muted-foreground/40 shrink-0" />
                              <span className="truncate font-medium">
                                {todo.title}
                              </span>
                            </span>
                            <span>
                              <span
                                className="inline-flex items-center gap-1 lg:px-2 lg:py-0.5 xl:py-1 rounded-full lg:text-[9px] xl:text-[11px] font-semibold"
                                style={{
                                  backgroundColor: `${statusColor}22`,
                                  color: statusColor,
                                }}
                              >
                                <span
                                  className="lg:h-1 lg:w-1 xl:h-1.5 xl:w-1.5 rounded-full"
                                  style={{ backgroundColor: statusColor }}
                                />
                                {todo.status}
                              </span>
                            </span>
                            <span className="flex items-center lg:gap-1.5 xl:gap-2 lg:text-[11px] xl:text-xs">
                              <span
                                className={`lg:h-1 lg:w-1 xl:h-2 xl:w-2 rounded-full ${
                                  priorityDots[todo.priority]
                                }`}
                              />
                              {todo.priority}
                            </span>
                            <span className="flex flex-wrap gap-1 lg:text-[9px] xl:text-[11px] text-muted-foreground">
                              {todo.tags.length === 0 ? (
                                <span className="text-muted-foreground/40">
                                  —
                                </span>
                              ) : (
                                todo.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="lg:px-2 lg:py-0.5 rounded-full bg-muted"
                                  >
                                    {tag}
                                  </span>
                                ))
                              )}
                            </span>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              ) : null}

              {activeTab === "analytics" ? (
                <div className="lg:space-y-3 xl:space-y-4">
                  {/* Status + Priority breakdown */}
                  <div className="grid grid-cols-2 lg:gap-3 xl:gap-4">
                    <div className="rounded-2xl border border-gray-100 bg-card shadow-inner lg:p-3 xl:p-4 lg:space-y-3 xl:space-y-4">
                      <h3 className="font-semibold lg:text-xs xl:text-sm">
                        By status
                      </h3>
                      <div className="lg:space-y-2 xl:space-y-3">
                        {statusBreakdown.map(({ status, count }) => {
                          const color = getStatusColor(status);
                          const pct = visibleTodos.length
                            ? (count / visibleTodos.length) * 100
                            : 0;
                          return (
                            <div
                              key={status}
                              className="lg:space-y-0.5 xl:space-y-1"
                            >
                              <div className="flex items-center justify-between lg:text-[10px] xl:text-[11px]">
                                <div className="flex items-center lg:gap-1.5 xl:gap-2">
                                  <span
                                    className="lg:w-1.5 lg:h-1.5 xl:h-2 xl:w-2 rounded-full"
                                    style={{ backgroundColor: color }}
                                  />
                                  <span className="font-medium">{status}</span>
                                </div>
                                <span className="text-muted-foreground font-semibold">
                                  {count}
                                </span>
                              </div>
                              <div className="lg:h-1 xl:h-1.5 w-full rounded-full bg-muted/40 overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: `${pct}%`,
                                    backgroundColor: color,
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-card shadow-inner lg:p-3 xl:p-4 lg:space-y-3 xl:space-y-4">
                      <h3 className="font-semibold lg:text-xs xl:text-sm">
                        By priority
                      </h3>
                      <div className="lg:space-y-2 xl:space-y-3">
                        {priorityBreakdown.map(({ priority, count }) => {
                          const colors: Record<string, string> = {
                            Critical: "#ef4444",
                            High: "#f97316",
                            Medium: "#eab308",
                            Low: "#22c55e",
                          };
                          const color = colors[priority];
                          const pct = visibleTodos.length
                            ? (count / visibleTodos.length) * 100
                            : 0;
                          return (
                            <div
                              key={priority}
                              className="lg:space-y-0.5 xl:space-y-1"
                            >
                              <div className="flex items-center justify-between lg:text-[10px] xl:text-[11px]">
                                <div className="flex items-center lg:gap-1.5 xl:gap-2">
                                  <span
                                    className="lg:w-1.5 lg:h-1.5 xl:h-2 xl:w-2 rounded-full"
                                    style={{ backgroundColor: color }}
                                  />
                                  <span className="font-medium">
                                    {priority}
                                  </span>
                                </div>
                                <span className="text-muted-foreground font-semibold">
                                  {count}
                                </span>
                              </div>
                              <div className="lg:h-1 xl:h-1.5 w-full rounded-full bg-muted/40 overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: `${pct}%`,
                                    backgroundColor: color,
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Tag highlights */}
                  {sortedTags.length > 0 && (
                    <div className="rounded-2xl border border-gray-100 bg-card shadow-inner lg:p-3 xl:p-4 lg:space-y-2 xl:space-y-3">
                      <h3 className="font-semibold lg:text-xs xl:text-sm">
                        Top tags
                      </h3>
                      <div className="flex flex-wrap lg:gap-1.5 xl:gap-2">
                        {sortedTags.map(([tag, count]) => (
                          <span
                            key={tag}
                            className="inline-flex items-center lg:gap-1.5 xl:gap-2 lg:pl-2 xl:pl-3 lg:pr-0.5 xl:pr-1 lg:py-0.5 xl:py-1 rounded-full bg-muted lg:text-[9px] xl:text-[11px] 2xl:text-xs font-semibold text-muted-foreground"
                          >
                            {tag}
                            <span className="lg:text-[8px] xl:text-[9px] 2xl:text-[10px] px-1.5 py-0.5 rounded-full bg-white border border-gray-100">
                              {count}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

              {activeTab === "focus" ? (
                <div className="lg:space-y-3 xl:space-y-4">
                  {/* Main row: ring + breakdown */}
                  <div className="grid lg:grid-cols-3 lg:gap-3 xl:gap-4">
                    {/* Ring score card */}
                    <div className="lg:col-span-1 rounded-2xl border border-gray-100 bg-card shadow-inner lg:p-4 xl:p-5 flex flex-col items-center justify-center lg:gap-3 xl:gap-4">
                      <div className="relative flex items-center justify-center">
                        <svg
                          viewBox="0 0 120 120"
                          className="lg:w-28 lg:h-28 xl:w-32 xl:h-32 -rotate-90"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r="48"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="10"
                            className="text-muted/30"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="48"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 48}`}
                            strokeDashoffset={`${
                              2 *
                              Math.PI *
                              48 *
                              (1 - focusStats.focusScore / 100)
                            }`}
                            className="text-primary transition-all duration-700"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center rotate-0">
                          <p className="lg:text-2xl xl:text-3xl font-bold text-foreground leading-none">
                            {focusStats.focusScore}
                          </p>
                          <p className="lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium">
                            / 100
                          </p>
                        </div>
                      </div>
                      <div className="text-center lg:space-y-0.5 xl:space-y-1">
                        <p className="lg:text-[10px] xl:text-[11px] font-semibold text-foreground">
                          Focus score
                        </p>
                        <p className="lg:text-[9px] xl:text-[10px] text-muted-foreground max-w-[16ch]">
                          {focusMessage}
                        </p>
                      </div>
                    </div>

                    {/* Stats breakdown */}
                    <div className="lg:col-span-2 rounded-2xl border border-gray-100 bg-card shadow-inner lg:p-4 xl:p-5 lg:space-y-3 xl:space-y-4">
                      <h3 className="font-semibold lg:text-xs xl:text-sm">
                        Breakdown
                      </h3>
                      <div className="grid grid-cols-2 lg:gap-3 xl:gap-4">
                        {[
                          {
                            label: "Completed",
                            value: focusStats.completed,
                            color: "#6fc276",
                            bg: "bg-green-soft/20",
                          },
                          {
                            label: "Missed",
                            value: focusStats.missed,
                            color: "#ef4444",
                            bg: "bg-destructive/10",
                          },
                        ].map(({ label, value, color, bg }) => (
                          <div
                            key={label}
                            className={`${bg} rounded-xl lg:p-3 xl:p-4`}
                          >
                            <p
                              className="lg:text-2xl xl:text-3xl font-bold"
                              style={{ color }}
                            >
                              {value}
                            </p>
                            <p className="lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium mt-0.5">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="lg:space-y-1.5 xl:space-y-2">
                        {[
                          {
                            label: "Completed",
                            value: focusStats.completed,
                            color: "#f09029",
                          },
                          {
                            label: "Missed",
                            value: focusStats.missed,
                            color: "#ef4444",
                          },
                        ].map(({ label, value, color }) => {
                          const pct = focusStats.total
                            ? (value / focusStats.total) * 100
                            : 0;
                          return (
                            <div
                              key={label}
                              className="lg:space-y-0.5 xl:space-y-1"
                            >
                              <div className="flex items-center justify-between lg:text-[10px] xl:text-[11px] text-muted-foreground">
                                <span>{label}</span>
                                <span className="font-semibold">
                                  {Math.round(pct)}%
                                </span>
                              </div>
                              <div className="lg:h-1 xl:h-1.5 w-full rounded-full bg-muted/30 overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-700"
                                  style={{
                                    width: `${pct}%`,
                                    backgroundColor: color,
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <p className="lg:text-[9px] xl:text-[10px] text-muted-foreground border-t border-gray-100 lg:pt-2 xl:pt-3">
                        {focusStats.total === 0
                          ? "Complete or miss todos to see your score."
                          : `${focusStats.total} todo${focusStats.total === 1 ? "" : "s"} tracked`}
                      </p>
                    </div>
                  </div>

                  {/* In-progress todos */}
                  {(() => {
                    const inProgress = visibleTodos.filter(
                      (t) => t.status === "In Progress",
                    );
                    if (inProgress.length === 0) return null;
                    return (
                      <div className="rounded-2xl border border-gray-100 bg-muted/30 shadow-inner lg:p-3 xl:p-4 lg:space-y-2 xl:space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold lg:text-xs xl:text-sm">
                            In progress
                          </h3>
                          <span className="lg:text-[9px] xl:text-[10px] text-muted-foreground">
                            {inProgress.length}{" "}
                            {inProgress.length === 1 ? "todo" : "todos"}
                          </span>
                        </div>
                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-2 xl:gap-3">
                          {inProgress.map((todo) => (
                            <button
                              key={todo.id}
                              type="button"
                              onClick={() => handleEditTodo(todo.id)}
                              className="text-left rounded-xl border shadow-sm border-gray-100 bg-white lg:p-2 xl:p-3 hover:border-primary/40 hover:shadow-sm transition lg:space-y-1 xl:space-y-1.5"
                            >
                              <p className="font-semibold lg:text-[10px] xl:text-xs truncate">
                                {todo.title}
                              </p>
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`lg:w-1.5 lg:h-1.5 xl:w-2 xl:h-2 rounded-full ${priorityDots[todo.priority]}`}
                                />
                                <span className="lg:text-[9px] xl:text-[10px] text-muted-foreground">
                                  {todo.priority}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              ) : null}

              {!isCollectionView ? (
                <div className="rounded-3xl border border-gray-100 bg-linear-to-b from-muted/40 to-muted/20 shadow-inner lg:p-5 xl:p-6 lg:space-y-5 xl:space-y-6 lg:mt-5 xl:mt-6 relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                  <div className="flex flex-row items-center justify-between lg:gap-2 xl:gap-3">
                    <div className="space-y-0.5">
                      <p className="lg:text-[9px] xl:text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        Organize your work
                      </p>
                      <h3 className="lg:text-base xl:text-lg 2xl:text-xl font-bold text-foreground">
                        Collections
                      </h3>
                      <p className="lg:text-[10px] xl:text-[11px] text-muted-foreground">
                        Group related todos and track them separately.
                      </p>
                    </div>
                  </div>

                  {(collectionMessage || collectionError) && (
                    <div
                      className={`rounded-xl border lg:px-2 xl:px-3 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm ${
                        collectionMessage
                          ? "border-green-soft/50 bg-green-soft/10 text-foreground"
                          : "border-destructive/60 bg-destructive/10 text-destructive"
                      }`}
                    >
                      {collectionMessage || collectionError}
                    </div>
                  )}

                  <div className="grid lg:grid-cols-3 lg:gap-3 xl:gap-4">
                    <div className="lg:col-span-1 lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-card shadow-sm lg:p-3 xl:p-4 lg:space-y-2 xl:space-y-3 relative overflow-hidden">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold lg:text-xs xl:text-sm text-foreground">
                          New collection
                        </h4>
                      </div>
                      <div className="lg:space-y-2 xl:space-y-3">
                        <label className="lg:space-y-1 xl:space-y-2 block lg:text-[11px] xl:text-xs 2xl:text-sm">
                          <span className="text-muted-foreground lg:text-[11px] xl:text-xs font-semibold">
                            Name
                          </span>
                          <input
                            value={newCollection.name}
                            onChange={(e) =>
                              setNewCollection((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            placeholder="e.g. Product Launch"
                            className="w-full rounded-xl border border-gray-100 bg-white lg:px-2 xl:px-3 lg:py-1 xl:py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30"
                          />
                        </label>
                        <label className="lg:space-y-1 xl:space-y-2 block lg:text-[11px] xl:text-xs 2xl:text-sm">
                          <span className="text-muted-foreground lg:text-[11px] xl:text-xs font-semibold">
                            Description
                          </span>
                          <textarea
                            value={newCollection.description}
                            onChange={(e) =>
                              setNewCollection((prev) => ({
                                ...prev,
                                description: e.target.value,
                              }))
                            }
                            rows={3}
                            placeholder="What ties these todos together?"
                            className="w-full rounded-xl border border-gray-100 bg-white lg:px-2 xl:px-3 lg:py-1 xl:py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                          />
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-1.5 shadow-inner lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground w-full">
                            <Search className="lg:h-3 lg:w-3 xl:w-3.5 xl:h-3.5 shrink-0" />
                            <input
                              value={newCollectionSearch}
                              onChange={(e) =>
                                setNewCollectionSearch(e.target.value)
                              }
                              placeholder="Search available todos"
                              className="w-full bg-transparent focus:outline-none lg:py-0.5 xl:py-1"
                            />
                          </div>
                          <div className="lg:max-h-36 xl:max-h-44 overflow-auto lg:space-y-1 xl:space-y-2">
                            {availableTodos.length === 0 ? (
                              <p className="lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                                No todos yet. Create one to add.
                              </p>
                            ) : filteredCreationTodos.length === 0 ? (
                              <p className="lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
                                No todos match that search.
                              </p>
                            ) : (
                              filteredCreationTodos.map((todo) => {
                                const checked = newCollection.todoIds.includes(
                                  todo.id,
                                );
                                return (
                                  <label
                                    key={todo.id}
                                    className="flex items-center lg:gap-2 xl:gap-3 rounded-xl border border-gray-100 bg-white lg:px-2 xl:px-3 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm hover:border-primary/40 cursor-pointer"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() =>
                                        toggleCollectionTodo(todo.id)
                                      }
                                      className="appearance-none lg:h-3 xl:h-4 lg:w-3 xl:w-4 lg:border xl:border-2 border-primary rounded-full checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 cursor-pointer"
                                    />
                                    <span className="truncate">
                                      {todo.title}
                                    </span>
                                  </label>
                                );
                              })
                            )}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleCreateCollection}
                          className="w-full rounded-full bg-primary text-white lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold shadow-sm hover:brightness-105 transition disabled:opacity-50"
                          disabled={
                            !newCollection.name.trim() || collectionPending
                          }
                        >
                          {collectionPending ? "Saving..." : "Save collection"}
                        </button>
                      </div>
                    </div>

                    <div className="xl:col-span-2">
                      <div className="grid grid-cols-2 lg:gap-2 xl:gap-3">
                        {collections.length === 0 ? (
                          <div className="col-span-2 lg:rounded-xl xl:rounded-2xl border-2 border-dashed border-gray-200 bg-card/50 lg:px-4 xl:px-5 lg:py-8 xl:py-10 flex flex-col items-center justify-center text-center gap-2">
                            <div className="flex items-center justify-center rounded-2xl bg-muted/60 border border-gray-100 w-10 h-10">
                              <ListChecks className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <p className="lg:text-xs xl:text-sm font-semibold text-foreground">
                              No collections yet
                            </p>
                            <p className="lg:text-[10px] xl:text-[11px] text-muted-foreground max-w-[18ch]">
                              Create one to group your todos together.
                            </p>
                          </div>
                        ) : (
                          collections.map((collection) => {
                            const collectionTodos = todos.filter((todo) =>
                              todo.collectionIds.includes(collection.id),
                            );
                            const assignedCount = Math.max(
                              collection.todoIds.length,
                              collectionTodos.length,
                            );

                            return (
                              <CollectionCard
                                key={collection.id}
                                collection={collection}
                                assignedCount={assignedCount}
                                assignmentPending={assignmentPending}
                                onDelete={() =>
                                  handleDeleteCollection(collection.id)
                                }
                                deleting={
                                  collectionDeletingId === collection.id
                                }
                                isDropTarget={
                                  dropTargetCollectionId === collection.id
                                }
                                onDragEnter={() =>
                                  setDropTargetCollectionId(collection.id)
                                }
                                onDragLeave={() =>
                                  setDropTargetCollectionId((prev) =>
                                    prev === collection.id ? null : prev,
                                  )
                                }
                                onDropTodo={(todoId) =>
                                  handleCollectionDrop(todoId, collection.id)
                                }
                              />
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TodosPage;
