export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Sprout, TrendingUp, Users } from "lucide-react";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import CommunitySearch from "./community-search";
import UserCard from "./user-card";

export default async function CommunityPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");

  const [memberCount, sharedHabitsCount, topHabits, recentMembers] =
    await Promise.all([
      prisma.user.count({ where: { privateAccount: false } }),
      prisma.postHabit.count(),
      prisma.postHabit.findMany({
        orderBy: [{ votesCount: "desc" }, { createdAt: "desc" }],
        take: 5,
        include: { user: { select: { name: true, username: true } } },
      }),
      prisma.user.findMany({
        where: { privateAccount: false },
        orderBy: { createdAt: "desc" },
        take: 6,
        select: {
          id: true,
          name: true,
          username: true,
          focusArea: true,
          location: true,
          createdAt: true,
        },
      }),
    ]);

  return (
    <main className="relative min-h-screen bg-card lg:px-6 xl:px-8 lg:pt-14 xl:pt-20">
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
                <Sprout className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
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
              className="rounded-full border border-gray-200 lg:px-3 xl:px-4 lg:py-1 xl:py-1.5 lg:text-[10px] xl:text-xs font-semibold hover:border-white transition"
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
              {topHabits.map((habit, i) => (
                <div
                  key={habit.id}
                  className="rounded-2xl border border-gray-100 bg-white lg:p-3 xl:p-4 flex flex-col justify-between"
                >
                  <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm line-clamp-2 leading-snug">
                    {habit.title}
                  </p>
                  {habit.category && (
                    <span className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                      {habit.category}
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    {habit.user?.username ? (
                      <Link
                        href={`/profile/${habit.user.username}`}
                        className="text-muted-foreground lg:text-[9px] xl:text-[10px] hover:text-primary transition truncate"
                      >
                        @{habit.user.username}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground lg:text-[9px] xl:text-[10px] truncate">
                        {habit.user?.name ?? "Anonymous"}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 lg:px-2 xl:px-2.5 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] text-foreground font-medium shrink-0">
                      ↑ {habit.votesCount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Members */}
        {recentMembers.length > 0 && (
          <div className="bg-gray-100 rounded-2xl lg:p-3 xl:p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="font-semibold lg:text-base xl:text-lg">
                  New members
                </h2>
                <p className="text-muted-foreground lg:text-[10px] xl:text-xs">
                  Recently joined the community.
                </p>
              </div>
              <Users className="lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-muted-foreground/40" />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {recentMembers.map((member) => (
                <UserCard key={member.id} {...member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
