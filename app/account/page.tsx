import Link from "next/link";
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
    iconBg: "bg-sky-400",
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
    iconBg: "bg-green-soft",
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
  const initials = name
    .split(" ")
    .map((node) => node.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const [habits, progressEntries] = await Promise.all([
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
              <div className="grid lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 shrink-0 place-items-center rounded-2xl bg-primary lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-white">
                {initials}
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

          {/* Edit profile widget */}
          <div className="h-full">
            <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
              Edit profile
            </h3>
            <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
              Keep your name and email current.
            </p>
            <EditProfileForm
              initialName={editableName}
              initialEmail={editableEmail}
            />
          </div>

          {/* Sign out widget */}
          <div className="h-full">
            <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
              Need a break?
            </h3>
            <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
              Log out and return to your calm landing page.
            </p>
            <SignOutButton />
          </div>

          {/* Danger zone widget */}
          <div className="h-full flex flex-col justify-between">
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

        {/* Right column */}
        <div className="lg:col-span-3 xl:col-span-7 grid grid-rows-3 lg:gap-5 xl:gap-6">
          {/* Top row: Momentum + Quick links */}
          <div className="grid row-span-2 grid-cols-2 lg:gap-3 xl:gap-4">
            {/* This week + Habit health stack */}
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
                <div className="flex-1 lg:rounded-2xl xl:rounded-3xl border-8 border-gray-100 lg:p-4 xl:p-6 flex items-center lg:gap-3 xl:gap-4">
                  {analytics.habitSlices.length > 0 ? (
                    <>
                      <svg
                        viewBox="0 0 80 80"
                        className="shrink-0 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24"
                      >
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          fill="none"
                          strokeWidth="10"
                          stroke="currentColor"
                          className="text-muted-foreground/15"
                        />
                        {(() => {
                          const C = 2 * Math.PI * 32;
                          const total =
                            analytics.habitSlices.reduce(
                              (s, h) => s + Math.max(h.successRate, 0),
                              0,
                            ) || 1;
                          let cum = 0;
                          return analytics.habitSlices.map((slice, i) => {
                            const rawLen =
                              (Math.max(slice.successRate, 0) / total) * C;
                            const len = Math.max(rawLen - 2, 1);
                            const offset = C / 4 - cum;
                            cum += rawLen;
                            return (
                              <circle
                                key={i}
                                cx="40"
                                cy="40"
                                r="32"
                                fill="none"
                                stroke={slice.color}
                                strokeWidth="10"
                                strokeDasharray={`${len.toFixed(2)} ${C.toFixed(2)}`}
                                strokeDashoffset={offset.toFixed(2)}
                              />
                            );
                          });
                        })()}
                        <text
                          x="40"
                          y="45"
                          textAnchor="middle"
                          fontSize="13"
                          fontWeight="700"
                          fill="currentColor"
                          className="text-foreground"
                        >
                          {Math.round(
                            analytics.habitSlices.reduce(
                              (s, h) => s + h.successRate,
                              0,
                            ) / analytics.habitSlices.length,
                          )}
                          %
                        </text>
                      </svg>
                      <div className="flex flex-col lg:gap-1.5 xl:gap-2 min-w-0 flex-1">
                        {analytics.habitSlices.map((slice) => (
                          <div
                            key={slice.name}
                            className="flex items-center justify-between lg:gap-1.5 xl:gap-2"
                          >
                            <div className="flex items-center lg:gap-1 xl:gap-1.5 min-w-0">
                              <div
                                className="lg:w-1.5 lg:h-1.5 xl:w-2 xl:h-2 rounded-full shrink-0"
                                style={{ backgroundColor: slice.color }}
                              />
                              <span className="text-muted-foreground lg:text-[9px] xl:text-[10px] 2xl:text-xs truncate">
                                {slice.name}
                              </span>
                            </div>
                            <span className="text-foreground lg:text-[9px] xl:text-[10px] 2xl:text-xs font-semibold shrink-0">
                              {slice.successRate}%
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
            </div>

            {/* Momentum widget */}
            <div className="col-span-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold lg:text-base xl:text-lg 2xl:text-xl">
                  Momentum
                </h3>
                <p className="text-muted-foreground lg:text-[9px] xl:text-[11px] 2xl:text-xs lg:mb-2 xl:mb-3">
                  Your streak at a glance.
                </p>
                <div className="lg:rounded-2xl xl:rounded-3xl bg-rose-300 text-white lg:p-4 xl:p-6">
                  <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                    {analytics.stats[0]?.value ?? "—"} streak
                  </p>
                  <p className="lg:text-[11px] xl:text-xs 2xl:text-sm lg:mt-1 xl:mt-1.5">
                    Focused energy made possible by calm reminders and gentle
                    check-ins.
                  </p>
                  <div className="lg:mt-4 xl:mt-5 2xl:mt-6 grid lg:gap-2 xl:gap-3">
                    {analytics.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between rounded-2xl bg-card lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm"
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

              {/* Quick links widget */}
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
          </div>

          {/* Weekly focus widget */}
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
        </div>
      </div>
    </main>
  );
}
