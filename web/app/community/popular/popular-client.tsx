"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Filter, Sprout, TrendingUp } from "lucide-react";

import PageHeading from "@/app/components/page-heading";
import PostCard, { type PostHabitData } from "@/app/community/post-card";

const CATEGORIES = [
  "All",
  "Health",
  "Mindfulness",
  "Productivity",
  "Fitness",
  "Learning",
  "Creativity",
  "Sleep",
  "Nutrition",
  "Relationships",
];

export default function PopularClient({
  initialHabits,
}: {
  initialHabits: PostHabitData[];
}) {
  const [habits, setHabits] = useState(initialHabits);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState<"popular" | "newest">("popular");

  const handleVote = (id: string, voted: boolean) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              votedByCurrentUser: voted,
              votesCount: voted
                ? h.votesCount + 1
                : Math.max(0, h.votesCount - 1),
            }
          : h,
      ),
    );
  };

  const filtered = habits
    .filter((h) => activeCategory === "All" || h.category === activeCategory)
    .sort((a, b) => {
      if (sort === "popular")
        return (
          b.votesCount - a.votesCount ||
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <main className="relative min-h-screen bg-card lg:pt-14 xl:pt-20 2xl:pt-28">
      <div className="lg:px-6 xl:px-8 2xl:px-28 grid lg:gap-6 xl:gap-8 lg:pb-8 xl:pb-12 2xl:pb-16">
        <PageHeading
          badgeLabel="Community"
          title="Popular habits"
          description="Habits voted by the community. Find inspiration, vote for your favorites, and share your own."
          actions={
            <Link
              href="/community/my-habits"
              className="rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
            >
              Share a habit
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
                      : "border border-gray-200 text-muted-foreground hover:text-primary"
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
                sort === "popular"
                  ? "border-primary/5 bg-primary/10 text-primary"
                  : "border-gray-200 text-muted-foreground hover:bg-gray-100"
              }`}
            >
              <TrendingUp className="w-3 h-3" /> Most voted
            </button>
            <button
              type="button"
              onClick={() => setSort("newest")}
              className={`flex items-center gap-1.5 rounded-full border lg:px-3 xl:px-4 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] font-semibold transition ${
                sort === "newest"
                  ? "border-primary/5 bg-primary/10 text-primary"
                  : "border-gray-200 text-muted-foreground hover:bg-gray-100"
              }`}
            >
              <Clock className="w-3 h-3" /> Newest
            </button>
          </div>
        </div>

        {/* Habits grid */}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-muted/20 lg:p-10 xl:p-14 text-center">
            <Sprout className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-semibold lg:text-sm xl:text-base text-foreground">
              No habits here yet.
            </p>
            <p className="text-muted-foreground lg:text-[11px] xl:text-xs mt-1">
              {activeCategory !== "All"
                ? `No shared habits in "${activeCategory}" yet.`
                : "Be the first to share a habit with the community!"}
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
              <PostCard
                key={habit.id}
                habit={habit}
                rank={i}
                showVote
                onVote={handleVote}
                showAdd
                compact={false}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
