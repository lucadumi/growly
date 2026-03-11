import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { requireUserId } from "@/lib/actions/habit-actions";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const userId = await requireUserId();
    const { id } = await params;

    const habit = await prisma.postHabit.findUnique({ where: { id }, select: { userId: true } });
    if (!habit) return NextResponse.json({ error: "Not found." }, { status: 404 });
    if (habit.userId !== userId) return NextResponse.json({ error: "Unauthorized." }, { status: 403 });

    await prisma.postHabit.delete({ where: { id } });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to delete habit.";
    return NextResponse.json({ error: message }, { status: message === "Unauthorized" ? 401 : 500 });
  }
}
