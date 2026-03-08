"use client";

import { useState } from "react";
import {
  ArrowUp,
  Clock,
  Bell,
  Repeat,
  Trash2,
  Plus,
  Check,
} from "lucide-react";

export type PostHabitData = {
  id: string;
  title: string;
  description: string | null;
  cadence: string;
  category: string | null;
  timeOfDay: string | null;
  reminder: string | null;
  votesCount: number;
  votedByCurrentUser?: boolean;
  ownedByCurrentUser?: boolean;
  createdAt: string;
  user?: { name: string | null; username: string | null } | null;
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Health: { bg: "bg-green-100", text: "text-green-700" },
  Fitness: { bg: "bg-orange-100", text: "text-orange-700" },
  Mindfulness: { bg: "bg-purple-100", text: "text-purple-700" },
  Productivity: { bg: "bg-blue-100", text: "text-blue-700" },
  Learning: { bg: "bg-amber-100", text: "text-amber-700" },
  Creativity: { bg: "bg-pink-100", text: "text-pink-700" },
  Sleep: { bg: "bg-indigo-100", text: "text-indigo-700" },
  Nutrition: { bg: "bg-emerald-100", text: "text-emerald-700" },
  Relationships: { bg: "bg-rose-100", text: "text-rose-700" },
  Other: { bg: "bg-gray-100", text: "text-gray-600" },
};

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${period}`;
}

function VoteButton({
  habit,
  onVote,
}: {
  habit: PostHabitData;
  onVote: (id: string, next: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleVote = async () => {
    if (loading) return;
    setLoading(true);
    onVote(habit.id, !habit.votedByCurrentUser);
    try {
      const res = await fetch(`/api/post-habits/${habit.id}/vote`, {
        method: "POST",
      });
      if (!res.ok) onVote(habit.id, habit.votedByCurrentUser ?? false);
    } catch {
      onVote(habit.id, habit.votedByCurrentUser ?? false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleVote}
      disabled={loading}
      aria-pressed={habit.votedByCurrentUser}
      className={`flex flex-col items-center justify-center rounded-xl border-2 lg:px-2.5 xl:px-3 lg:py-2 xl:py-2.5 transition shrink-0 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed ${
        habit.votedByCurrentUser
          ? "border-accent bg-accent text-white"
          : "border-gray-200 bg-white text-foreground hover:border-primary/60 hover:text-primary"
      }`}
    >
      <ArrowUp className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
      <span className="lg:text-[10px] xl:text-xs font-bold mt-0.5">
        {habit.votesCount}
      </span>
    </button>
  );
}

function AddHabitButton({ habit }: { habit: PostHabitData }) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = async () => {
    if (loading || added) return;
    setLoading(true);
    try {
      const res = await fetch("/api/habits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: habit.title,
          description: habit.description,
          cadence: habit.cadence,
          startDate: new Date().toISOString(),
          timeOfDay: habit.timeOfDay,
          reminder: habit.reminder,
          goalAmount: 1,
          goalUnit: "count",
          goalUnitCategory: "Quantity",
        }),
      });
      if (res.ok) setAdded(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={loading || added}
      title={added ? "Added to your habits" : "Add to my habits"}
      className={`flex items-center gap-1 text-white rounded-full lg:px-2 xl:px-2.5 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] font-semibold transition disabled:cursor-not-allowed ${
        added ? "bg-accent" : "bg-blue-400 text-primary hover:opacity-60"
      }`}
    >
      {added ? "Added" : "Add"}
    </button>
  );
}

interface PostCardProps {
  habit: PostHabitData;
  rank?: number;
  showVote?: boolean;
  onVote?: (id: string, voted: boolean) => void;
  showDelete?: boolean;
  onDelete?: (id: string) => void;
  showAdd?: boolean;
  compact: boolean;
}

export default function PostCard({
  habit,
  rank,
  showVote = false,
  onVote,
  showDelete = false,
  onDelete,
  showAdd = false,
  compact,
}: PostCardProps) {
  const [deleting, setDeleting] = useState(false);
  const categoryColor = habit.category
    ? (CATEGORY_COLORS[habit.category] ?? CATEGORY_COLORS.Other)
    : null;

  const handleDelete = async () => {
    if (!onDelete || deleting) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/post-habits/${habit.id}`, {
        method: "DELETE",
      });
      if (res.ok) onDelete(habit.id);
    } finally {
      setDeleting(false);
    }
  };

  if (compact) {
    return (
      <div className="justify-between rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 flex flex-col gap-2 hover:border-gray-200 transition">
        {/* Top row: rank + category + votes */}
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 min-w-0">
            {rank !== undefined && rank < 3 && (
              <span className="shrink-0 inline-flex items-center justify-center w-4 h-4 rounded-full bg-secondary text-secondary-foreground lg:text-[8px] font-bold">
                #{rank + 1}
              </span>
            )}
            {categoryColor && habit.category && (
              <span
                className={`shrink-0 rounded-full lg:px-1.5 xl:px-2 lg:py-0.5 lg:text-[8px] xl:text-[9px] font-semibold ${categoryColor.bg} ${categoryColor.text}`}
              >
                {habit.category}
              </span>
            )}
            {/* Cadence */}
            <span className="w-fit capitalize inline-flex items-center gap-1 rounded-full bg-muted lg:px-1.5 xl:px-2 lg:py-0.5 lg:text-[8px] xl:text-[9px] text-muted-foreground font-medium">
              <Repeat className="w-2.5 h-2.5" /> {habit.cadence}
            </span>
          </div>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-secondary/60 lg:px-1.5 xl:px-2 lg:py-0.5 lg:text-[9px] xl:text-[10px] font-medium shrink-0">
            <ArrowUp className="w-2.5 h-2.5" /> {habit.votesCount}
          </span>
        </div>

        {/* Title */}
        <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm line-clamp-2 leading-snug">
          {habit.title}
        </p>

        {/* User */}
        {habit.user && (
          <p className="text-muted-foreground lg:text-[8px] xl:text-[9px] truncate">
            {habit.user.username
              ? `@${habit.user.username}`
              : (habit.user.name ?? "Anonymous")}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-3 rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 hover:border-gray-200 transition">
      {/* Vote button */}
      {showVote && onVote && <VoteButton habit={habit} onVote={onVote} />}

      {/* Vote count only (no button) */}
      {!showVote && (
        <div className="flex flex-col items-center justify-start shrink-0 lg:pt-0.5">
          <div className="flex flex-col items-center rounded-xl border-2 border-gray-100 bg-gray-50 lg:px-2 xl:px-2.5 lg:py-1.5 xl:py-2">
            <ArrowUp className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 text-muted-foreground" />
            <span className="lg:text-[10px] xl:text-xs font-bold text-muted-foreground mt-0.5">
              {habit.votesCount}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm line-clamp-2 leading-snug flex-1">
            {habit.title}
          </p>
          <div className="flex items-center gap-1.5 shrink-0">
            {rank !== undefined && rank < 3 && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-secondary-foreground lg:text-[9px] font-bold">
                #{rank + 1}
              </span>
            )}
            {showAdd && <AddHabitButton habit={habit} />}
            {showDelete && onDelete && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="text-red-400 disabled:opacity-40"
                title="Remove from community"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Description */}
        {habit.description && (
          <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] line-clamp-2 leading-relaxed">
            {habit.description}
          </p>
        )}

        {/* Badges row */}
        <div className="flex items-center flex-wrap gap-1.5">
          {/* Cadence */}
          <span className="inline-flex capitalize items-center gap-1 rounded-full bg-muted lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium">
            <Repeat className="w-2.5 h-2.5" />
            {habit.cadence}
          </span>

          {/* Category */}
          {categoryColor && habit.category && (
            <span
              className={`inline-flex rounded-full lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[10px] font-semibold ${categoryColor.bg} ${categoryColor.text}`}
            >
              {habit.category}
            </span>
          )}

          {/* Time of day */}
          {habit.timeOfDay && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 text-accent lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[10px] font-medium">
              <Clock className="w-2.5 h-2.5" />
              {formatTime(habit.timeOfDay)}
            </span>
          )}

          {/* Reminder */}
          {habit.reminder && habit.reminder !== "No reminder" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[10px] text-foreground/70 font-medium">
              <Bell className="w-2.5 h-2.5" />
              {habit.reminder}
            </span>
          )}
        </div>

        {/* Footer: user + date */}
        <div className="flex items-center justify-between mt-auto pt-1.5 border-t border-gray-50">
          {habit.user ? (
            <span className="text-muted-foreground lg:text-[9px] xl:text-[10px] truncate">
              {habit.user.username
                ? `@${habit.user.username}`
                : (habit.user.name ?? "Anonymous")}
            </span>
          ) : (
            <span />
          )}
          <span className="text-muted-foreground lg:text-[9px] xl:text-[10px] shrink-0">
            {new Date(habit.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
