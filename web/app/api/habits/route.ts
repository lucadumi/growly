import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { parseHabitPayload, requireUserId } from "@/lib/actions/habit-actions";
import { getUtcDayStart, parseClientDate } from "@/lib/habit-progress";

const getErrorStatus = (message: string) => {
  if (message === "Unauthorized") return 401;
  if (message.includes("Habit name")) return 400;
  return 500;
};

export async function POST(request: NextRequest) {
  try {
    const userId = await requireUserId();
    const payload = await parseHabitPayload(
      (await request.json()) as Record<string, unknown>
    );
    const habit = await prisma.habit.create({
      data: {
        ...payload,
        userId,
      },
    });
    revalidatePath("/dashboard/habits");
    return NextResponse.json({ habit }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      const status = getErrorStatus(error.message);
      return NextResponse.json({ error: error.message }, { status });
    }
    return NextResponse.json(
      { error: "Unable to create habit. Try again later." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const userId = await requireUserId();
    const url = new URL(request.url);
    const today = parseClientDate(url.searchParams.get("date")) ?? getUtcDayStart(new Date());

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
        dailyProgressEntries: {
          select: {
            progress: true,
          },
          where: {
            date: today,
          },
          take: 1,
        },
      },
    });

    const habitsWithProgress = habits.map(({ dailyProgressEntries, ...h }) => ({
      ...h,
      dailyProgress: dailyProgressEntries[0]?.progress ?? 0,
    }));

    return NextResponse.json({ habits: habitsWithProgress });
  } catch (error) {
    if (error instanceof Error) {
      const status = getErrorStatus(error.message);
      return NextResponse.json({ error: error.message }, { status });
    }
    return NextResponse.json(
      { error: "Unable to load habits. Try again later." },
      { status: 500 }
    );
  }
}
