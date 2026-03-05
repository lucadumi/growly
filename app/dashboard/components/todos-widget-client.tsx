"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { FC } from "react";
import { CalendarDays, Clock3, Plus } from "lucide-react";
import PillButton from "@/app/components/ui/pill-button";

import { useXP } from "@/app/context/xp-context";
import { XP_PER_TODO } from "@/lib/xp";

import Todo, { TodoItem } from "./todo";

type TodoStatus = TodoItem["status"];

interface TodosWidgetClientProps {
  initialTodos: TodoItem[];
  totalActive: number;
}

const ACTIVE_STATUSES: TodoStatus[] = ["PLANNED", "IN_PROGRESS"];
const COMPLETED_STATUS = { label: "Completed", color: "#10B981" };

const TodosWidgetClient: FC<TodosWidgetClientProps> = ({
  initialTodos,
  totalActive,
}) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [activeCount, setActiveCount] = useState(totalActive);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [completingId, setCompletingId] = useState<string | null>(null);
  const { addXP } = useXP();

  useEffect(() => {
    setTodos(initialTodos);
    setActiveCount(totalActive);
  }, [initialTodos, totalActive]);

  const activeTodos = useMemo(
    () => todos.filter((todo) => ACTIVE_STATUSES.includes(todo.status)),
    [todos],
  );

  const displayActiveTodos = activeTodos.slice(0, 5);
  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.status === "COMPLETED"),
    [todos],
  );
  const displayTodos = useMemo(() => {
    if (activeTodos.length >= 5) {
      return displayActiveTodos;
    }

    const needed = 5 - activeTodos.length;
    const extraCompleted = completedTodos.slice(0, needed);
    return [...activeTodos, ...extraCompleted];
  }, [activeTodos, completedTodos, displayActiveTodos]);

  const remainingCount = Math.max(activeCount - displayActiveTodos.length, 0);
  const hasTodos = displayTodos.length > 0;

  const celebrate = useCallback((origin?: HTMLElement) => {
    if (typeof document === "undefined") return;

    const rect = origin?.getBoundingClientRect();
    const startX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const startY = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const colors = ["#6366F1", "#F59E0B", "#10B981", "#EC4899", "#3B82F6"];

    for (let i = 0; i < 14; i++) {
      const piece = document.createElement("span");
      piece.style.position = "fixed";
      piece.style.left = `${startX}px`;
      piece.style.top = `${startY}px`;
      piece.style.width = "8px";
      piece.style.height = "12px";
      piece.style.borderRadius = "3px";
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.zIndex = "50";
      piece.style.opacity = "0.92";
      piece.style.pointerEvents = "none";
      document.body.appendChild(piece);

      const spreadX = (Math.random() - 0.5) * 260;
      const spreadY = (Math.random() - 0.8) * 200;
      const rotation = Math.random() * 720 - 360;

      piece.animate(
        [
          { transform: "translate3d(0,0,0) rotate(0deg)", opacity: 1 },
          {
            transform: `translate3d(${spreadX}px, ${
              spreadY - 40
            }px, 0) rotate(${rotation}deg)`,
            opacity: 0,
          },
        ],
        {
          duration: 850,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        },
      ).onfinish = () => piece.remove();
    }
  }, []);

  const markComplete = useCallback(
    async (id: string, origin?: HTMLElement) => {
      if (pendingId === id) return;
      const current = todos.find((todo) => todo.id === id);
      if (!current) return;
      if (current.completed || current.status === "COMPLETED") return;

      setPendingId(id);
      setCompletingId(id);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: true,
                status: "COMPLETED",
                statusLabel: COMPLETED_STATUS.label,
                statusColor: COMPLETED_STATUS.color,
              }
            : todo,
        ),
      );
      celebrate(origin);

      try {
        const response = await fetch(`/api/todos/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "COMPLETED" }),
        });

        if (!response.ok) {
          throw new Error("Unable to update todo status");
        }

        addXP(XP_PER_TODO, "todo", {
          label: current.title,
        });
        const shouldRemove = activeCount > displayActiveTodos.length;

        setActiveCount((prev) => Math.max(prev - 1, 0));

        if (shouldRemove) {
          setTimeout(
            () => setTodos((prev) => prev.filter((todo) => todo.id !== id)),
            450,
          );
        }
      } catch (error) {
        console.error(error);
        setTodos((prev) =>
          prev.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  completed: current.completed,
                  statusLabel: current.statusLabel,
                  statusColor: current.statusColor,
                }
              : todo,
          ),
        );
      } finally {
        setTimeout(() => {
          setCompletingId((existing) => (existing === id ? null : existing));
        }, 500);
        setPendingId(null);
      }
    },
    [activeCount, celebrate, pendingId, todos, displayActiveTodos.length],
  );

  return (
    <div className="lg:p-2 2xl:p-6 text-foreground">
      <div className="flex items-center justify-between lg:mb-2 xl:mb-4">
        <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
          Today's Todos
        </h3>
        <div className="flex items-center lg:gap-2 xl:gap-3">
          <PillButton href="/dashboard/todos?create=1" variant="primary">
            <Plus className="lg:w-2 lg:h-2 xl:w-3 xl:h-3" />
            New todo
          </PillButton>
          <PillButton href="/dashboard/todos" variant="ghost">
            View Details
          </PillButton>
        </div>
      </div>

      <div className="lg:space-y-2 xl:space-y-3 2xl:space-y-4 min-h-24">
        {hasTodos ? (
          <>
            {displayTodos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                href={`/dashboard/todos?edit=${todo.id}`}
                onComplete={markComplete}
                isCompleting={completingId === todo.id}
                disabled={pendingId === todo.id}
              />
            ))}
          </>
        ) : (
          <div className="lg:rounded-xl xl:rounded-2xl border-2 border-dashed border-gray-200 bg-white/70 lg:px-3 xl:px-4 lg:py-4 xl:py-5 lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-1">No todos yet</p>
            <p>Start a new one to see it here.</p>
            <PillButton
              href="/dashboard/todos?create=1"
              variant="text"
              className="lg:mt-2 xl:mt-3 gap-2"
            >
              Create a todo
            </PillButton>
          </div>
        )}
      </div>

      {hasTodos && remainingCount > 0 ? (
        <div className="lg:mt-2 xl:mt-3 lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
          +{remainingCount} more waiting -{" "}
          <Link
            href="/dashboard/todos"
            className="text-primary hover:underline"
          >
            view all
          </Link>
        </div>
      ) : null}

      {hasTodos ? (
        <>
          <div className="lg:mt-2.5 xl:mt-4 flex items-center lg:gap-1 xl:gap-2 lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
            <CalendarDays className="lg:w-2 lg:h-2 xl:w-3 xl:h-3" />
            <span className="truncate">Tap a todo to edit details.</span>
          </div>
          <div className="mt-1 flex items-center lg:gap-1 xl:gap-2 lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
            <Clock3 className="lg:w-2 lg:h-2 xl:w-3 xl:h-3" />
            <span className="truncate">
              Need a new one? Start fresh in seconds.
            </span>
          </div>
        </>
      ) : (
        <div className="lg:mt-2.5 xl:mt-4 flex items-center lg:gap-1 xl:gap-2 lg:text-[9px] xl:text-[11px] 2xl:text-xs text-muted-foreground">
          Add a todo to see it on your dashboard.
        </div>
      )}
    </div>
  );
};

export default TodosWidgetClient;
