import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import {
  CalendarDays,
  EyeOff,
  Flame,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";

import DeleteAccountForm from "./components/delete-account-form";
import EditProfileForm from "./components/edit-profile-form";
import SignOutButton from "./components/sign-out-button";
import PageHeading from "@/app/components/page-heading";
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
    iconText: "text-sky-600",
  },
  {
    title: "Energy supply",
    description:
      "Schedule gentle breaks so your streaks survive the hard days.",
    icon: Flame,
    iconBg: "bg-coral",
    iconText: "text-coral",
  },
  {
    title: "Guardrails",
    description: "Review quiet reminders and permissions to keep focus sacred.",
    icon: ShieldCheck,
    iconBg: "bg-green-soft",
    iconText: "text-green-soft",
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

  const userRecord = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      streakGoalDays: true,
      privateAccount: true,
      focusArea: true,
      headline: true,
      location: true,
    },
  });

  const privateAccount = userRecord?.privateAccount ?? false;

  let analytics: AccountAnalytics | null = null;

  if (!privateAccount) {
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
        tone:
          weeklyWins >= 5 ? "text-green-soft" : "text-yellow-soft-foreground",
      },
      {
        label: "Recovery days",
        value: `${recoveryDays} open`,
        tone: "text-yellow-soft-foreground",
      },
    ];

    analytics = { stats };
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-card lg:pb-8 xl:pb-12 2xl:pb-16 lg:pt-18 xl:pt-24 2xl:pt-28">
      <div className="relative z-10 lg:px-24 xl:px-48 2xl:px-80">
        <div className="mx-auto flex flex-col gap-10">
          <section className="space-y-8">
            <PageHeading
              badgeLabel="Account"
              title="Keep your rituals tidy and your focus protected."
              titleClassName="font-semibold text-foreground"
              description={
                <>
                  Everything starts with a calm overview.
                  <br />
                  Adjust notifications, revisit weekly priorities, or glance at
                  how confident you feel about upcoming rituals.
                </>
              }
              descriptionClassName="text-muted-foreground max-w-3xl"
            />

            <div className="grid lg:gap-4 xl:gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
              {/* Left column */}
              <div className="flex min-h-0 flex-col lg:h-full lg:space-y-4 xl:space-y-6">
                {/* Profile card — warm gradient */}
                <div className="lg:space-y-3 xl:space-y-5 lg:rounded-2xl xl:rounded-3xl bg-card lg:p-4 xl:p-6 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="grid lg:h-12 lg:w-12 xl:h-16 2xl:h-20 xl:w-16 2xl:w-20 shrink-0 place-items-center rounded-2xl bg-primary lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-white">
                      {initials}
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="lg:text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-[0.4em] text-muted-foreground">
                        Profile
                      </p>
                      <p className="lg:text-sm xl:text-base 2xl:text-lg font-semibold text-foreground truncate">
                        {name}
                      </p>
                      <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground truncate">
                        {email}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 lg:text-[10px] xl:text-xs 2xl:text-sm text-muted-foreground">
                    <p>Joined with patient goals, not noisy streaks.</p>
                    <p>All notifications land in your trusted channels.</p>
                  </div>
                  <div className="flex flex-wrap lg:gap-1.5 xl:gap-2">
                    {["Release notes", "Privacy", "Support"].map((link) => (
                      <span
                        key={link}
                        className="rounded-full border border-gray-100 bg-card px-2.5 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[11px] 2xl:text-xs font-semibold text-muted-foreground"
                      >
                        {link}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Edit profile — left accent border */}
                <div className="lg:rounded-2xl xl:rounded-3xl bg-card lg:p-4 xl:p-6 border border-gray-100">
                  <EditProfileForm
                    initialName={editableName}
                    initialEmail={editableEmail}
                  />
                </div>

                {/* Sign out */}
                <div className="lg:rounded-2xl xl:rounded-3xl bg-card lg:p-4 xl:p-6 border border-gray-100 flex flex-col lg:gap-3 xl:gap-4 2xl:gap-5">
                  <div className="lg:space-y-2 xl:space-y-3">
                    <p className="lg:text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-[0.4em] text-muted-foreground">
                      Need a break?
                    </p>
                    <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
                      Log out when you need a reset and return to your calm
                      landing page.
                    </p>
                    <SignOutButton />
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="flex min-h-0 flex-col lg:h-full gap-4 xl:gap-6">
                {/* Momentum card */}
                <div className="lg:rounded-2xl xl:rounded-3xl bg-yellow-soft text-white lg:p-4 xl:p-6 h-fit">
                  {analytics ? (
                    <>
                      <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold lg:mt-0.5 xl:mt-1">
                        {analytics.stats[0]?.value ?? "—"} streak
                      </p>
                      <p className="lg:text-[11px] xl:text-xs 2xl:text-sm lg:mt-1 xl:mt-1.5">
                        Focused energy made possible by calm reminders and
                        gentle check-ins.
                      </p>
                      <div className="lg:mt-4 xl:mt-5 2xl:mt-6 grid lg:gap-2 xl:gap-3">
                        {analytics.stats.map((stat, i) => {
                          return (
                            <div
                              key={stat.label}
                              className={`flex items-center justify-between rounded-2xl bg-card lg:px-3 xl:px-4 lg:py-2 xl:py-3 lg:text-[11px] xl:text-xs 2xl:text-sm`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">
                                  {stat.label}
                                </span>
                              </div>
                              <span className={stat.tone + " font-semibold"}>
                                {stat.value}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <div className="lg:space-y-2 xl:space-y-3">
                      <p className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-foreground">
                        Analytics paused
                      </p>
                      <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
                        Your account is private, so streak and weekly stats stay
                        hidden. Switch privacy off below to bring them back.
                      </p>
                      <div className="flex items-center gap-2 rounded-full bg-white/80 border border-primary/20 lg:px-3 xl:px-4 lg:py-2 xl:py-3 text-primary lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold">
                        <EyeOff className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                        Private mode on
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="lg:space-y-3 xl:space-y-4">
              <div className="flex lg:gap-2 xl:gap-3 flex-row items-center justify-between">
                <div>
                  <p className="lg:text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-[0.4em] lg:mt-1 xl:mt-2 text-muted-foreground">
                    Quick links
                  </p>
                  <h2 className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-foreground">
                    Tap into what matters
                  </h2>
                </div>
                <p className="lg:text-[11px] xl:text-xs 2xl:text-sm text-muted-foreground">
                  Keep renewals thoughtful and purposeful.
                </p>
              </div>

              <div className="flex flex-wrap lg:gap-2 xl:gap-3">
                {quickLinks.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`rounded-full bg-card border-2 border-dotted lg:px-3 xl:px-4 lg:py-1 xl:py-2 lg:text-[11px] xl:text-xs 2xl:text-sm font-semibold transition border-gray-200 hover:border-gray-300`}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Weekly focus & danger zone */}
          <section className="grid lg:gap-4 xl:gap-6 backdrop-blur">
            <div className="flex flex-col lg:gap-1.5 xl:gap-2">
              <p className="lg:text-[11px] xl:text-xs 2xl:text-sm uppercase tracking-[0.4em] text-muted-foreground">
                Weekly focus
              </p>
              <h2 className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-foreground">
                Ritual notes that keep your energy anchored
              </h2>
            </div>

            <div className="grid lg:gap-3 xl:gap-4 grid-cols-3">
              {focusAreas.map(({ title, description, icon: Icon, iconBg }) => (
                <div
                  key={title}
                  className={`${iconBg} text-white lg:space-y-2 xl:space-y-3 rounded-2xl bg-card lg:p-4 xl:p-5`}
                >
                  <div className="flex lg:h-7 lg:w-7 xl:h-9 2xl:h-11 xl:w-9 2xl:w-11 items-center justify-center rounded-full bg-black/20">
                    <Icon className="lg:w-3 lg:h-3 xl:w-4 2xl:h-5 xl:h-4 2xl:w-5" />
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

            <div className="lg:rounded-2xl xl:rounded-3xl border-8 border-rose-100 lg:p-4 xl:p-6">
              <DeleteAccountForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
