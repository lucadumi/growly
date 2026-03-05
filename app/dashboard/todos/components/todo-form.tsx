"use client";

import { useRouter } from "next/navigation";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type React from "react";
import { ChevronDown } from "lucide-react";

import Button from "@/app/components/ui/button";
import TimeInput from "@/app/components/ui/time-input";
import type { TodoInput } from "@/lib/actions/todo-actions";
import { useUnsavedChangesGuard } from "@/app/hooks/use-unsaved-changes-guard";

type PriorityLabel = "Low" | "Medium" | "High" | "Critical";
type StatusLabel = "Planned" | "In Progress" | "Completed" | "Missed";

interface FormState {
  title: string;
  description: string;
  category: string;
  priority: PriorityLabel;
  status: StatusLabel;
  location: string;
  scheduledTime: string;
}

interface TodoFormProps {
  mode?: "create" | "edit";
  onSuccess?: (message: string) => void;
  collectionId?: string;
  initialTodo?: {
    id?: string;
    title?: string | null;
    description?: string | null;
    category?: string | null;
    priority?: string | null;
    status?: string | null;
    location?: string | null;
    scheduledTime?: string | null;
  };
}

export type TodoFormHandle = {
  isDirty: () => boolean;
  saveChanges: () => Promise<boolean>;
  discardChanges: () => void;
};

const pillByPriority: Record<PriorityLabel, string> = {
  Low: "bg-green-soft/50 text-white",
  Medium: "bg-yellow-soft/20 text-foreground",
  High: "bg-coral/90 text-white",
  Critical: "bg-primary text-white",
};

const inputClassName =
  "w-full border-none lg:px-3 xl:px-4 lg:py-1.5 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none";

const dropdownSelectWrapperClassName =
  "relative overflow-visible lg:rounded-xl xl:rounded-2xl border border-gray-100 transition-colors hover:border-primary/50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-0";

const categoryOptions = ["Personal", "Work"];
const CATEGORY_PLACEHOLDER = "Choose a category";

const categoryDropdownOptionsId = "category-dropdown-options";

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
    status: toStatusLabel(initialTodo?.status),
    location: initialTodo?.location || "",
    scheduledTime: initialTodo?.scheduledTime || "",
  };
};

const TodoForm = forwardRef<TodoFormHandle, TodoFormProps>(
  (
    { mode: modeProp = "create", onSuccess, collectionId, initialTodo },
    ref,
  ) => {
    const mode = initialTodo?.id ? "edit" : modeProp;
    const [form, setForm] = useState<FormState>(buildDefaultForm(initialTodo));
    const [isDirty, setIsDirty] = useState(false);
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
    const router = useRouter();

    const markDirty = useCallback(() => {
      setIsDirty(true);
    }, []);

    const resetFormState = useCallback(() => {
      const base = buildDefaultForm(initialTodo);
      setForm(base);
      setIsDirty(false);
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

    const buildPayload = (
      statusOverride?: StatusLabel,
    ): TodoInput & { collectionId?: string } => ({
      title: form.title || "Untitled todo",
      description: form.description,
      category: form.category,
      priority: toPriorityEnum(form.priority) as TodoInput["priority"],
      status: toStatusEnum(
        statusOverride || form.status,
      ) as TodoInput["status"],
      location: form.location || undefined,
      scheduledTime: form.scheduledTime || undefined,
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
            if (onSuccess) {
              onSuccess(successMessage);
            }
          } else if (id) {
            resetFormState();
            if (onSuccess) {
              onSuccess(successMessage);
            }
            if (!skipRedirect) {
              await router.push("/dashboard/todos");
            }
          }

          router.refresh();
          return true;
        } catch (err) {
          console.error(err);
          return false;
        }
      },
      [buildPayload, mode, onSuccess, resetFormState, router, todoId],
    );

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

    const categoryLabel = form.category || CATEGORY_PLACEHOLDER;

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
        <div>
          <div>
            <div>
              <form
                className="lg:space-y-3 xl:space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid lg:gap-3 xl:gap-4">
                  <label className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                      <span>Title</span>
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
                    <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
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
                    <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
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
                    <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                      <span>Time</span>
                    </div>
                    <TimeInput
                      time={form.scheduledTime}
                      onChange={(value) => {
                        setForm((prev) => ({ ...prev, scheduledTime: value }));
                        markDirty();
                      }}
                    />
                  </div>

                  <label className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                      <span>Location</span>
                    </div>
                    <div className={dropdownSelectWrapperClassName}>
                      <input
                        value={form.location}
                        onChange={handleChange("location")}
                        placeholder="e.g. K-Cafe, Home, Office"
                        className={inputClassName}
                      />
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <>
        {guardDialog}
        {content}
      </>
    );
  },
);

TodoForm.displayName = "TodoForm";

export default TodoForm;
