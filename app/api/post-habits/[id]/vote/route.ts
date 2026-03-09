import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/actions/habit-actions";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const userId = await requireUserId();
    const { id: postHabitId } = await params;

    const habit = await prisma.postHabit.findUnique({ where: { id: postHabitId }, select: { id: true } });
    if (!habit) return NextResponse.json({ error: "Not found." }, { status: 404 });

    const existing = await prisma.postHabitVote.findUnique({
      where: { postHabitId_userId: { postHabitId, userId } },
    });

    if (existing) {
      await prisma.$transaction([
        prisma.postHabitVote.delete({ where: { postHabitId_userId: { postHabitId, userId } } }),
        prisma.postHabit.update({ where: { id: postHabitId }, data: { votesCount: { decrement: 1 } } }),
      ]);
      return NextResponse.json({ voted: false });
    }

    await prisma.$transaction([
      prisma.postHabitVote.create({ data: { postHabitId, userId } }),
      prisma.postHabit.update({ where: { id: postHabitId }, data: { votesCount: { increment: 1 } } }),
    ]);

    return NextResponse.json({ voted: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to vote.";
    return NextResponse.json({ error: message }, { status: message === "Unauthorized" ? 401 : 500 });
  }
}
