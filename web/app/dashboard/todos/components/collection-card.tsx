"use client";

import Link from "next/link";
import { FolderOpen, Trash2 } from "lucide-react";
import type { DragEvent, FC } from "react";

import type { Collection } from "../types";

export interface CollectionCardProps {
  collection: Collection;
  assignedCount: number;
  assignmentPending: boolean;
  isDropTarget?: boolean;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
  onDropTodo: (todoId: string) => void;
  onDelete?: () => void;
  deleting?: boolean;
}

const CollectionCard: FC<CollectionCardProps> = ({
  collection,
  assignedCount,
  assignmentPending,
  isDropTarget = false,
  onDragEnter,
  onDragLeave,
  onDropTodo,
  onDelete,
  deleting = false,
}) => {
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    onDragEnter?.();
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;
    if (relatedTarget && event.currentTarget.contains(relatedTarget)) {
      return;
    }
    onDragLeave?.();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const todoId = event.dataTransfer.getData("text/todo-id");
    if (todoId) {
      onDropTodo(todoId);
    }
    onDragLeave?.();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative rounded-2xl border bg-card overflow-hidden transition-all ${
        isDropTarget
          ? "border-primary/60 ring-2 ring-primary/30 bg-primary/5 scale-[1.01]"
          : "border-gray-100 hover:border-primary/30"
      }`}
    >
      {/* Drop target overlay */}
      {isDropTarget && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="rounded-xl bg-primary/10 border-2 border-dashed border-primary/40 px-4 py-2">
            <p className="text-xs font-semibold text-primary">Drop here</p>
          </div>
        </div>
      )}

      <div className="lg:p-3 xl:p-4 lg:space-y-3 xl:space-y-4">
        {/* Header row */}
        <div className="flex items-start justify-between lg:gap-2 xl:gap-3">
          <div className="space-y-1 min-w-0 flex-1">
            <Link
              href={`/dashboard/todos/collections/${collection.id}`}
              className="block lg:text-sm xl:text-base font-bold text-foreground hover:text-primary transition truncate"
            >
              {collection.name}
            </Link>
            {collection.description ? (
              <p className="lg:text-[9px] xl:text-[10px] 2xl:text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                {collection.description}
              </p>
            ) : null}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (!onDelete) return;
                if (
                  typeof window !== "undefined" &&
                  !window.confirm(
                    `Delete "${collection.name}" and remove its todos?`,
                  )
                ) {
                  return;
                }
                onDelete();
              }}
              className="cursor-pointer"
              disabled={assignmentPending || deleting}
              aria-label="Delete collection"
            >
              <Trash2
                className={`lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-red-400 ${
                  deleting ? "animate-spin" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer: count + CTA */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 lg:px-2 xl:px-2.5 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] 2xl:text-[11px] font-semibold text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            {assignedCount} todo{assignedCount === 1 ? "" : "s"}
          </span>
          <Link
            href={`/dashboard/todos/collections/${collection.id}`}
            className="inline-flex items-center gap-1 rounded-full border border-gray-100 hover:border-white lg:px-2.5 xl:px-3 lg:py-1 xl:py-1.5 lg:text-[9px] xl:text-[10px] 2xl:text-[11px] font-semibold text-foreground transition"
          >
            View todos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
