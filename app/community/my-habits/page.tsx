export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import MyHabitsClient from "./my-habits-client";

export default async function MyHabitsPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");

  const [myPostHabits, totalVotesResult, userHabits] = await Promise.all([
    prisma.postHabit.findMany({
      where: { userId: session.user.id },
      orderBy: [{ votesCount: "desc" }, { createdAt: "desc" }],
      include: { _count: { select: { votes: true } } },
    }),
    prisma.postHabitLike.count({
      where: { postHabit: { userId: session.user.id } },
    }),
    prisma.habit.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, description: true, cadence: true },
    }),
  ]);

  // Track which habit names are already shared (to mark them)
  const sharedTitles = new Set(myPostHabits.map((h) => h.title.toLowerCase()));

  const serialized = myPostHabits.map((h) => ({
    id: h.id,
    title: h.title,
    description: h.description ?? null,
    cadence: h.cadence,
    category: h.category ?? null,
    votesCount: h.votesCount,
    createdAt: h.createdAt.toISOString(),
  }));

  const serializedHabits = userHabits.map((h) => ({
    id: h.id,
    name: h.name,
    description: h.description ?? null,
    cadence: h.cadence,
    alreadyShared: sharedTitles.has(h.name.toLowerCase()),
  }));

  const stats = {
    totalShared: myPostHabits.length,
    totalVotes: totalVotesResult,
    topHabit: myPostHabits[0]
      ? { title: myPostHabits[0].title, votes: myPostHabits[0].votesCount }
      : null,
  };

  return (
    <MyHabitsClient
      initialHabits={serialized}
      stats={stats}
      userHabits={serializedHabits}
    />
  );
}
