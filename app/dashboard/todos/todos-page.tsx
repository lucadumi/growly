"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ListChecks,
  Target,
  Timer,
  Search,
  X,
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
    tags?: string | null;
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

const parseTags = (value?: string | null) =>
  value
    ? value
        .split(/[\n,]+/)
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

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
    tags: parseTags(todo.tags),
    collectionIds: todo.collections || [],
  };
};

const TodosPage: React.FC<TodosPageProps> = ({
  initialTodos = [],
  initialCollections = [],
  collectionContext,
}) => {
  const [todos, setTodos] = useState<TodoRow[]>(() =>
    initialTodos.map(mapToRow),
  );
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
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
  const [newCollectionSearch, setNewCollectionSearch] = useState("");
  const [showTodoSlideOver, setShowTodoSlideOver] = useState(false);
  const [slideOverVisible, setSlideOverVisible] = useState(false);
  const createFormRef = useRef<TodoFormHandle | null>(null);
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

  useEffect(() => {
    setTodos(initialTodos.map(mapToRow));
  }, [initialTodos]);

  useEffect(() => {
    setCollections(initialCollections.map(normalizeCollection));
  }, [initialCollections]);

  const handleEditTodo = useCallback(async (todoId: string) => {
    setShowTodoSlideOver(true);
    requestAnimationFrame(() => setSlideOverVisible(true));
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

  const closeTodoSlideOver = useCallback(() => {
    setSlideOverVisible(false);
    setTimeout(() => {
      setShowTodoSlideOver(false);
      handleCancelEdit();
      createFormRef.current?.discardChanges();
    }, 300);
  }, [handleCancelEdit]);

  const openTodoSlideOver = useCallback(() => {
    setShowTodoSlideOver(true);
    requestAnimationFrame(() => setSlideOverVisible(true));
  }, []);

  const handleCreateSuccess = useCallback(
    (_message: string) => {
      closeTodoSlideOver();
    },
    [closeTodoSlideOver],
  );

  const handleRequestCreateFormClose = useCallback(() => {
    const isDirty = createFormRef.current?.isDirty() ?? false;
    if (isDirty) {
      setShowCreateFormGuard(true);
      return;
    }
    closeTodoSlideOver();
  }, [closeTodoSlideOver]);

  const handleCreateFormGuardKeep = useCallback(() => {
    setShowCreateFormGuard(false);
  }, []);

  const handleCreateFormGuardDiscard = useCallback(() => {
    createFormRef.current?.discardChanges();
    setShowCreateFormGuard(false);
    closeTodoSlideOver();
  }, [closeTodoSlideOver]);

  const handleCreateFormGuardSave = useCallback(async () => {
    const formHandle = createFormRef.current;
    if (!formHandle) {
      setShowCreateFormGuard(false);
      closeTodoSlideOver();
      return;
    }

    setCreateFormGuardSaving(true);
    try {
      const saved = await formHandle.saveChanges();
      if (saved) {
        setShowCreateFormGuard(false);
        closeTodoSlideOver();
      }
    } finally {
      setCreateFormGuardSaving(false);
    }
  }, [closeTodoSlideOver]);

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
      setShowTodoSlideOver(true);
      requestAnimationFrame(() => setSlideOverVisible(true));
      handleCancelEdit();
    }
  }, [handleCancelEdit, handleEditTodo, isCollectionView, searchParams]);

  useEffect(() => {
    if (showTodoSlideOver) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [showTodoSlideOver]);

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

  const grouped = useMemo(
    () =>
      statusLanes.map((status) => ({
        status,
        items: visibleTodos.filter((todo) => todo.status === status),
      })),
    [visibleTodos],
  );

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

  const isEditingTodo = Boolean(editTodoId);
  const editInitialTodo = editTodoData
    ? {
        id: editTodoData.id,
        title: editTodoData.title,
        description: editTodoData.description,
        category: editTodoData.category,
        priority: editTodoData.priority,
        status: editTodoData.status,
        iconName: editTodoData.iconName,
        iconColor: editTodoData.iconColor,
      }
    : null;

  const filteredCreationTodos = useMemo(() => {
    const term = newCollectionSearch.trim().toLowerCase();
    if (!term) return availableTodos;
    return availableTodos.filter((todo) =>
      todo.title.toLowerCase().includes(term),
    );
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
      <main className="relative w-full min-h-screen lg:pt-18 xl:pt-24 2xl:pt-28 text-foreground lg:pb-8 xl:pb-12 2xl:pb-16 overflow-x-hidden overflow-y-visible bg-card">
        <div className="relative z-10">
          <div className="lg:px-4 xl:px-8 2xl:px-28 pb-8 space-y-8">
            <div className="relative overflow-visible lg:space-y-4 xl:space-y-6">
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
                            className={`${buttonBase} lg:text-[10px] xl:text-xs 2xl:text-sm lg:h-6 xl:h-8 2xl:h-10 lg:px-3 xl:px-4 2xl:px-6 bg-white border border-gray-100 hover:border-primary/40`}
                          >
                            Back to all todos
                          </Link>
                        )}
                      </div>
                      <div>
                        <Button
                          className="inline-flex items-center gap-2 rounded-full bg-primary lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 text-xs font-semibold text-white transition hover:brightness-105 active:scale-95"
                          onClick={() => {
                            handleCancelEdit();
                            openTodoSlideOver();
                          }}
                        >
                          <p>Create todo</p>
                        </Button>
                      </div>
                    </div>
                  }
                />
              </div>
              <div className="grid md:grid-cols-3 lg:gap-3 xl:gap-4">
                <div className="lg:rounded-xl xl:rounded-2xl bg-card border border-gray-100 lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 relative overflow-hidden">
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
                <div className="lg:rounded-xl xl:rounded-2xl bg-card border border-gray-100 lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 relative overflow-hidden">
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
                <div className="lg:rounded-xl xl:rounded-2xl bg-card border border-gray-100 lg:p-3 xl:p-4 2xl:p-5 flex items-center gap-3 relative overflow-hidden">
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
                  className="cursor-pointer inline-flex items-center gap-2 rounded-full lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 text-xs font-medium text-red-400 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 bg-red-100"
                >
                  Delete completed
                </button>
                {deleteCompletedError ? (
                  <p className="text-[11px] text-destructive">
                    {deleteCompletedError}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full h-auto lg:px-4 xl:px-8 2xl:px-28">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                      Todo board
                    </h2>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Unassigned todos live here.
                  </p>
                </div>
              </div>

              <div className="grid lg:gap-3 xl:gap-4 lg:grid-cols-4">
                {grouped.map(({ status, items }) => {
                  const laneStatusColor = getStatusColor(status);
                  return (
                    <div
                      key={status}
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={(event) => handleDrop(event, status)}
                      className={`lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-gray-100 shadow-black/10 overflow-hidden lg:min-h-40 xl:min-h-60 transition ${
                        draggingId ? "ring-2 ring-gray-300" : ""
                      }`}
                    >
                      <div className="h-1" />
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
                            <div className="rounded-xl border-2 border-dashed border-gray-200 bg-card lg:px-2 xl:px-3 lg:py-3 xl:py-4 lg:text-[11px] xl:text-xs text-muted-foreground text-center">
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
                                  className={`block w-full text-left cursor-pointer rounded-xl border border-gray-100 hover:border-gray-300 bg-white lg:p-2 xl:p-3 transition ${
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

              {!isCollectionView ? (
                <div className="rounded-3xl border-8 border-gray-100 lg:p-5 xl:p-6 lg:space-y-5 xl:space-y-6 lg:mt-5 xl:mt-6 relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
                  <div className="flex flex-row items-center justify-between lg:gap-2 xl:gap-3">
                    <div className="space-y-0.5">
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
                    <div className="lg:col-span-1 lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-card lg:p-3 xl:p-4 lg:space-y-2 xl:space-y-3 relative overflow-hidden">
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
                            className="w-full rounded-xl border border-gray-100 bg-white lg:px-2 xl:px-3 lg:py-1 xl:py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                            className="w-full rounded-xl border border-gray-100 bg-white lg:px-2 xl:px-3 lg:py-1 xl:py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                          />
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-1.5  lg:text-[10px] xl:text-[11px] 2xl:text-xs text-muted-foreground w-full">
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
                                      className="appearance-none lg:h-3 xl:h-4 lg:w-3 xl:w-4 border-2 border-primary rounded-[5px] checked:bg-primary checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 cursor-pointer"
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
                          className="w-full rounded-full bg-primary text-white lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold hover:brightness-105 transition disabled:opacity-50"
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
                          <div className="col-span-2 lg:rounded-xl xl:rounded-2xl border-2 border-dashed border-gray-200 lg:px-4 xl:px-5 lg:py-8 xl:py-10 flex flex-col items-center justify-center text-center gap-2">
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

      {/* Todo slide-over */}
      {showTodoSlideOver && (
        <div
          className={`fixed inset-0 z-50 flex justify-end transition-colors duration-300 ${slideOverVisible ? "bg-black/20" : "bg-black/0"}`}
        >
          <div
            className="absolute inset-0 backdrop-blur-[2px]"
            onClick={handleRequestCreateFormClose}
          />
          <div
            className={`relative h-full w-full max-w-5xl bg-card shadow-2xl border-l-8 border-gray-100 flex flex-col transition-transform duration-300 ease-out ${slideOverVisible ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {isEditingTodo ? "Edit todo" : "Create todo"}
                </p>
                <h2 className="text-lg font-semibold text-foreground">
                  {isEditingTodo
                    ? (editTodoData?.title ?? "Edit todo")
                    : "Design a new todo"}
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => createFormRef.current?.saveChanges()}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white transition hover:brightness-105 active:scale-95"
                >
                  {isEditingTodo ? "Update todo" : "Create todo"}
                </button>
                <button
                  type="button"
                  onClick={handleRequestCreateFormClose}
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="min-h-full flex flex-col px-6 py-5">
                {editTodoError ? (
                  <div className="mb-4 rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3 text-xs text-destructive">
                    {editTodoError}
                  </div>
                ) : null}
                {isEditingTodo ? (
                  editTodoLoading ? (
                    <div className="rounded-2xl border border-gray-100 bg-white/70 p-6 space-y-4 animate-pulse">
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
                      key={editTodoData?.id}
                      ref={createFormRef}
                      mode="edit"
                      initialTodo={editInitialTodo}
                      onSuccess={() => closeTodoSlideOver()}
                    />
                  ) : null
                ) : (
                  <TodoForm
                    ref={createFormRef}
                    mode="create"
                    collectionId={collectionContext?.id}
                    onSuccess={handleCreateSuccess}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodosPage;
