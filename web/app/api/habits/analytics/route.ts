import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/actions/habit-actions";
import {
  buildHabitAnalytics,
  HABIT_ANALYTICS_LOOKBACK_DAYS,
} from "@/lib/habit-analytics";
import { formatDayKey, getUtcDayStart } from "@/lib/habit-progress";

export async function GET() {
  try {
    const userId = await requireUserId();

    const [habits, progressEntries] = await Promise.all([
      prisma.habit.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
      }),
      prisma.habitDailyProgress.findMany({
        where: { habit: { userId } },
        select: { habitId: true, date: true, progress: true },
      }),
    ]);

    const { habitsWithStats, progressByDay, weekdayPerformance, lookbackDays } =
      buildHabitAnalytics(habits, progressEntries, HABIT_ANALYTICS_LOOKBACK_DAYS);

    const totalHabits = habitsWithStats.length;

    const averageStreak =
      totalHabits > 0
        ? Math.round(
            habitsWithStats.reduce((sum, h) => sum + h.streak, 0) / totalHabits,
          )
        : 0;

    const averageCompletion =
      totalHabits > 0
        ? Math.round(
            habitsWithStats.reduce((sum, h) => sum + h.averageCompletion, 0) /
              totalHabits,
          )
        : 0;

    const averageSuccessRate =
      totalHabits > 0
        ? Math.round(
            habitsWithStats.reduce((sum, h) => sum + h.successRate, 0) /
              totalHabits,
          )
        : 0;

    const topStreak = habitsWithStats.reduce<{
      name: string;
      streak: number;
    } | null>((leader, h) => {
      if (!leader || h.streak > leader.streak)
        return { name: h.name, streak: h.streak };
      return leader;
    }, null);

    const today = getUtcDayStart(new Date());
    const trend = [];
    for (let offset = lookbackDays - 1; offset >= 0; offset -= 1) {
      const day = getUtcDayStart(new Date(today));
      day.setUTCDate(day.getUTCDate() - offset);
      const key = formatDayKey(day);
      trend.push({
        label: key.slice(5),
        value: Math.round((progressByDay[key] ?? 0) * 100),
      });
    }

    const lookbackLabel =
      lookbackDays === 1 ? "Last day" : `Last ${lookbackDays} days`;

    const bestStreak = topStreak?.streak ?? 0;

    return NextResponse.json({
      summary: {
        totalHabits,
        averageStreak,
        averageCompletion,
        averageSuccessRate,
        topStreak,
        lookbackLabel,
        bestStreak,
      },
      trend,
      weekdayPerformance,
      progressByDay,
      habits: habitsWithStats.map((h) => ({
        id: h.id,
        name: h.name,
        streak: h.streak,
        successRate: h.successRate,
        averageCompletion: h.averageCompletion,
        dailyProgress: h.dailyProgress ?? 0,
        goalAmount: h.goalAmount ?? 1,
        goalUnit: h.goalUnit,
      })),
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: "Unable to load analytics." },
      { status: 500 },
    );
  }
}
