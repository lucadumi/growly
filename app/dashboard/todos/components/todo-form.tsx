"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import type React from "react";
import {
  type LucideIcon,
  ChevronDown,
  Flag,
  Group,
  Hash,
  icons,
  ImageIcon,
  ListChecks,
  Palette,
  Sparkles,
  Trash,
  X,
} from "lucide-react";

import Button from "@/app/components/ui/button";
import type { TodoInput } from "@/lib/actions/todo-actions";
import PageHeading from "@/app/components/page-heading";
import { useUnsavedChangesGuard } from "@/app/hooks/use-unsaved-changes-guard";
import { useToast } from "@/app/context/toast-context";
import { priorityDots, statusColors } from "../constants";

type PriorityLabel = "Low" | "Medium" | "High" | "Critical";
type StatusLabel = "Planned" | "In Progress" | "Completed" | "Missed";

interface FormState {
  title: string;
  description: string;
  category: string;
  priority: PriorityLabel;
  tags: string[];
  status: StatusLabel;
  iconName: string;
  iconColor: string;
}

interface TodoFormProps {
  mode?: "create" | "edit";
  variant?: "page" | "inline";
  onSuccess?: (message: string) => void;
  collectionId?: string;
  initialTodo?: {
    id?: string;
    title?: string | null;
    description?: string | null;
    category?: string | null;
    priority?: string | null;
    status?: string | null;
    tags?: string | null;
    iconName?: string | null;
    iconColor?: string | null;
  };
}

export type TodoFormHandle = {
  isDirty: () => boolean;
  saveChanges: () => Promise<boolean>;
  discardChanges: () => void;
};

const pillByPriority: Record<PriorityLabel, string> = {
  Low: "border border-gray-200 bg-card/30 text-muted-foreground hover:border-primary/40",
  Medium:
    "border border-yellow-soft/70 bg-yellow-soft/20 text-foreground hover:border-yellow-soft",
  High: "border border-coral/80 bg-coral/90 text-white hover:border-coral",
  Critical:
    "border border-primary/80 bg-primary text-white hover:border-primary",
};

const inputClassName =
  "w-full border-none lg:px-3 xl:px-4 lg:py-1.5 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none";

const dropdownSelectWrapperClassName =
  "relative overflow-visible lg:rounded-xl xl:rounded-2xl bg-card/30 shadow-inner transition-colors hover:border-primary/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-0";

const categoryOptions = ["Personal", "Work"];
const CATEGORY_PLACEHOLDER = "Choose a category";

const categoryDropdownOptionsId = "category-dropdown-options";

const curatedIconNames = [
  "Check",
  "CheckCircle",
  "Circle",
  "Square",
  "SquareCheck",
  "Plus",
  "Minus",
  "X",
  "Trash2",
  "Edit",
  "Settings",
  "Search",
  "Filter",
  "SortAsc",
  "SortDesc",
  "Calendar",
  "Clock",
  "AlarmClock",
  "Tag",
  "Hash",
  "Folder",
  "FolderOpen",

  "Briefcase",
  "ClipboardList",
  "ListTodo",
  "NotebookPen",
  "CalendarCheck",
  "FileText",
  "Laptop",
  "Presentation",

  "Home",
  "ShoppingCart",
  "Utensils",
  "Bed",
  "Shirt",
  "Car",
  "Wrench",

  "Brain",
  "Heart",
  "Dumbbell",
  "BookOpen",
  "Leaf",
  "Smile",

  "Mail",
  "Phone",
  "MessageSquare",
  "Bell",
  "Megaphone",

  "Paintbrush",
  "Camera",
  "Music",
  "Gamepad",
  "Film",

  "Globe",
  "MapPin",
  "Plane",
  "TreePalm",

  "AlertTriangle",
  "AlertCircle",
  "Star",
  "Flag",
  "Flame",
] as const;

const parseTagList = (raw?: string | null) => {
  const seen = new Set<string>();
  return (raw || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag) => {
      const normalized = tag.toLowerCase();
      if (seen.has(normalized)) {
        return false;
      }
      seen.add(normalized);
      return true;
    });
};

const serializeTags = (tags: string[]) =>
  tags
    .map((tag) => tag.trim())
    .filter(Boolean)
    .join(",");

const sanitizeDropdownValue = (value: string) =>
  value.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();

const toDropdownOptionId = (field: string, value: string) =>
  `${field}-option-${sanitizeDropdownValue(value)}`;

const toCategoryOptionId = (value: string) =>
  toDropdownOptionId("category", value);

const DROPDOWN_VERTICAL_SPACING = 8;

const updateDropdownDirection = (
  toggleRef: React.RefObject<HTMLButtonElement | null>,
  panelRef: React.RefObject<HTMLDivElement | null>,
  setDirection: React.Dispatch<React.SetStateAction<"down" | "up">>,
  fallbackHeight = 0,
) => {
  if (typeof window === "undefined") {
    return;
  }
  const toggleRect = toggleRef.current?.getBoundingClientRect();
  if (!toggleRect) {
    return;
  }
  const panelNode = panelRef.current;
  const measuredHeight = panelNode?.getBoundingClientRect().height ?? 0;
  const scrollHeight = panelNode?.scrollHeight ?? 0;
  const panelHeight = Math.max(measuredHeight, scrollHeight, fallbackHeight);
  const spacing = DROPDOWN_VERTICAL_SPACING;
  const spaceBelow = window.innerHeight - toggleRect.bottom;
  const nextDirection = spaceBelow >= panelHeight + spacing ? "down" : "up";
  setDirection((prev) => (prev === nextDirection ? prev : nextDirection));
};

const colorPalette = [
  { name: "Sky", value: "#BAE6FD" },
  { name: "Mint", value: "#BBF7D0" },
  { name: "Lemon", value: "#FEF9C3" },
  { name: "Coral", value: "#FECACA" },
  { name: "Lilac", value: "#E9D5FF" },
  { name: "Slate", value: "#E5E7EB" },
  { name: "Sunset", value: "#FDE68A" },
  { name: "Ocean", value: "#A5B4FC" },
];

const toPriorityLabel = (priority?: string | null): PriorityLabel => {
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

const toStatusLabel = (status?: string | null): StatusLabel => {
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

const toPriorityEnum = (priority: PriorityLabel) => priority.toUpperCase();

const toStatusEnum = (status: StatusLabel) =>
  status.replace(" ", "_").toUpperCase();

const buildDefaultForm = (
  initialTodo?: TodoFormProps["initialTodo"],
): FormState => {
  return {
    title: initialTodo?.title || "",
    description: initialTodo?.description || "",
    category: initialTodo?.category || "",
    priority: toPriorityLabel(initialTodo?.priority),
    tags: parseTagList(initialTodo?.tags),
    status: toStatusLabel(initialTodo?.status),
    iconName: initialTodo?.iconName || "NotebookPen",
    iconColor: initialTodo?.iconColor || "#E5E7EB",
  };
};

const TodoForm = forwardRef<TodoFormHandle, TodoFormProps>(
  (
    {
      mode: modeProp = "create",
      variant = "page",
      onSuccess,
      collectionId,
      initialTodo,
    },
    ref,
  ) => {
    const isInline = variant === "inline";
    const headingTitleClassName = isInline
      ? "lg:text-lg xl:text-xl 2xl:text-2xl font-bold"
      : "lg:text-xl xl:text-2xl 2xl:text-3xl font-bold";

    const mode = initialTodo?.id ? "edit" : modeProp;
    const [form, setForm] = useState<FormState>(buildDefaultForm(initialTodo));
    const [tagInput, setTagInput] = useState("");
    const [isDirty, setIsDirty] = useState(false);
    const [showIconPicker, setShowIconPicker] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
    const [categoryDropDirection, setCategoryDropDirection] = useState<
      "down" | "up"
    >("down");
    const categoryToggleRef = useRef<HTMLButtonElement | null>(null);
    const categoryPanelRef = useRef<HTMLDivElement | null>(null);
    const closeCategoryMenu = useCallback(() => {
      setCategoryMenuOpen(false);
      categoryToggleRef.current?.blur();
    }, []);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { toast } = useToast();

    const markDirty = useCallback(() => {
      setIsDirty(true);
    }, []);

    const formatIconLabel = useCallback((name: string) => {
      const withoutLeadingA =
        name.startsWith("A") && name[1] && /[A-Z]/.test(name[1])
          ? name.slice(1)
          : name;

      return withoutLeadingA
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replace(/([A-Za-z])(\d+)/g, "$1 $2")
        .trim();
    }, []);

    type CuratedIconName = (typeof curatedIconNames)[number];

    type IconOption = {
      name: CuratedIconName;
      label: string;
      Icon: LucideIcon;
    };

    const iconOptions = useMemo(() => {
      return curatedIconNames
        .map((name) => {
          const candidate = (icons as Record<string, LucideIcon | undefined>)[
            name
          ];

          if (!candidate) {
            return null;
          }

          return {
            name,
            label: formatIconLabel(name),
            Icon: candidate,
          };
        })
        .filter((option): option is IconOption => option !== null);
    }, [formatIconLabel]);

    const SelectedIcon = useMemo(() => {
      const candidate = (icons as Record<string, LucideIcon | undefined>)[
        form.iconName
      ];

      return candidate || Sparkles;
    }, [form.iconName]);

    const resetFormState = useCallback(() => {
      const base = buildDefaultForm(initialTodo);
      setForm(base);
      setTagInput("");
      setIsDirty(false);
      setShowIconPicker(false);
      setShowColorPicker(false);
      setCategoryMenuOpen(false);
    }, [initialTodo]);

    useEffect(() => {
      resetFormState();
    }, [resetFormState]);

    useEffect(() => {
      if (!categoryMenuOpen) return;

      const handleOutside = (event: Event) => {
        const target = event.target as Node | null;
        if (
          categoryToggleRef.current?.contains(target) ||
          categoryPanelRef.current?.contains(target)
        ) {
          return;
        }
        setCategoryMenuOpen(false);
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          event.preventDefault();
          setCategoryMenuOpen(false);
          categoryToggleRef.current?.focus();
        }
      };

      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("touchstart", handleOutside);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("mousedown", handleOutside);
        document.removeEventListener("touchstart", handleOutside);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [categoryMenuOpen]);

    useEffect(() => {
      if (!categoryMenuOpen) {
        return undefined;
      }
      const update = () =>
        updateDropdownDirection(
          categoryToggleRef,
          categoryPanelRef,
          setCategoryDropDirection,
        );
      update();
      window.addEventListener("resize", update);
      window.addEventListener("scroll", update, true);
      return () => {
        window.removeEventListener("resize", update);
        window.removeEventListener("scroll", update, true);
      };
    }, [categoryMenuOpen]);

    const handleChange =
      (field: keyof FormState) =>
      (
        event: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
      ) => {
        const value = event.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
        markDirty();
      };

    const handleAddTag = useCallback(
      (tag: string) => {
        const trimmedTag = tag.trim();

        if (!trimmedTag) {
          return;
        }

        setForm((prevForm) => {
          const existingTags = prevForm.tags || [];
          const normalizedNewTag = trimmedTag.toLowerCase();

          const isDuplicate = existingTags.some(
            (t) => t.toLowerCase() === normalizedNewTag,
          );

          if (isDuplicate) {
            return prevForm;
          }

          markDirty();

          return {
            ...prevForm,
            tags: [...existingTags, trimmedTag],
          };
        });
      },
      [markDirty],
    );

    const handleTagInputChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        if (!rawValue.includes(",")) {
          setTagInput(rawValue);
          return;
        }

        const parts = rawValue.split(",");
        const remainder = parts.pop() ?? "";
        parts.forEach((part) => {
          const candidate = part.trim();
          if (candidate) {
            handleAddTag(candidate);
          }
        });
        setTagInput(remainder.trimStart());
      },
      [handleAddTag],
    );

    const handleTagInputKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleAddTag(tagInput);
          setTagInput("");
        }
      },
      [tagInput, handleAddTag],
    );

    const handleRemoveTag = useCallback(
      (tagToRemove: string) => {
        setForm((prevForm) => ({
          ...prevForm,
          tags: prevForm.tags.filter((tag) => tag !== tagToRemove),
        }));
        markDirty();
      },
      [markDirty],
    );

    const buildPayload = (statusOverride?: StatusLabel): TodoInput & { collectionId?: string } => ({
      title: form.title || "Untitled todo",
      description: form.description,
      category: form.category,
      priority: toPriorityEnum(form.priority) as TodoInput["priority"],
      status: toStatusEnum(
        statusOverride || form.status,
      ) as TodoInput["status"],
      tags: serializeTags(form.tags),
      iconName: form.iconName,
      iconColor: form.iconColor,
      ...(collectionId && mode !== "edit" ? { collectionId } : {}),
    });

    const todoId = initialTodo?.id;

    const submitTodo = useCallback(
      async ({
        statusOverride,
        skipRedirect = false,
      }: {
        statusOverride?: StatusLabel;
        skipRedirect?: boolean;
      } = {}) => {
        try {
          const payload = buildPayload(statusOverride);
          const endpoint =
            mode === "edit" && todoId ? `/api/todos/${todoId}` : "/api/todos";
          const method = mode === "edit" && todoId ? "PUT" : "POST";

          const response = await fetch(endpoint, {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error("Request failed");
          }

          const data = await response.json();
          const id = data.todo?.id || todoId;

          setIsDirty(false);

          const successMessage =
            mode === "edit"
              ? "Todo updated"
              : statusOverride
                ? "Draft saved"
                : "Todo created";

          if (mode === "edit") {
            resetFormState();
            toast(successMessage);
            if (onSuccess) {
              onSuccess(successMessage);
            }
          } else if (id) {
            resetFormState();
            toast(successMessage);
            if (onSuccess) {
              onSuccess(successMessage);
            }
            if (!skipRedirect && !isInline) {
              await router.push("/dashboard/todos");
            }
          }

          router.refresh();
          return true;
        } catch (err) {
          console.error(err);
          toast("Something went wrong while saving this todo.", "error");
          return false;
        }
      },
      [buildPayload, mode, onSuccess, resetFormState, router, toast, todoId],
    );

    const handleSubmit = (statusOverride?: StatusLabel) => {
      startTransition(() => {
        void submitTodo({ statusOverride });
      });
    };

    const handleGuardSave = useCallback(
      () => submitTodo({ skipRedirect: true }),
      [submitTodo],
    );
    const handleGuardDiscard = useCallback(() => {
      setIsDirty(false);
    }, []);

    const { guardDialog } = useUnsavedChangesGuard({
      isDirty,
      onSave: handleGuardSave,
      onDiscard: handleGuardDiscard,
    });

    const handleDelete = () => {
      if (!todoId) return;

      startTransition(async () => {
        try {
          const response = await fetch(`/api/todos/${todoId}`, {
            method: "DELETE",
          });

          if (!response.ok) {
            throw new Error("Delete failed");
          }

          router.push("/dashboard/todos");
          router.refresh();
        } catch (err) {
          console.error(err);
          toast("Unable to delete this todo right now.", "error");
        }
      });
    };

    const summaryTitle = form.title || "Untitled todo";
    const categoryLabel = form.category || CATEGORY_PLACEHOLDER;
    const primaryCtaLabel = mode === "edit" ? "Update todo" : "Add todo";
    const statusColor =
      statusColors[form.status as keyof typeof statusColors] ??
      statusColors.Planned;

    useImperativeHandle(
      ref,
      () => ({
        isDirty: () => isDirty,
        saveChanges: () => submitTodo({ skipRedirect: true }),
        discardChanges: () => resetFormState(),
      }),
      [isDirty, resetFormState, submitTodo],
    );

    const content = (
      <div className="relative z-10">
        <div className="space-y-8 lg:mb-4 xl:mb-8 2xl:mb-12">
          <PageHeading
            badgeLabel={mode === "edit" ? "Edit todo" : "Create todo"}
            title={
              mode === "edit"
                ? "Keep this todo moving"
                : "Bring a new todo to life"
            }
            titleClassName={headingTitleClassName}
            description="Capture the essentials so you can start fast."
            actions={
              <div className="flex flex-row lg:gap-2 xl:gap-3">
                <div>
                  <Button
                    type="button"
                    onClick={() => handleSubmit("Planned")}
                    disabled={isPending}
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 text-xs font-semibold shadow-sm hover:border-primary/40 disabled:opacity-60"
                  >
                    Save draft
                  </Button>
                </div>
                <div>
                  <Button
                    type="button"
                    onClick={() => handleSubmit()}
                    disabled={isPending}
                    className="inline-flex items-center gap-2 rounded-full bg-primary lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(240,144,41,0.35)] transition hover:brightness-105 active:scale-95"
                  >
                    {primaryCtaLabel}
                  </Button>
                </div>
                <div>
                  {mode === "edit" && todoId ? (
                    <Button
                      type="button"
                      onClick={handleDelete}
                      disabled={isPending}
                      className="lg:min-w-20 xl:min-w-28 2xl:min-w-36 lg:h-6 xl:h-8 2xl:h-10 cursor-pointer shadow-sm inline-flex items-center gap-2 rounded-full lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold text-red-400 transition hover:bg-red-200 disabled:cursor-not-allowed disabled:opacity-60 bg-red-100"
                    >
                      Delete
                    </Button>
                  ) : null}
                </div>
              </div>
            }
          />
        </div>


        <div className="grid lg:grid-cols-3 lg:gap-4 xl:gap-6">
          <div className="lg:col-span-2">
            <div>
              <form
                className="lg:space-y-3 xl:space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid lg:gap-3 xl:gap-4">
                  <label className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center lg:gap-2 lg:text-xs xl:text-sm font-semibold">
                      <Hash className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
                      <span>Title</span>
                      <span className="lg:text-[9px] xl:text-[11px] text-muted-foreground font-normal">
                        Required
                      </span>
                    </div>
                    <div className={dropdownSelectWrapperClassName}>
                      <input
                        value={form.title}
                        onChange={handleChange("title")}
                        placeholder="Add a concise title"
                        className={inputClassName}
                      />
                    </div>
                  </label>

                  <label className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold">
                      <ListChecks className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
                      <span>Description</span>
                    </div>
                    <div className={dropdownSelectWrapperClassName}>
                      <textarea
                        value={form.description}
                        onChange={handleChange("description")}
                        placeholder="Add helpful notes, links, or acceptance criteria."
                        rows={3}
                        className={`${inputClassName} resize-none leading-relaxed`}
                      />
                    </div>
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold">
                      <Group className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
                      <span>Category</span>
                    </div>
                    <div className={dropdownSelectWrapperClassName}>
                      <button
                        type="button"
                        ref={categoryToggleRef}
                        aria-haspopup="listbox"
                        aria-expanded={categoryMenuOpen}
                        aria-controls={categoryDropdownOptionsId}
                        onClick={() => setCategoryMenuOpen((open) => !open)}
                        className="w-full flex items-center justify-between  lg:rounded-xl xl:rounded-2xl border-none bg-transparent lg:px-3 lg:py-1.5 xl:px-4 xl:py-3 text-left text-foreground lg:text-[11px] xl:text-xs 2xl:text-sm focus:outline-none focus-visible:outline-none"
                      >
                        <span className="truncate">{categoryLabel}</span>
                        <ChevronDown
                          className={`2xl:h-4 2xl:w-4 xl:h-3 xl:w-3 lg:w-2 lg:h-2 transition-transform ${
                            categoryMenuOpen
                              ? "rotate-180 text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                      {categoryMenuOpen && (
                        <div
                          ref={categoryPanelRef}
                          id={categoryDropdownOptionsId}
                          role="listbox"
                          aria-activedescendant={
                            form.category
                              ? toCategoryOptionId(form.category)
                              : undefined
                          }
                          className={`absolute left-0 right-0 z-20 max-h-60 overflow-hidden lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-white shadow-lg ${
                            categoryDropDirection === "down"
                              ? "top-full mt-2"
                              : "bottom-full mb-2"
                          }`}
                        >
                          {categoryOptions.map((category) => (
                            <button
                              key={category}
                              id={toCategoryOptionId(category)}
                              role="option"
                              type="button"
                              aria-selected={form.category === category}
                              onClick={() => {
                                setForm((prev) => ({
                                  ...prev,
                                  category,
                                }));
                                markDirty();
                                closeCategoryMenu();
                              }}
                              className={`w-full rounded-none border-b border-gray-100 lg:px-3 lg:py-1.5 xl:px-4 xl:py-3 text-left lg:text-[11px] xl:text-xs 2xl:text-sm transition last:border-b-0 ${
                                form.category === category
                                  ? "bg-primary/10 text-primary font-semibold"
                                  : "text-foreground hover:bg-primary/5"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </label>

                  <div className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold">
                      <Flag className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
                      <span>Priority</span>
                    </div>
                    <div className="grid grid-cols-4 lg:gap-1 xl:gap-2">
                      {(
                        ["Low", "Medium", "High", "Critical"] as PriorityLabel[]
                      ).map((priority) => (
                        <Button
                          key={priority}
                          type="button"
                          onClick={() => {
                            setForm((prev) => ({ ...prev, priority }));
                            markDirty();
                          }}
                          className={`lg:h-7 xl:h-10 2xl:h-12 lg:text-[11px] xl:text-xs 2xl:text-sm transition-all ${
                            pillByPriority[priority]
                          } ${
                            form.priority === priority
                              ? "ring-2 ring-primary/50"
                              : ""
                          }`}
                        >
                          {priority}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold">
                      <ImageIcon className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
                      <span>Icon</span>
                    </div>
                    <div className={dropdownSelectWrapperClassName}>
                      <button
                        type="button"
                        onClick={() => setShowIconPicker((open) => !open)}
                        className="w-full flex items-center justify-between lg:rounded-xl xl:rounded-2xl lg:px-2 lg:py-1.5 xl:px-4 xl:py-3 text-left lg:text-xs xl:text-sm 2xl:text-base shadow-inner hover:border-primary/40 transition"
                      >
                        <div className="flex items-center gap-3 truncate">
                          <span className="grid place-items-center lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-xl bg-muted text-primary">
                            <SelectedIcon className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
                          </span>
                          <div className="flex flex-col truncate">
                            <span className="font-semibold truncate">
                              {formatIconLabel(form.iconName)}
                            </span>
                            <span className="lg:text-[10px] xl:text-xs text-muted-foreground">
                              Tap to choose an icon
                            </span>
                          </div>
                        </div>
                        <span className="lg:text-[10px] xl:text-xs text-muted-foreground">
                          {showIconPicker ? "Close" : "Browse"}
                        </span>
                      </button>
                      {showIconPicker ? (
                        <div className="absolute z-20 mt-2 lg:h-40 xl:h-64 w-full overflow-y-auto lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-white shadow-xl lg:p-1.5 xl:p-2">
                          <div className="grid lg:grid-cols-8 xl:grid-cols-6 gap-2">
                            {iconOptions.map(({ name, Icon, label }) => (
                              <button
                                key={name}
                                type="button"
                                onClick={() => {
                                  setForm((prev) => ({
                                    ...prev,
                                    iconName: name,
                                  }));
                                  markDirty();
                                  setShowIconPicker(false);
                                }}
                                aria-label={label}
                                className={`flex items-center justify-center lg:rounded-sm xl:rounded-xl border lg:p-2 xl:p-3 transition hover:border-primary/50 hover:bg-primary/5 ${
                                  form.iconName === name
                                    ? "border-primary/60 bg-primary/10"
                                    : "border-gray-100"
                                }`}
                              >
                                <Icon className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                                <span className="sr-only">{label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold">
                      <Palette className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
                      <span>Accent color</span>
                    </div>
                    <div className={dropdownSelectWrapperClassName}>
                      <button
                        type="button"
                        onClick={() => setShowColorPicker((open) => !open)}
                        className="w-full flex items-center justify-between lg:rounded-xl xl:rounded-2xl lg:px-2 lg:py-1.5 xl:px-4 xl:py-3 text-left lg:text-xs xl:text-sm 2xl:text-base shadow-inner hover:border-primary/40 transition"
                      >
                        <div className="flex items-center lg:gap-2 xl:gap-3">
                          <span
                            className="lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-xl border border-gray-100 shadow-inner"
                            style={{ backgroundColor: form.iconColor }}
                          />
                          <div className="flex flex-col">
                            <span className="font-semibold">
                              {colorPalette.find(
                                (color) => color.value === form.iconColor,
                              )?.name || "Custom"}
                            </span>
                            <span className="lg:text-[10px] xl:text-xs text-muted-foreground">
                              {form.iconColor}
                            </span>
                          </div>
                        </div>
                        <span className="lg:text-[10px] xl:text-xs text-muted-foreground">
                          {showColorPicker ? "Close" : "Pick"}
                        </span>
                      </button>
                      {showColorPicker ? (
                        <div className="absolute z-20 mt-2 w-full  lg:rounded-xl xl:rounded-2xl border border-gray-100 bg-white shadow-xl lg:p-2 xl:p-3">
                          <div className="grid grid-cols-4 lg:gap-2 xl:gap-3">
                            {colorPalette.map((color) => (
                              <button
                                key={color.value}
                                type="button"
                                onClick={() => {
                                  setForm((prev) => ({
                                    ...prev,
                                    iconColor: color.value,
                                  }));
                                  markDirty();
                                  setShowColorPicker(false);
                                }}
                                className={`flex flex-col items-center lg:gap-1 xl:gap-2 rounded-xl border lg:p-1 xl:p-2 lg:text-[9px] xl:text-[11px] transition hover:border-primary/50 hover:bg-primary/5 ${
                                  form.iconColor === color.value
                                    ? "border-primary/60 bg-primary/10"
                                    : "border-gray-100"
                                }`}
                              >
                                <span
                                  className="w-full lg:h-7 xl:h-8 rounded-lg border border-white shadow-inner"
                                  style={{ backgroundColor: color.value }}
                                />
                                <span className="font-semibold">
                                  {color.name}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <label className="lg:space-y-1 xl:space-y-2">
                  <div className="flex items-center gap-2 lg:text-xs xl:text-sm font-semibold">
                    <Hash className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-primary" />
                    <span>Tags</span>
                  </div>
                  <div className={dropdownSelectWrapperClassName}>
                    <div className="lg:space-y-1 xl:space-y-2">
                      <input
                        value={tagInput}
                        onChange={handleTagInputChange}
                        onKeyDown={handleTagInputKeyDown}
                        placeholder="Type a tag and press Enter"
                        className={inputClassName}
                      />
                    </div>

                    {form.tags && form.tags.length > 0 && (
                      <div className="flex flex-wrap lg:gap-1 xl:gap-2 lg:m-1.5 xl:m-2">
                        {form.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center lg:text-[10px] xl:text-xs lg:px-2 lg:py-0.5 xl:py-1 rounded-full bg-primary/10 text-primary font-medium lg:mb-1.5 xl:mb-2"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-1.5 focus:outline-none hover:text-red-500 transition-colors"
                              aria-label={`Remove tag ${tag}`}
                            >
                              <X className="lg:w-2 lg:h-2 xl:w-3 xl:h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </label>
              </form>
            </div>
          </div>

          <aside className="lg:space-y-3 xl:space-y-4">
            <div className="relative overflow-hidden lg:rounded-2xl 2xl:rounded-3xl bg-linear-to-br from-light-yellow via-white to-green-soft/20 shadow-inner lg:p-3 xl:p-4 2xl:p-6">
              <div className="absolute -right-10 -top-10 lg:w-28 lg:h-28 xl:w-36 xl:h-36 bg-primary/10 rounded-full" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <span className="lg:text-[9px] xl:text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Live preview
                  </span>
                </div>

                <div className="block w-full text-left cursor-pointer rounded-xl border border-gray-100 bg-white lg:p-2 xl:p-3 shadow-sm hover:border-primary/40 hover:shadow transition">
                  <div className="flex items-start justify-between lg:gap-2 xl:gap-3">
                    <div className="space-y-1">
                      <p className="font-semibold lg:text-xs xl:text-sm leading-tight">
                        {summaryTitle}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 lg:text-[9px] xl:text-[11px] text-muted-foreground">
                        {form.tags.length === 0 ? (
                          <span className="text-muted-foreground/70">
                            No tags yet
                          </span>
                        ) : (
                          form.tags.map((tag) => (
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
                          priorityDots[
                            form.priority as keyof typeof priorityDots
                          ]
                        }`}
                      />
                      <span className="lg:text-[10px] xl:text-xs">
                        {form.priority}
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
                      {form.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {!isInline ? (
              <Link
                href="/dashboard/todos"
                className="lg:text-[11px] xl:text-xs 2xl:text-sm text-primary hover:underline"
              >
                Back to all todos
              </Link>
            ) : null}
          </aside>
        </div>
      </div>
    );

    if (isInline) {
      return (
        <>
          {guardDialog}
          {content}
        </>
      );
    }

    return (
      <>
        {guardDialog}
        <main className="lg:px-4 xl:px-8 2xl:px-28 lg:pb-8 xl:pb-12 2xl:pb-16 relative w-full min-h-screen lg:pt-16 xl:pt-24 2xl:pt-28 text-foreground bg-linear-to-b from-white/90 via-light-yellow/30 to-green-soft/15 overflow-hidden">
          <div className="pointer-events-none absolute -top-16 right-10 h-64 w-64 rounded-[2.5rem] bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-12 h-56 w-56 rounded-full bg-green-soft/30 blur-3xl" />
          {content}
        </main>
      </>
    );
  },
);

TodoForm.displayName = "TodoForm";

export default TodoForm;
