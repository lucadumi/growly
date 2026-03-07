import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/actions/habit-actions";

export async function GET(request: NextRequest) {
  try {
    await requireUserId();
    const url = new URL(request.url);
    const q = url.searchParams.get("q")?.trim() ?? "";
    const limit = Math.min(Number(url.searchParams.get("limit") ?? "20"), 50);

    if (!q) return NextResponse.json({ users: [] });

    const users = await prisma.user.findMany({
      where: {
        privateAccount: false,
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { username: { contains: q, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        name: true,
        username: true,
        focusArea: true,
        location: true,
        createdAt: true,
        _count: { select: { postHabits: true, habits: true } },
      },
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      users: users.map((u) => ({
        id: u.id,
        name: u.name,
        username: u.username,
        focusArea: u.focusArea,
        location: u.location,
        sharedHabitsCount: u._count.postHabits,
        habitsCount: u._count.habits,
        memberSince: u.createdAt.toISOString(),
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Search failed.";
    return NextResponse.json({ error: message }, { status: message === "Unauthorized" ? 401 : 500 });
  }
}
