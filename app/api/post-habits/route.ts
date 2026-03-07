import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/actions/habit-actions";

const CATEGORIES = ["Health", "Mindfulness", "Productivity", "Fitness", "Learning", "Creativity", "Sleep", "Nutrition", "Relationships", "Other"];
const CADENCES = ["daily", "weekly", "weekdays", "weekends", "3x per week", "monthly"];

export async function GET(request: NextRequest) {
  try {
    const userId = await requireUserId();
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const sort = url.searchParams.get("sort") ?? "popular";
    const limit = Math.min(Number(url.searchParams.get("limit") ?? "50"), 100);
    const ownOnly = url.searchParams.get("own") === "true";

    const [habits, liked] = await Promise.all([
      prisma.postHabit.findMany({
        where: {
          ...(category && category !== "All" ? { category } : {}),
          ...(ownOnly ? { userId } : {}),
        },
        orderBy: sort === "popular"
          ? [{ votesCount: "desc" }, { createdAt: "desc" }]
          : [{ createdAt: "desc" }],
        take: limit,
        include: {
          user: { select: { name: true, username: true } },
          votes: { where: { userId }, select: { id: true } },
        },
      }),
      prisma.postHabitLike.findMany({
        where: { userId },
        select: { postHabitId: true },
      }),
    ]);

    const likedSet = new Set(liked.map((l) => l.postHabitId));

    const data = habits.map((h) => ({
      id: h.id,
      title: h.title,
      description: h.description,
      cadence: h.cadence,
      category: h.category,
      votesCount: h.votesCount,
      votedByCurrentUser: likedSet.has(h.id),
      ownedByCurrentUser: h.userId === userId,
      authorName: h.user?.name ?? null,
      authorUsername: h.user?.username ?? null,
      createdAt: h.createdAt.toISOString(),
    }));

    return NextResponse.json({ postHabits: data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load habits.";
    return NextResponse.json({ error: message }, { status: message === "Unauthorized" ? 401 : 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = await requireUserId();
    const body = (await request.json()) as Record<string, unknown>;

    const title = typeof body.title === "string" ? body.title.trim() : "";
    if (!title) return NextResponse.json({ error: "Title is required." }, { status: 400 });
    if (title.length > 120) return NextResponse.json({ error: "Title must be 120 characters or fewer." }, { status: 400 });

    const description = typeof body.description === "string" ? body.description.trim() || null : null;
    const cadence = typeof body.cadence === "string" && CADENCES.includes(body.cadence) ? body.cadence : "daily";
    const category = typeof body.category === "string" && CATEGORIES.includes(body.category) ? body.category : null;

    const habit = await prisma.postHabit.create({
      data: { title, description, cadence, category, userId },
      include: { user: { select: { name: true, username: true } } },
    });

    return NextResponse.json({
      postHabit: {
        id: habit.id,
        title: habit.title,
        description: habit.description,
        cadence: habit.cadence,
        category: habit.category,
        votesCount: habit.votesCount,
        votedByCurrentUser: false,
        ownedByCurrentUser: true,
        authorName: habit.user?.name ?? null,
        authorUsername: habit.user?.username ?? null,
        createdAt: habit.createdAt.toISOString(),
      },
    }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create habit.";
    return NextResponse.json({ error: message }, { status: message === "Unauthorized" ? 401 : 500 });
  }
}
