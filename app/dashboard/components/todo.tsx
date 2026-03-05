"use client";

import Link from "next/link";
import type { FC } from "react";
import { useRef } from "react";
import {
  Check,
  Clock3,
  icons,
  LucideIcon,
  MapPin,
  Sparkles,
} from "lucide-react";

export interface TodoItem {
  id: string;
  title: string;
  iconKey: string;
  completed: boolean;
  iconColor: string;
  statusLabel: string;
  statusColor: string;
  status: "PLANNED" | "IN_PROGRESS" | "COMPLETED" | "MISSED";
  location?: string | null;
  scheduledTime?: string | null;
}

interface TodoProps {
  todo: TodoItem;
  href?: string;
  onComplete?: (id: string, origin?: HTMLElement) => void;
  isCompleting?: boolean;
  disabled?: boolean;
}

interface CheckedBoxProps {
  checked: boolean;
  onClick?: (origin?: HTMLElement) => void;
  disabled?: boolean;
}

const CheckedBox: FC<CheckedBoxProps> = ({ checked, onClick, disabled }) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const isDisabled = disabled || checked;

  return (
    <button
      ref={ref}
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isDisabled && onClick) {
          onClick(ref.current || undefined);
        }
      }}
      disabled={isDisabled}
      aria-label={checked ? "Completed" : "Mark complete"}
      className={`${
        checked
          ? "bg-green-soft border-green-soft"
          : "border-gray-300 bg-transparent"
      } border shrink-0 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-[5px] grid place-items-center transition hover:scale-105 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed`}
    >
      {checked ? (
        <Check className="lg:w-2 lg:h-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 text-white" />
      ) : (
        <span className="sr-only">Mark complete</span>
      )}
    </button>
  );
};

const formatTime = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")}${period}`;
};

const Todo: FC<TodoProps> = ({
  todo,
  href,
  onComplete,
  isCompleting,
  disabled = false,
}) => {
  return (
    <div className="relative flex items-center lg:gap-2 xl:gap-3 select-none hover:opacity-80  hover:shadow-none transition lg:rounded-xl xl:rounded-2xl">
      <Link
        href={href || "#"}
        className="flex items-start lg:gap-2 xl:gap-3 flex-1 min-w-0 group"
      >
        <div className="grid place-items-center lg:w-10 lg:h-10 xl:w-12 xl:h-12 lg:rounded-sm xl:rounded-md bg-gray-50 shrink-0">
          {(() => {
            const IconComp =
              (icons as Record<string, LucideIcon>)[todo.iconKey] || Sparkles;
            return (
              <IconComp className="lg:w-4 xl:w-5 lg:h-4 xl:h-5 text-slate-500" />
            );
          })()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-1">
            <div
              className={`font-medium lg:text-[11px] xl:text-[13px] 2xl:text-[15px] truncate text-foreground transition-colors ${
                todo.completed || isCompleting
                  ? "line-through decoration-[1.5px] decoration-muted-foreground"
                  : ""
              }`}
            >
              {todo.title}
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
            <span className="inline-flex items-center gap-1.5 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] text-muted-foreground">
              <Clock3 className="lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 shrink-0" />
              {todo.scheduledTime ? formatTime(todo.scheduledTime) : "--:--"}
            </span>
            <span className="lg:text-[7px] xl:text-[9px] text-muted-foreground/30">
              •
            </span>
            <span className="inline-flex items-center gap-1.5 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] truncate text-muted-foreground">
              <MapPin className="lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 shrink-0" />
              {todo.location || "No location"}
            </span>
          </div>
        </div>
      </Link>
      <CheckedBox
        checked={!!todo.completed || !!isCompleting}
        onClick={
          onComplete ? (origin) => onComplete(todo.id, origin) : undefined
        }
        disabled={disabled || !!todo.completed}
      />
      {isCompleting ? (
        <div
          className="absolute inset-0 lg:rounded-xl xl:rounded-2xl pointer-events-none"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        />
      ) : null}
    </div>
  );
};

export default Todo;
