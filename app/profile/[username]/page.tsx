export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, CalendarDays, Lock, MapPin, Sprout } from "lucide-react";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { buildHabitAnalytics } from "@/lib/habit-analytics";

const CADENCE_LABEL: Record<string, string> = {
  daily: "Daily",
  weekly: "Weekly",
  weekdays: "Weekdays",
  weekends: "Weekends",
  "3x per week": "3× / week",
  monthly: "Monthly",
};

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");

  const user = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      name: true,
      username: true,
      bio: true,
      focusArea: true,
      location: true,
      privateAccount: true,
      createdAt: true,
      _count: { select: { habits: true, postHabits: true } },
    },
  });

  if (!user) notFound();

  const isOwnProfile = session.user.id === user.id;
  const isPrivate = user.privateAccount && !isOwnProfile;

  const memberSince = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Load shared habits (visible to all unless private)
  const sharedHabits = isPrivate
    ? []
    : await prisma.postHabit.findMany({
        where: { userId: user.id },
        orderBy: [{ votesCount: "desc" }, { createdAt: "desc" }],
        take: 12,
      });

  // Load habit stats for public info (own profile only or public)
  let bestStreak = 0;
  if (!isPrivate) {
    const [habits, progressEntries] = await Promise.all([
      prisma.habit.findMany({ where: { userId: user.id } }),
      prisma.habitDailyProgress.findMany({
        where: { habit: { userId: user.id } },
        select: { habitId: true, date: true, progress: true },
      }),
    ]);
    const { habitsWithStats } = buildHabitAnalytics(habits, progressEntries);
    bestStreak = habitsWithStats.reduce((max, h) => Math.max(max, h.streak ?? 0), 0);
  }

  // Voted habits for current viewer
  const votedSet = new Set<string>();
  if (!isPrivate && sharedHabits.length > 0) {
    const liked = await prisma.postHabitLike.findMany({
      where: { userId: session.user.id, postHabitId: { in: sharedHabits.map((h) => h.id) } },
      select: { postHabitId: true },
    });
    liked.forEach((l) => votedSet.add(l.postHabitId));
  }

  return (
    <main className="relative min-h-screen bg-card lg:pt-14 xl:pt-20">
      <div className="lg:px-6 xl:px-8 2xl:px-28 lg:py-8 xl:py-12 grid lg:gap-8 xl:gap-10 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-none">

        {/* Profile header */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 xl:gap-8 items-start">
          {/* Avatar + name */}
          <div className="lg:col-span-1 flex flex-col items-center text-center lg:gap-3 xl:gap-4">
            <div className="lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-3xl overflow-hidden shadow-sm">
              <Image src="/placeholder.png" alt={user.name} width={112} height={112} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-bold lg:text-lg xl:text-xl 2xl:text-2xl">{user.name}</h1>
              {user.username && (
                <p className="text-muted-foreground lg:text-xs xl:text-sm">@{user.username}</p>
              )}
            </div>
            {isOwnProfile && (
              <Link
                href="/account"
                className="rounded-full border border-gray-200 lg:px-3 xl:px-4 lg:py-1 xl:py-1.5 lg:text-[10px] xl:text-xs font-semibold text-muted-foreground hover:border-primary/60 hover:text-primary transition"
              >
                Edit profile
              </Link>
            )}
          </div>

          {/* Profile details */}
          <div className="lg:col-span-2 xl:col-span-3 grid lg:gap-4 xl:gap-5">
            {user.bio && (
              <p className="text-muted-foreground lg:text-xs xl:text-sm leading-relaxed">{user.bio}</p>
            )}

            <div className="flex flex-wrap lg:gap-3 xl:gap-4">
              {user.focusArea && (
                <span className="flex items-center gap-1.5 rounded-full bg-primary/10 text-primary lg:px-3 xl:px-4 lg:py-1 xl:py-1.5 lg:text-[10px] xl:text-xs font-medium">
                  <Sprout className="w-3 h-3" /> {user.focusArea}
                </span>
              )}
              {user.location && (
                <span className="flex items-center gap-1 text-muted-foreground lg:text-[10px] xl:text-xs">
                  <MapPin className="w-3 h-3" /> {user.location}
                </span>
              )}
              <span className="flex items-center gap-1 text-muted-foreground lg:text-[10px] xl:text-xs">
                <CalendarDays className="w-3 h-3" /> Member since {memberSince}
              </span>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap lg:gap-4 xl:gap-6">
              {[
                { label: "Habits tracked", value: user._count.habits },
                { label: "Habits shared", value: user._count.postHabits },
                { label: "Best streak", value: `${bestStreak}d` },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-bold lg:text-base xl:text-lg text-primary">{value}</p>
                  <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Private account message */}
        {isPrivate ? (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-muted/20 lg:p-10 xl:p-14 text-center">
            <Lock className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="font-semibold lg:text-sm xl:text-base">Private profile</p>
            <p className="text-muted-foreground lg:text-xs xl:text-sm mt-1">
              This member keeps their habits private. Respect their space.
            </p>
          </div>
        ) : sharedHabits.length > 0 ? (
          <div>
            <div className="mb-4">
              <h2 className="font-semibold lg:text-base xl:text-lg">Shared habits</h2>
              <p className="text-muted-foreground lg:text-[10px] xl:text-xs">
                Habits {isOwnProfile ? "you've" : `${user.name.split(" ")[0]} has`} shared with the community.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 xl:gap-4">
              {sharedHabits.map((habit) => (
                <div
                  key={habit.id}
                  className="rounded-2xl border border-gray-100 bg-white lg:p-4 xl:p-5 flex flex-col gap-2"
                >
                  <p className="font-semibold lg:text-[11px] xl:text-xs 2xl:text-sm">{habit.title}</p>
                  {habit.description && (
                    <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] line-clamp-2">{habit.description}</p>
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
                      <ArrowUp className="w-3 h-3" /> {habit.votesCount} vote{habit.votesCount !== 1 ? "s" : ""}
                    </span>
                    {votedSet.has(habit.id) && (
                      <span className="text-primary lg:text-[9px] xl:text-[10px] font-medium">You voted ✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/community/popular"
                className="text-muted-foreground lg:text-[10px] xl:text-xs hover:text-primary transition underline-offset-2 hover:underline"
              >
                Explore all community habits →
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-200 bg-muted/20 lg:p-8 xl:p-10 text-center">
            <Sprout className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
            <p className="text-muted-foreground lg:text-xs xl:text-sm">
              {isOwnProfile
                ? "You haven't shared any habits yet."
                : `${user.name.split(" ")[0]} hasn't shared any habits yet.`}
            </p>
            {isOwnProfile && (
              <Link
                href="/community/my-habits"
                className="mt-3 inline-block rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
              >
                Share your first habit
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
