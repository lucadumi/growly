import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { CalendarDays, Flame, ShieldCheck } from "lucide-react";

import DeleteAccountForm from "./components/delete-account-form";
import EditProfileForm from "./components/edit-profile-form";
import SignOutButton from "./components/sign-out-button";
import type { AccountAnalytics } from "./types";
import { auth } from "@/lib/auth";
import { buildHabitAnalytics } from "@/lib/habit-analytics";
import { formatDayKey } from "@/lib/habit-progress";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const focusAreas = [
  {
    title: "Weekly rhythm audit",
    description:
      "Reflect on the rituals that feel effortless and adjust the rest.",
    icon: CalendarDays,
    iconBg: "bg-blue-500",
  },
  {
    title: "Energy supply",
    description:
      "Schedule gentle breaks so your streaks survive the hard days.",
    icon: Flame,
    iconBg: "bg-coral",
  },
  {
    title: "Guardrails",
    description: "Review quiet reminders and permissions to keep focus sacred.",
    icon: ShieldCheck,
    iconBg: "bg-[#41ab5d]",
  },
];

const quickLinks = [
  {
    label: "Open dashboard",
    href: "/dashboard",
  },
  {
    label: "Highlight habits",
    href: "/dashboard/habits",
  },
  {
    label: "Check analytics",
    href: "/dashboard/analytics",
  },
];

export default async function AccountPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  const name = session.user?.name ?? "Growly member";
  const email = session.user?.email ?? "No email on file";
  const editableName = session.user?.name ?? "";
  const editableEmail = session.user?.email ?? "";
  const [
    habits,
    progressEntries,
    completedTodos,
    inProgressTodos,
    plannedTodos,
    routineCount,
    userRecord,
  ] = await Promise.all([
    prisma.habit.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    }),
    prisma.habitDailyProgress.findMany({
      where: {
        habit: { userId: session.user.id },
      },
      select: {
        habitId: true,
        date: true,
        progress: true,
      },
    }),
    prisma.todo.count({
      where: { userId: session.user.id, archived: false, status: "COMPLETED" },
    }),
    prisma.todo.count({
      where: {
        userId: session.user.id,
        archived: false,
        status: "IN_PROGRESS",
      },
    }),
    prisma.todo.count({
      where: { userId: session.user.id, archived: false, status: "PLANNED" },
    }),
    prisma.routine.count({ where: { userId: session.user.id } }),
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        createdAt: true,
        username: true,
        bio: true,
        location: true,
        focusArea: true,
        privateAccount: true,
      },
    }),
  ]);

  const { habitsWithStats, progressByDay } = buildHabitAnalytics(
    habits,
    progressEntries,
  );

  const bestStreak = habitsWithStats.reduce(
    (max, habit) => Math.max(max, habit.streak ?? 0),
    0,
  );

  const weeklyWins = Array.from({ length: 7 }, (_, index) => {
    const day = new Date();
    day.setUTCDate(day.getUTCDate() - index);
    const key = formatDayKey(day);
    return (progressByDay[key] ?? 0) >= 1 ? 1 : 0;
  }).reduce<number>((sum, value) => sum + value, 0);

  const recoveryDays = Math.max(0, 7 - weeklyWins);

  const stats = [
    {
      label: "Current streak",
      value: `${bestStreak} days`,
      tone: bestStreak > 0 ? "text-primary" : "text-muted-foreground",
    },
    {
      label: "Weekly wins",
      value: `${weeklyWins} / 7`,
      tone: weeklyWins >= 5 ? "text-green-soft" : "text-muted-foreground",
    },
    {
      label: "Recovery days",
      value: `${recoveryDays} open`,
      tone: "text-muted-foreground",
    },
  ];

  const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const day = new Date();
    day.setUTCDate(day.getUTCDate() - (6 - index));
    const key = formatDayKey(day);
    return {
      label: DAY_LABELS[day.getUTCDay()],
      active: (progressByDay[key] ?? 0) >= 1,
    };
  });

  const HABIT_COLORS = ["#4ade80", "#fb7185", "#38bdf8", "#fb923c", "#a78bfa"];
  const habitSlices = habitsWithStats
    .slice()
    .sort((a, b) => b.successRate - a.successRate)
    .slice(0, 5)
    .map((h, i) => ({
      name: h.name.length > 18 ? h.name.slice(0, 16) + "…" : h.name,
      successRate: h.successRate,
      color: HABIT_COLORS[i % HABIT_COLORS.length],
    }));

  const analytics: AccountAnalytics = { stats, weekDays, habitSlices };

  const NUM_WEEKS = 8;
  const weekLabels = Array.from({ length: NUM_WEEKS }, (_, w) => {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - (NUM_WEEKS - 1 - w) * 7);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  });

  const habitLineData = habitsWithStats
    .slice()
    .sort((a, b) => b.successRate - a.successRate)
    .slice(0, 5)
    .map((habit, i) => ({
      id: habit.id,
      name: habit.name.length > 15 ? habit.name.slice(0, 13) + "…" : habit.name,
      color: HABIT_COLORS[i % HABIT_COLORS.length],
      weeklyRates: Array.from({ length: NUM_WEEKS }, (_, w) => {
        const weekEnd = new Date();
        weekEnd.setUTCDate(weekEnd.getUTCDate() - (NUM_WEEKS - 1 - w) * 7);
        weekEnd.setUTCHours(23, 59, 59, 999);
        const weekStart = new Date(weekEnd);
        weekStart.setUTCDate(weekStart.getUTCDate() - 6);
        weekStart.setUTCHours(0, 0, 0, 0);
        const entries = progressEntries.filter((e) => {
          const d = new Date(e.date);
          return e.habitId === habit.id && d >= weekStart && d <= weekEnd;
        });
        return Math.round(
          (entries.filter((e) => e.progress >= 1).length / 7) * 100,
        );
      }),
    }));

  const topHabits = habitsWithStats
    .filter((h) => (h.streak ?? 0) > 0)
    .sort((a, b) => (b.streak ?? 0) - (a.streak ?? 0))
    .slice(0, 3);

  const totalTodos = completedTodos + inProgressTodos + plannedTodos;

  const memberSince = userRecord?.createdAt
    ? new Date(userRecord.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-card lg:pt-14 xl:pt-20">
      <div className="relative z-10 grid lg:grid-cols-5 xl:grid-cols-10 lg:gap-5 xl:gap-6 lg:px-6 xl:px-8 2xl:px-28 lg:pb-8 xl:pb-12 2xl:pb-16">
        {/* Left column */}
        <div className="lg:col-span-2 xl:col-span-3 grid lg:gap-6 xl:gap-8">
          {/* Profile widget */}
          <div className="h-full">
            <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
              Profile
            </h3>
            <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
              Your Growly identity.
            </p>
            <div className="flex items-center gap-4">
              <div className="lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 shrink-0 rounded-2xl border border-gray-100 overflow-hidden pointer-events-none select-none">
                <Image
                  src={"/placeholder.png"}
                  alt={name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <p className="lg:text-sm xl:text-base 2xl:text-lg font-semibold text-foreground truncate">
                  {name}
                </p>
                <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground truncate">
                  {email}
                </p>
              </div>
            </div>
          </div>

          {/* Your journey widget */}
          <div className="h-full">
            <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
              Your journey
            </h3>
            <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
              {memberSince
                ? `Growing since ${memberSince}.`
                : "Your Growly presence at a glance."}
            </p>
            <div className="grid grid-cols-3 lg:gap-2 xl:gap-3">
              {[
                { label: "Habits", value: habits.length },
                { label: "Routines", value: routineCount },
                { label: "Todos", value: totalTodos },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center rounded-2xl bg-muted/40 lg:py-2.5 xl:py-3"
                >
                  <span className="lg:text-base xl:text-lg 2xl:text-xl font-bold text-primary">
                    {value}
                  </span>
                  <span className="lg:text-[8px] xl:text-[10px] 2xl:text-xs text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Edit profile widget */}
          <div className="h-full flex flex-col">
            <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
              Edit profile
            </h3>
            <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
              Keep your name and email current.
            </p>
            <EditProfileForm
              initialName={editableName}
              initialEmail={editableEmail}
              initialUsername={userRecord?.username}
              initialBio={userRecord?.bio}
              initialLocation={userRecord?.location}
              initialFocusArea={userRecord?.focusArea}
              initialPrivateAccount={userRecord?.privateAccount}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-3 xl:col-span-7 grid lg:gap-5 xl:gap-6">
          {/* Top row: Momentum + Quick links */}
          <div className="grid row-span-2 grid-cols-2 lg:gap-3 xl:gap-4">
            <div className="col-span-1 h-full flex flex-col lg:gap-4 xl:gap-5">
              {/* This week */}
              <div>
                <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                  This week
                </h3>
                <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                  Days you showed up.
                </p>
                <div className="flex flex-col lg:gap-3 xl:gap-4">
                  <div className="grid grid-cols-7 lg:gap-1.5 xl:gap-2">
                    {analytics.weekDays.map(({ label, active }, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center lg:gap-1 xl:gap-1.5"
                      >
                        <div
                          className={`lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full transition-colors ${
                            active ? "bg-primary" : "bg-muted"
                          }`}
                        />
                        <span className="text-muted-foreground lg:text-[8px] xl:text-[9px] 2xl:text-[11px]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="lg:text-sm xl:text-base 2xl:text-lg font-semibold text-foreground">
                      {analytics.weekDays.filter((d) => d.active).length} of 7
                      days active
                    </p>
                    <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mt-0.5 xl:mt-1">
                      {analytics.weekDays.filter((d) => d.active).length >= 5
                        ? "Strong week — keep the rhythm going."
                        : analytics.weekDays.filter((d) => d.active).length >= 3
                          ? "Good progress — a few more days to go."
                          : "Every streak starts somewhere."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Habit health */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                  Habit health
                </h3>
                <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                  21-day success rate.
                </p>
                <div className="flex-1 lg:rounded-2xl xl:rounded-3xl border-8 border-gray-100 lg:p-3 xl:p-4 flex flex-col lg:gap-2 xl:gap-3">
                  {habitLineData.length > 0 ? (
                    <>
                      <svg
                        viewBox="0 0 300 130"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                        preserveAspectRatio="none"
                      >
                        {/* Horizontal grid lines + y labels */}
                        {[0, 25, 50, 75, 100].map((tick) => {
                          const y = 8 + 102 - (tick / 100) * 102;
                          return (
                            <g key={tick}>
                              <line
                                x1={28}
                                x2={296}
                                y1={y}
                                y2={y}
                                stroke="rgba(148,163,184,0.3)"
                                strokeWidth="1"
                              />
                              <text
                                x={24}
                                y={y + 3.5}
                                textAnchor="end"
                                fontSize="8"
                                fill="rgba(100,116,139,0.65)"
                              >
                                {tick}
                              </text>
                            </g>
                          );
                        })}
                        {/* Habit polylines + dots */}
                        {habitLineData.map((habit) => (
                          <g key={habit.id}>
                            <polyline
                              points={habit.weeklyRates
                                .map((rate, w) => {
                                  const x = 28 + w * (268 / (NUM_WEEKS - 1));
                                  const y = 8 + 102 - (rate / 100) * 102;
                                  return `${x.toFixed(1)},${y.toFixed(1)}`;
                                })
                                .join(" ")}
                              fill="none"
                              stroke={habit.color}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {habit.weeklyRates.map((rate, w) => {
                              const x = 28 + w * (268 / (NUM_WEEKS - 1));
                              const y = 8 + 102 - (rate / 100) * 102;
                              return (
                                <circle
                                  key={w}
                                  cx={x.toFixed(1)}
                                  cy={y.toFixed(1)}
                                  r="2.5"
                                  fill="white"
                                  stroke={habit.color}
                                  strokeWidth="1.5"
                                />
                              );
                            })}
                          </g>
                        ))}
                        {/* X axis labels (every other week) */}
                        {weekLabels.map((label, w) => {
                          if (w % 2 !== 0 && w !== NUM_WEEKS - 1) return null;
                          const x = 28 + w * (268 / (NUM_WEEKS - 1));
                          return (
                            <text
                              key={w}
                              x={x.toFixed(1)}
                              y={128}
                              textAnchor="middle"
                              fontSize="7.5"
                              fill="rgba(100,116,139,0.65)"
                            >
                              {label}
                            </text>
                          );
                        })}
                      </svg>
                      {/* Legend */}
                      <div className="flex flex-wrap lg:gap-x-2 xl:gap-x-3 gap-y-1">
                        {habitLineData.map((h) => (
                          <div key={h.id} className="flex items-center gap-1">
                            <div
                              className="lg:w-1.5 lg:h-1.5 xl:w-2 xl:h-2 rounded-full shrink-0"
                              style={{ backgroundColor: h.color }}
                            />
                            <span className="text-muted-foreground lg:text-[8px] xl:text-[9px] 2xl:text-[10px] truncate max-w-[72px]">
                              {h.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-muted-foreground lg:text-[10px] xl:text-xs 2xl:text-sm text-center w-full">
                      Start tracking habits to see your health score.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                  Quick links
                </h3>
                <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                  Tap into what matters.
                </p>
                <div className="flex lg:gap-1.5 xl:gap-2">
                  {quickLinks.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="rounded-full border-2 border-dashed hover:border-gray-300 border-gray-200 lg:px-3 xl:px-4 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold transition text-center"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-1 grid lg:gap-4 xl:gap-5">
              <div className="row-span-1 h-full">
                <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                  Need a break?
                </h3>
                <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                  Log out and return to your calm landing page.
                </p>
                <SignOutButton />
              </div>

              <div className="h-full row-span-2">
                <div className="h-full lg:rounded-2xl xl:rounded-3xl bg-rose-300 text-white lg:p-4 xl:p-6 flex flex-col justify-between">
                  <div>
                    <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                      {analytics.stats[0]?.value ?? "—"} streak
                    </p>
                    <p className="lg:text-[11px] xl:text-xs 2xl:text-sm lg:mt-1 xl:mt-1.5">
                      Focused energy made possible by calm reminders and gentle
                      check-ins.
                    </p>
                  </div>
                  <div className="lg:mt-4 xl:mt-5 2xl:mt-6 grid lg:gap-2 xl:gap-3">
                    {analytics.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between rounded-2xl bg-card lg:px-3 xl:px-4 lg:py-3 xl:py-4 lg:text-[11px] xl:text-xs 2xl:text-sm"
                      >
                        <span className="text-muted-foreground">
                          {stat.label}
                        </span>
                        <span className={stat.tone + " font-semibold"}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-full row-span-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                    Danger zone
                  </h3>
                  <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                    Permanent actions that cannot be undone.
                  </p>
                </div>
                <DeleteAccountForm />
              </div>
            </div>
          </div>

          <div>
            <h3 className="row-span-1 font-semibold lg:text-base xl:text-lg 2xl:text-xl">
              Weekly focus
            </h3>
            <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
              Ritual notes that keep your energy anchored.
            </p>
            <div className="grid grid-cols-3 lg:gap-3 xl:gap-4">
              {focusAreas.map(({ title, description, icon: Icon, iconBg }) => (
                <div
                  key={title}
                  className={`${iconBg} text-white lg:space-y-2 xl:space-y-3 rounded-2xl lg:p-4 xl:p-5`}
                >
                  <div className="flex lg:h-7 lg:w-7 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11 items-center justify-center rounded-full bg-black/20">
                    <Icon className="lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
                  </div>
                  <p className="lg:text-sm xl:text-base 2xl:text-lg font-semibold">
                    {title}
                  </p>
                  <p className="lg:text-[11px] xl:text-xs 2xl:text-sm">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: Top streaks + Todo progress */}
          <div className="grid grid-cols-2 lg:gap-3 xl:gap-4">
            {/* Top streaks */}
            <div>
              <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                Top streaks
              </h3>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                Habits on a roll right now.
              </p>
              {topHabits.length > 0 ? (
                <div className="flex flex-col lg:gap-2 xl:gap-2.5">
                  {topHabits.map((habit, i) => (
                    <div
                      key={habit.id}
                      className="flex items-center justify-between rounded-2xl bg-muted/40 lg:px-3 xl:px-4 lg:py-2 xl:py-2.5"
                    >
                      <div className="flex items-center lg:gap-2 xl:gap-2.5 min-w-0">
                        <span className="lg:text-[9px] xl:text-[10px] font-bold text-muted-foreground shrink-0">
                          #{i + 1}
                        </span>
                        <span className="lg:text-[11px] xl:text-xs 2xl:text-sm text-foreground truncate">
                          {habit.name}
                        </span>
                      </div>
                      <div className="flex items-center lg:gap-1 xl:gap-1.5 shrink-0">
                        <Flame className="lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-coral" />
                        <span className="lg:text-[11px] xl:text-xs font-semibold text-foreground">
                          {habit.streak}d
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground lg:text-[10px] xl:text-xs 2xl:text-sm">
                  Start a habit to build your first streak.
                </p>
              )}
            </div>

            <div>
              <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                Todo progress
              </h3>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                Your task breakdown at a glance.
              </p>
              <div className="flex flex-col lg:gap-2 xl:gap-2.5">
                {[
                  {
                    label: "Completed",
                    count: completedTodos,
                    color: "bg-[#41ab5d]",
                  },
                  {
                    label: "In progress",
                    count: inProgressTodos,
                    color: "bg-blue-400",
                  },
                  {
                    label: "Planned",
                    count: plannedTodos,
                    color: "bg-muted-foreground/30",
                  },
                ].map(({ label, count, color }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center lg:gap-1.5 xl:gap-2">
                      <div
                        className={`${color} lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 rounded-full shrink-0`}
                      />
                      <span className="lg:text-[10px] xl:text-xs 2xl:text-sm text-muted-foreground">
                        {label}
                      </span>
                    </div>
                    <span className="lg:text-[10px] xl:text-xs font-semibold text-foreground">
                      {count}
                    </span>
                  </div>
                ))}
                {totalTodos > 0 && (
                  <div className="w-full rounded-full bg-muted lg:h-1.5 xl:h-2 overflow-hidden flex lg:mt-1 xl:mt-1.5">
                    <div
                      className="bg-[#41ab5d] h-full transition-all"
                      style={{
                        width: `${Math.round((completedTodos / totalTodos) * 100)}%`,
                      }}
                    />
                    <div
                      className="bg-blue-400 h-full transition-all"
                      style={{
                        width: `${Math.round((inProgressTodos / totalTodos) * 100)}%`,
                      }}
                    />
                  </div>
                )}
                {totalTodos === 0 && (
                  <p className="text-muted-foreground lg:text-[10px] xl:text-xs 2xl:text-sm">
                    No active todos yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
