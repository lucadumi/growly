"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, CheckCircle2, Sprout, X } from "lucide-react";

import Dropdown from "@/app/components/ui/dropdown";

import PageHeading from "@/app/components/page-heading";
import PostCard, { type PostHabitData } from "@/app/community/post-card";

type UserHabit = {
  id: string;
  name: string;
  description: string | null;
  cadence: string;
  timeWindow: string | null;
  alreadyShared: boolean;
  routineIds: string[];
};

type Routine = { id: string; name: string };

type Stats = {
  totalShared: number;
  totalVotes: number;
  topHabit: { title: string; votes: number } | null;
};

const CATEGORY_OPTIONS = [
  { label: "None", value: "" },
  ...["Health", "Mindfulness", "Productivity", "Fitness", "Learning", "Creativity", "Sleep", "Nutrition", "Relationships"].map((c) => ({ label: c, value: c })),
];

function ShareModal({
  userHabits,
  routines,
  onClose,
  onCreate,
}: {
  userHabits: UserHabit[];
  routines: Routine[];
  onClose: () => void;
  onCreate: (h: PostHabitData) => void;
}) {
  const [selectedId, setSelectedId] = useState<string>("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [routineFilter, setRoutineFilter] = useState("");

  const selected = userHabits.find((h) => h.id === selectedId);
  const available = userHabits.filter((h) => !h.alreadyShared);
  const filteredAvailable = routineFilter
    ? available.filter((h) => h.routineIds.includes(routineFilter))
    : available;

  const dropdownWrapperClass =
    "relative overflow-visible rounded-2xl bg-card/30 border border-gray-100 hover:border-primary/40 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-0";

  const dropdownButtonClass =
    "w-full flex items-center justify-between rounded-2xl lg:px-3 xl:px-4 lg:py-2 xl:py-2.5 lg:text-[11px] xl:text-xs font-medium text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-0";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
          habitId: selected.id,
        }),
      });
      const data = (await res.json()) as {
        postHabit?: PostHabitData;
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 lg:p-4 xl:p-6">
      <div className="w-full max-w-md rounded-3xl bg-card lg:p-6 xl:p-8">
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
            className="rounded-full text-muted-foreground p-1.5 transition"
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
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-muted/20 lg:p-6 xl:p-8 text-center">
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
            <div className="flex flex-col gap-1">
              <span className="lg:text-[11px] xl:text-xs text-muted-foreground">
                Choose a habit <span className="text-destructive">*</span>
              </span>
              {routines.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-1">
                  <button
                    type="button"
                    onClick={() => setRoutineFilter("")}
                    className={`rounded-full lg:px-2.5 xl:px-3 lg:py-0.5 xl:py-1 lg:text-[10px] xl:text-[11px] font-medium transition ${
                      routineFilter === ""
                        ? "bg-primary text-white"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    All
                  </button>
                  {routines.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRoutineFilter(r.id)}
                      className={`rounded-full lg:px-2.5 xl:px-3 lg:py-0.5 xl:py-1 lg:text-[10px] xl:text-[11px] font-medium transition ${
                        routineFilter === r.id
                          ? "bg-primary text-white"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {r.name}
                    </button>
                  ))}
                </div>
              )}
              <Dropdown
                id="share-habit"
                options={filteredAvailable.map((h) => ({ label: h.name, value: h.id }))}
                value={selectedId}
                onChange={(id) => {
                  setSelectedId(id);
                  setError("");
                }}
                placeholder="Select a habit"
                wrapperClassName={dropdownWrapperClass}
                buttonClassName={dropdownButtonClass}
              />
            </div>

            {/* Category */}
            <label className="flex flex-col gap-1 lg:text-[11px] xl:text-xs">
              <span className="text-muted-foreground">
                Category{" "}
                <span className="text-muted-foreground/60">(optional)</span>
              </span>
              <Dropdown
                id="share-category"
                options={CATEGORY_OPTIONS}
                value={category}
                onChange={setCategory}
                placeholder="None"
                wrapperClassName={dropdownWrapperClass}
                buttonClassName={dropdownButtonClass}
              />
            </label>

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-full border border-gray-200 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-xs font-semibold hover:bg-gray-100 transition"
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
  routines,
}: {
  initialHabits: PostHabitData[];
  stats: Stats;
  userHabits: UserHabit[];
  routines: Routine[];
}) {
  const [habits, setHabits] = useState(initialHabits);
  const [showCreate, setShowCreate] = useState(false);

  const currentStats = {
    totalShared: habits.length,
    totalVotes: habits.reduce((sum, h) => sum + h.votesCount, 0),
    topHabit:
      habits.length > 0
        ? { title: habits[0].title, votes: habits[0].votesCount }
        : null,
  };

  const handleCreate = (habit: PostHabitData) => {
    setHabits((prev) =>
      [habit, ...prev].sort((a, b) => b.votesCount - a.votesCount),
    );
  };

  const handleDelete = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <main className="relative min-h-screen bg-card lg:pt-14 xl:pt-20 2xl:pt-28">
      {showCreate && (
        <ShareModal
          userHabits={userHabits}
          routines={routines}
          onClose={() => setShowCreate(false)}
          onCreate={handleCreate}
        />
      )}
      <div className="lg:px-6 xl:px-8 2xl:px-28 grid lg:gap-8 xl:gap-10 lg:pb-8 xl:pb-12 2xl:pb-16">
        <PageHeading
          badgeLabel="Community"
          title="My shared habits"
          description="Habits you've shared with the Growly community. Track engagement and inspire others."
          actions={
            <button
              type="button"
              onClick={() => setShowCreate(true)}
              className="flex items-center gap-2 rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold hover:-translate-y-0.5 transition"
            >
              Share a habit
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
          <div className="rounded-2xl bg-gray-100 lg:p-4 xl:p-5 flex items-center justify-between">
            <div className="min-w-0">
              <p className="lg:text-[10px] xl:text-xs text-muted-foreground">
                Your most voted habit
              </p>
              <p className="font-semibold lg:text-sm xl:text-base truncate">
                {currentStats.topHabit.title}
              </p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-300 shrink-0">
              <ArrowUp className="w-5 h-5 text-white" />
            </div>
          </div>
        )}

        {/* Habits list */}
        {habits.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-muted/20 lg:p-10 xl:p-14 text-center">
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
              Share your first habit
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 xl:gap-4">
            {habits.map((habit) => (
              <PostCard
                key={habit.id}
                habit={habit}
                showDelete
                onDelete={handleDelete}
                compact={false}
              />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/community/popular"
            className="text-muted-foreground lg:text-[10px] xl:text-xs underline-offset-2 hover:underline"
          >
            See how your habits rank in the community →
          </Link>
        </div>
      </div>
    </main>
  );
}
