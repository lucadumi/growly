"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  CheckCircle2,
  ChevronDown,
  Plus,
  Sprout,
  Trash2,
  X,
} from "lucide-react";

import PageHeading from "@/app/components/page-heading";

type PostHabit = {
  id: string;
  title: string;
  description: string | null;
  cadence: string;
  category: string | null;
  votesCount: number;
  createdAt: string;
};

type UserHabit = {
  id: string;
  name: string;
  description: string | null;
  cadence: string;
  alreadyShared: boolean;
};

type Stats = {
  totalShared: number;
  totalVotes: number;
  topHabit: { title: string; votes: number } | null;
};

const CATEGORIES = [
  "Health",
  "Mindfulness",
  "Productivity",
  "Fitness",
  "Learning",
  "Creativity",
  "Sleep",
  "Nutrition",
  "Relationships",
  "Other",
];

const CADENCE_LABEL: Record<string, string> = {
  daily: "Daily",
  weekly: "Weekly",
  weekdays: "Weekdays",
  weekends: "Weekends",
  "3x per week": "3× / week",
  monthly: "Monthly",
};

function ShareModal({
  userHabits,
  onClose,
  onCreate,
}: {
  userHabits: UserHabit[];
  onClose: () => void;
  onCreate: (h: PostHabit) => void;
}) {
  const [selectedId, setSelectedId] = useState<string>("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const selected = userHabits.find((h) => h.id === selectedId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      setError("Please select a habit to share.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/post-habits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: selected.name,
          description: selected.description ?? null,
          cadence: selected.cadence,
          category: category || null,
        }),
      });
      const data = (await res.json()) as {
        postHabit?: PostHabit;
        error?: string;
      };
      if (!res.ok) {
        setError(data.error ?? "Failed to share.");
        return;
      }
      if (data.postHabit) onCreate(data.postHabit);
      onClose();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-100 lg:px-3 xl:px-4 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white";

  const available = userHabits.filter((h) => !h.alreadyShared);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm lg:p-4 xl:p-6">
      <div className="w-full max-w-md rounded-3xl bg-card shadow-2xl lg:p-6 xl:p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-bold lg:text-base xl:text-lg">Share a habit</h2>
            <p className="text-muted-foreground lg:text-[10px] xl:text-xs">
              Pick one of your habits to share with the community.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-muted transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {userHabits.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-muted/20 lg:p-6 xl:p-8 text-center">
            <Sprout className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
            <p className="font-semibold lg:text-xs xl:text-sm">
              No habits yet.
            </p>
            <p className="text-muted-foreground lg:text-[10px] xl:text-xs mt-1">
              Create some habits first, then come back to share them.
            </p>
            <Link
              href="/dashboard/habits"
              onClick={onClose}
              className="mt-3 inline-block rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
            >
              Go to habits
            </Link>
          </div>
        ) : available.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-muted/20 lg:p-6 xl:p-8 text-center">
            <CheckCircle2 className="w-8 h-8 text-green-soft mx-auto mb-2" />
            <p className="font-semibold lg:text-xs xl:text-sm">
              All habits shared!
            </p>
            <p className="text-muted-foreground lg:text-[10px] xl:text-xs mt-1">
              Every habit you track has already been shared with the community.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {error && (
              <div className="rounded-xl bg-destructive/10 text-destructive lg:px-3 xl:px-4 lg:py-2 xl:py-2.5 lg:text-[11px] xl:text-xs">
                {error}
              </div>
            )}

            {/* Habit selector */}
            <label className="flex flex-col gap-1 lg:text-[11px] xl:text-xs">
              <span className="text-muted-foreground">
                Choose a habit <span className="text-destructive">*</span>
              </span>
              <div className="relative">
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className={`${inputClass} appearance-none pr-8`}
                >
                  <option value="">— Select a habit —</option>
                  {available.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
              </div>
            </label>

            {/* Preview */}
            {selected && (
              <div className="rounded-xl border border-primary/20 bg-primary/5 lg:p-3 xl:p-4 space-y-1">
                <p className="font-semibold lg:text-[11px] xl:text-xs">
                  {selected.name}
                </p>
                {selected.description && (
                  <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] line-clamp-2">
                    {selected.description}
                  </p>
                )}
                <span className="inline-flex rounded-full bg-white border border-gray-100 lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium">
                  {CADENCE_LABEL[selected.cadence] ?? selected.cadence}
                </span>
              </div>
            )}

            {/* Category */}
            <label className="flex flex-col gap-1 lg:text-[11px] xl:text-xs">
              <span className="text-muted-foreground">
                Category{" "}
                <span className="text-muted-foreground/60">(optional)</span>
              </span>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`${inputClass} appearance-none pr-8`}
                >
                  <option value="">— None —</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
              </div>
            </label>

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-full border border-gray-200 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs font-semibold hover:border-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || !selectedId}
                className="flex-1 rounded-full bg-primary text-white lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs font-semibold hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? "Sharing..." : "Share habit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function MyHabitsClient({
  initialHabits,
  stats: _stats,
  userHabits,
}: {
  initialHabits: PostHabit[];
  stats: Stats;
  userHabits: UserHabit[];
}) {
  const [habits, setHabits] = useState(initialHabits);
  const [showCreate, setShowCreate] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const currentStats = {
    totalShared: habits.length,
    totalVotes: habits.reduce((sum, h) => sum + h.votesCount, 0),
    topHabit:
      habits.length > 0
        ? { title: habits[0].title, votes: habits[0].votesCount }
        : null,
  };

  const handleCreate = (habit: PostHabit) => {
    setHabits((prev) =>
      [habit, ...prev].sort((a, b) => b.votesCount - a.votesCount),
    );
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/post-habits/${id}`, { method: "DELETE" });
      if (res.ok) setHabits((prev) => prev.filter((h) => h.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <main className="relative min-h-screen bg-card lg:pt-14 xl:pt-20">
      {showCreate && (
        <ShareModal
          userHabits={userHabits}
          onClose={() => setShowCreate(false)}
          onCreate={handleCreate}
        />
      )}
      <div className="lg:px-6 xl:px-8 2xl:px-28 lg:py-8 xl:py-12 grid lg:gap-8 xl:gap-10">
        <PageHeading
          badgeLabel="Community"
          title="My shared habits"
          description="Habits you've shared with the Growly community. Track engagement and inspire others."
          actions={
            <button
              type="button"
              onClick={() => setShowCreate(true)}
              className="flex items-center gap-2 rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
            >
              <Plus className="w-3 h-3" /> Share a habit
            </button>
          }
        />

        {/* Stats overview */}
        <div className="grid grid-cols-3 lg:gap-3 xl:gap-4">
          {[
            {
              label: "Habits shared",
              value: currentStats.totalShared,
              color: "text-primary",
            },
            {
              label: "Total votes",
              value: currentStats.totalVotes,
              color: "text-coral",
            },
            {
              label: "Top habit votes",
              value: currentStats.topHabit?.votes ?? 0,
              color: "text-accent",
            },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-100 bg-white lg:p-4 xl:p-5 text-center"
            >
              <p className={`lg:text-2xl xl:text-3xl font-bold ${color}`}>
                {value}
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Top habit callout */}
        {currentStats.topHabit && currentStats.topHabit.votes > 0 && (
          <div className="rounded-2xl bg-secondary/40 border border-secondary lg:p-4 xl:p-5 flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary shrink-0">
              <ArrowUp className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div className="min-w-0">
              <p className="lg:text-[10px] xl:text-xs text-muted-foreground">
                Your most voted habit
              </p>
              <p className="font-semibold lg:text-sm xl:text-base truncate">
                {currentStats.topHabit.title}
              </p>
              <p className="lg:text-[10px] xl:text-xs text-primary font-semibold">
                {currentStats.topHabit.votes} vote
                {currentStats.topHabit.votes !== 1 ? "s" : ""} from the
                community
              </p>
            </div>
          </div>
        )}

        {/* Habits list */}
        {habits.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-muted/20 lg:p-10 xl:p-14 text-center">
            <Sprout className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-semibold lg:text-sm xl:text-base">
              Nothing shared yet.
            </p>
            <p className="text-muted-foreground lg:text-xs xl:text-sm mt-1">
              Pick one of your habits and share it with the community to inspire
              others.
            </p>
            <button
              type="button"
              onClick={() => setShowCreate(true)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-white lg:px-5 xl:px-6 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
            >
              <Plus className="w-3 h-3" /> Share your first habit
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 xl:gap-4">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className="rounded-2xl border border-gray-100 bg-white lg:p-4 xl:p-5 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm leading-snug flex-1">
                    {habit.title}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleDelete(habit.id)}
                    disabled={deletingId === habit.id}
                    className="shrink-0 rounded-full p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition disabled:opacity-40"
                    title="Remove from community"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>

                {habit.description && (
                  <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] line-clamp-2">
                    {habit.description}
                  </p>
                )}

                <div className="flex items-center flex-wrap gap-1.5">
                  <span className="inline-flex rounded-full bg-muted lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium">
                    {CADENCE_LABEL[habit.cadence] ?? habit.cadence}
                  </span>
                  {habit.category && (
                    <span className="inline-flex rounded-full bg-primary/10 text-primary lg:px-2 xl:px-2.5 lg:py-0.5 lg:text-[9px] xl:text-[10px] font-medium">
                      {habit.category}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                  <span className="flex items-center gap-1 text-coral lg:text-[10px] xl:text-xs font-semibold">
                    <ArrowUp className="w-3 h-3" /> {habit.votesCount} vote
                    {habit.votesCount !== 1 ? "s" : ""}
                  </span>
                  <span className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                    {new Date(habit.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/community/popular"
            className="text-muted-foreground lg:text-[10px] xl:text-xs hover:text-primary transition underline-offset-2 hover:underline"
          >
            See how your habits rank in the community →
          </Link>
        </div>
      </div>
    </main>
  );
}
