"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, Clock, Filter, Flame, TrendingUp } from "lucide-react";

import PageHeading from "@/app/components/page-heading";

type PostHabit = {
  id: string;
  title: string;
  description: string | null;
  cadence: string;
  category: string | null;
  votesCount: number;
  votedByCurrentUser: boolean;
  ownedByCurrentUser: boolean;
  authorName: string | null;
  authorUsername: string | null;
  createdAt: string;
};

const CATEGORIES = ["All", "Health", "Mindfulness", "Productivity", "Fitness", "Learning", "Creativity", "Sleep", "Nutrition", "Relationships", "Other"];

const CADENCE_LABEL: Record<string, string> = {
  daily: "Daily",
  weekly: "Weekly",
  weekdays: "Weekdays",
  weekends: "Weekends",
  "3x per week": "3× / week",
  monthly: "Monthly",
};

function VoteButton({ habit, onVote }: { habit: PostHabit; onVote: (id: string, next: boolean) => void }) {
  const [loading, setLoading] = useState(false);

  const handleVote = async () => {
    if (loading) return;
    setLoading(true);
    onVote(habit.id, !habit.votedByCurrentUser);
    try {
      const res = await fetch(`/api/post-habits/${habit.id}/vote`, { method: "POST" });
      if (!res.ok) onVote(habit.id, habit.votedByCurrentUser);
    } catch {
      onVote(habit.id, habit.votedByCurrentUser);
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
          ? "border-primary bg-primary text-white"
          : "border-gray-200 bg-white text-foreground hover:border-primary/60 hover:text-primary"
      }`}
    >
      <ArrowUp className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
      <span className="lg:text-[10px] xl:text-xs font-bold mt-0.5">{habit.votesCount}</span>
    </button>
  );
}

export default function PopularClient({ initialHabits }: { initialHabits: PostHabit[] }) {
  const [habits, setHabits] = useState(initialHabits);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState<"popular" | "newest">("popular");

  const handleVote = (id: string, voted: boolean) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? { ...h, votedByCurrentUser: voted, votesCount: voted ? h.votesCount + 1 : Math.max(0, h.votesCount - 1) }
          : h,
      ),
    );
  };

  const filtered = habits
    .filter((h) => activeCategory === "All" || h.category === activeCategory)
    .sort((a, b) => {
      if (sort === "popular") return b.votesCount - a.votesCount || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <main className="relative min-h-screen bg-card lg:pt-14 xl:pt-20">
      <div className="lg:px-6 xl:px-8 2xl:px-28 lg:py-8 xl:py-12 grid lg:gap-6 xl:gap-8">
        <PageHeading
          badgeLabel="Community"
          title="Popular habits"
          description="Habits voted by the community. Find inspiration, vote for your favorites, and share your own."
          actions={
            <Link
              href="/community/my-habits"
              className="rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
            >
              + Share a habit
            </Link>
          }
        />

        {/* Sort + Category filter */}
        <div className="flex flex-col lg:gap-3 xl:gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-3 h-3 text-muted-foreground shrink-0" />
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full lg:px-3 xl:px-4 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] font-semibold uppercase tracking-[0.2em] transition ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "border border-gray-200 text-muted-foreground hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSort("popular")}
              className={`flex items-center gap-1.5 rounded-full border lg:px-3 xl:px-4 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] font-semibold transition ${
                sort === "popular" ? "border-primary bg-primary/10 text-primary" : "border-gray-200 text-muted-foreground hover:border-primary/60"
              }`}
            >
              <TrendingUp className="w-3 h-3" /> Most voted
            </button>
            <button
              type="button"
              onClick={() => setSort("newest")}
              className={`flex items-center gap-1.5 rounded-full border lg:px-3 xl:px-4 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] font-semibold transition ${
                sort === "newest" ? "border-primary bg-primary/10 text-primary" : "border-gray-200 text-muted-foreground hover:border-primary/60"
              }`}
            >
              <Clock className="w-3 h-3" /> Newest
            </button>
          </div>
        </div>

        {/* Habits grid */}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-muted/20 lg:p-10 xl:p-14 text-center">
            <Flame className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-semibold lg:text-sm xl:text-base text-foreground">No habits here yet.</p>
            <p className="text-muted-foreground lg:text-xs xl:text-sm mt-1">
              {activeCategory !== "All" ? `No shared habits in "${activeCategory}" yet.` : "Be the first to share a habit with the community!"}
            </p>
            <Link
              href="/community/my-habits"
              className="mt-4 inline-block rounded-full bg-primary text-white lg:px-5 xl:px-6 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
            >
              Share your first habit
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 xl:gap-4">
            {filtered.map((habit, i) => (
              <div
                key={habit.id}
                className="flex gap-3 rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 hover:border-primary/20 hover:shadow-sm transition"
              >
                <VoteButton habit={habit} onVote={handleVote} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm line-clamp-2 leading-snug">{habit.title}</p>
                    {i < 3 && (
                      <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-secondary-foreground lg:text-[9px] font-bold">
                        #{i + 1}
                      </span>
                    )}
                  </div>
                  {habit.description && (
                    <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] line-clamp-2 mb-1.5">{habit.description}</p>
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
                  {(habit.authorName || habit.authorUsername) && (
                    <div className="mt-1.5">
                      {habit.authorUsername ? (
                        <Link
                          href={`/profile/${habit.authorUsername}`}
                          className="text-muted-foreground lg:text-[9px] xl:text-[10px] hover:text-primary transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          @{habit.authorUsername}
                        </Link>
                      ) : (
                        <span className="text-muted-foreground lg:text-[9px] xl:text-[10px]">{habit.authorName}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
