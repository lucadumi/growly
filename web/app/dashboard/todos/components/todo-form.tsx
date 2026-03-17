"use client";

import { useRouter } from "next/navigation";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import type React from "react";

import Button from "@/app/components/ui/button";
import Dropdown from "@/app/components/ui/dropdown";
import TimeInput from "@/app/components/ui/time-input";
import type { TodoInput } from "@/lib/actions/todo-actions";

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

const categoryOptions = ["Personal", "Work"].map((o) => ({
  label: o,
  value: o,
}));
const CATEGORY_PLACEHOLDER = "Choose a category";

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
    const router = useRouter();

    const markDirty = useCallback(() => {
      setIsDirty(true);
    }, []);

    const resetFormState = useCallback(() => {
      const base = buildDefaultForm(initialTodo);
      setForm(base);
      setIsDirty(false);
    }, [initialTodo]);

    useEffect(() => {
      resetFormState();
    }, [resetFormState]);

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

    const handleTimeChange = (value: string) => {
      setForm((prev) => ({ ...prev, scheduledTime: value }));
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
                    <Dropdown
                      id="todo-category"
                      options={categoryOptions}
                      value={form.category}
                      onChange={(category) => {
                        setForm((prev) => ({ ...prev, category }));
                        markDirty();
                      }}
                      placeholder={CATEGORY_PLACEHOLDER}
                      wrapperClassName={dropdownSelectWrapperClassName}
                      buttonClassName="w-full flex items-center justify-between lg:rounded-xl xl:rounded-2xl border-none bg-transparent lg:px-3 lg:py-1.5 xl:px-4 xl:py-3 text-left text-foreground lg:text-[11px] xl:text-xs 2xl:text-sm focus:outline-none focus-visible:outline-none"
                    />
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

                  <label className="lg:space-y-1 xl:space-y-2">
                    <div className="flex items-center lg:text-xs xl:text-sm font-semibold">
                      <span>Time</span>
                    </div>
                    <div>
                      <TimeInput
                        time={form.scheduledTime}
                        onChange={handleTimeChange}
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

    return <>{content}</>;
  },
);

TodoForm.displayName = "TodoForm";

export default TodoForm;
