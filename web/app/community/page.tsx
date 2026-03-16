export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowUp, Clock, Share, TrendingUp, Users } from "lucide-react";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import CommunitySearch from "./community-search";
import PostCard from "./post-card";

export default async function CommunityPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");

  const [topHabits, communityStats, latestHabit] = await Promise.all([
    prisma.postHabit.findMany({
      orderBy: [{ votesCount: "desc" }, { createdAt: "desc" }],
      take: 5,
      include: { user: { select: { name: true, username: true } } },
    }),
    prisma.$transaction([
      prisma.user.count(),
      prisma.postHabit.count(),
      prisma.postHabitVote.count(),
    ]),
    prisma.postHabit.findFirst({
      orderBy: { createdAt: "desc" },
      include: { user: { select: { name: true, username: true } } },
    }),
  ]);

  const [membersCount, habitsSharedCount, votesCount] = communityStats;
  const topHabitsData = topHabits.map((h) => ({
    id: h.id,
    title: h.title,
    description: h.description ?? null,
    cadence: h.cadence,
    category: h.category ?? null,
    votesCount: h.votesCount,
    createdAt: h.createdAt.toISOString(),
    user: h.user ? { name: h.user.name, username: h.user.username } : null,
  }));

  return (
    <main className="relative min-h-screen bg-card lg:px-6 xl:px-8 2xl:px-28 lg:pt-14 xl:pt-20 2xl:pt-28">
      <div className="grid lg:gap-8 xl:gap-10 lg:pb-8 xl:pb-12 2xl:pb-16">
        {/* Search + Quick Nav */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-5 xl:gap-6">
          <div className="lg:col-span-2 xl:col-span-3">
            <h2 className="font-semibold lg:text-base xl:text-lg mb-1">
              Find someone
            </h2>
            <p className="text-muted-foreground lg:text-[10px] xl:text-xs mb-3">
              Search by name or username to discover other growers.
            </p>
            <CommunitySearch />
          </div>
          <div className="flex flex-col lg:gap-2 xl:gap-3">
            <h2 className="font-semibold lg:text-base xl:text-lg mb-1">
              Explore
            </h2>
            <Link
              href="/community/popular"
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 hover:bg-gray-100 transition group"
            >
              <div className="flex items-center justify-center lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                <TrendingUp className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </div>
              <div>
                <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm group-hover:text-primary transition">
                  Popular habits
                </p>
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Vote for your favorites
                </p>
              </div>
            </Link>
            <Link
              href="/community/my-habits"
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 hover:bg-gray-100 transition group"
            >
              <div className="flex items-center justify-center lg:w-8 lg:h-8 xl:w-10 xl:h-10 rounded-xl bg-accent/10 text-accent shrink-0">
                <Share className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </div>
              <div>
                <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm group-hover:text-accent transition">
                  My shared habits
                </p>
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Manage &amp; see stats
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-3">
            <h2 className="font-semibold lg:text-base xl:text-lg text-foreground">
              Community Stats
            </h2>
            <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
              A snapshot of our growing community
            </p>
          </div>
          <div className="grid lg:grid-cols-4 xl:grid-cols-4 lg:gap-3 xl:gap-4">
            <div className="rounded-2xl bg-gray-100 lg:p-4 xl:p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Members
                </p>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
                  <Users className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="font-bold lg:text-xl xl:text-2xl text-foreground">
                {membersCount.toLocaleString()}
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] mt-1">
                Growing every week
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 lg:p-4 xl:p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Habits shared
                </p>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent">
                  <Share className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="font-bold lg:text-xl xl:text-2xl text-foreground">
                {habitsSharedCount.toLocaleString()}
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] mt-1">
                Shared inspirations
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 lg:p-4 xl:p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Votes cast
                </p>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary/60 text-amber-400">
                  <ArrowUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="font-bold lg:text-xl xl:text-2xl text-foreground">
                {votesCount.toLocaleString()}
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] mt-1">
                Votes from the community
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 lg:p-4 xl:p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Latest share
                </p>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
                  <Clock className="w-3.5 h-3.5" />
                </div>
              </div>
              {latestHabit ? (
                <div className="space-y-1">
                  <p className="font-semibold lg:text-[11px] xl:text-xs line-clamp-2">
                    {latestHabit.title}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    {latestHabit.user?.username ? (
                      <Link
                        href={`/profile/${latestHabit.user.username}`}
                        className="text-muted-foreground lg:text-[9px] xl:text-[10px] hover:text-primary transition truncate"
                      >
                        @{latestHabit.user.username}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground lg:text-[9px] xl:text-[10px] truncate">
                        {latestHabit.user?.name ?? "Anonymous"}
                      </span>
                    )}
                    <span className="text-muted-foreground lg:text-[9px] xl:text-[10px] shrink-0">
                      {new Date(latestHabit.createdAt).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric" },
                      )}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground lg:text-[10px] xl:text-xs">
                  No shares yet. Be the first!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Popular Habits Preview */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-semibold lg:text-base xl:text-lg">
                Trending habits
              </h2>
              <p className="text-muted-foreground lg:text-[10px] xl:text-xs">
                Most-voted by the community this week.
              </p>
            </div>
            <Link
              href="/community/popular"
              className="rounded-full border border-gray-200 lg:px-3 xl:px-4 lg:py-0.5 xl:py-1 lg:text-[10px] xl:text-xs font-semibold bg-white hover:border-white transition"
            >
              View all
            </Link>
          </div>

          {topHabits.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-100 lg:p-6 xl:p-8 text-center">
              <TrendingUp className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
              <p className="text-muted-foreground lg:text-xs xl:text-sm">
                No shared habits yet. Be the first to share!
              </p>
              <Link
                href="/community/my-habits"
                className="mt-3 inline-block rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
              >
                Share a habit
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-3">
              {topHabitsData.map((habit, i) => (
                <PostCard
                  key={habit.id}
                  habit={habit}
                  rank={i}
                  showVote
                  compact={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
