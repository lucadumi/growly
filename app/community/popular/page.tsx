export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import PopularClient from "./popular-client";

export default async function PopularPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");

  const [habits, liked] = await Promise.all([
    prisma.postHabit.findMany({
      orderBy: [{ votesCount: "desc" }, { createdAt: "desc" }],
      take: 100,
      include: { user: { select: { name: true, username: true } } },
    }),
    prisma.postHabitLike.findMany({
      where: { userId: session.user.id },
      select: { postHabitId: true },
    }),
  ]);

  const likedSet = new Set(liked.map((l) => l.postHabitId));

  const serialized = habits.map((h) => ({
    id: h.id,
    title: h.title,
    description: h.description ?? null,
    cadence: h.cadence,
    category: h.category ?? null,
    timeOfDay: h.timeOfDay ?? null,
    reminder: h.reminder ?? null,
    votesCount: h.votesCount,
    votedByCurrentUser: likedSet.has(h.id),
    ownedByCurrentUser: h.userId === session.user.id,
    createdAt: h.createdAt.toISOString(),
    user: h.user ? { name: h.user.name, username: h.user.username } : null,
  }));

  return <PopularClient initialHabits={serialized} />;
}
