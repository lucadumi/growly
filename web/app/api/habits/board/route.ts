import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/actions/habit-actions";
import { getUtcDayStart } from "@/lib/habit-progress";

const parseDateParam = (value: string | null, fallback: Date) => {
  if (!value) {
    return fallback;
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return fallback;
  }
  return getUtcDayStart(parsed);
};

const startOfWeek = (value: Date) => {
  const date = getUtcDayStart(new Date(value));
  const day = date.getUTCDay();
  date.setUTCDate(date.getUTCDate() - day);
  return date;
};

const addDays = (value: Date, delta: number) => {
  const copy = new Date(value);
  copy.setUTCDate(copy.getUTCDate() + delta);
  return copy;
};

const normalizeRange = (from: Date, to: Date) => {
  if (from <= to) {
    return { from, to };
  }
  return { from: to, to: from };
};

const getErrorStatus = (message: string) => {
  if (message === "Unauthorized") return 401;
  if (message.includes("Habit")) return 400;
  return 500;
};

export async function GET(request: NextRequest) {
  try {
    const userId = await requireUserId();
    const url = new URL(request.url);
    const now = getUtcDayStart(new Date());
    const defaultFrom = startOfWeek(now);
    const defaultTo = addDays(defaultFrom, 6);
    const parsedFrom = parseDateParam(url.searchParams.get("from"), defaultFrom);
    const parsedTo = parseDateParam(url.searchParams.get("to"), defaultTo);
    const { from, to } = normalizeRange(parsedFrom, parsedTo);

    const habits = await prisma.habit.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        description: true,
        cadence: true,
        startDate: true,
        timeWindow: true,
        goalAmount: true,
        goalUnit: true,
        goalUnitCategory: true,
        dailyProgress: true,
      },
    });

    const progressEntries = await prisma.habitDailyProgress.findMany({
      where: {
        habit: {
          userId,
        },
        date: {
          gte: from,
          lte: to,
        },
      },
      select: {
        habitId: true,
        date: true,
        progress: true,
      },
      orderBy: {
        date: "asc",
      },
    });

    const serializedEntries = progressEntries.map((entry) => ({
      habitId: entry.habitId,
      date: entry.date.toISOString(),
      progress: entry.progress,
    }));

    return NextResponse.json({ habits, entries: serializedEntries });
  } catch (error) {
    if (error instanceof Error) {
      const status = getErrorStatus(error.message);
      return NextResponse.json({ error: error.message }, { status });
    }
    return NextResponse.json(
      { error: "Unable to load habit board." },
      { status: 500 },
    );
  }
}
