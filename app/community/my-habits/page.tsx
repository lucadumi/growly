export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import MyHabitsClient from "./my-habits-client";

export default async function MyHabitsPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");

  const [myPostHabits, totalVotesResult, userHabits, userRoutines, dbUser] = await Promise.all([
    prisma.postHabit.findMany({
      where: { userId: session.user.id },
      orderBy: [{ votesCount: "desc" }, { createdAt: "desc" }],
    }),
    prisma.postHabitLike.count({
      where: { postHabit: { userId: session.user.id } },
    }),
    prisma.habit.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, description: true, cadence: true, timeOfDay: true, reminder: true, goalAmount: true, goalUnit: true, goalUnitCategory: true },
    }),
    prisma.routine.findMany({
      where: { userId: session.user.id },
      orderBy: { name: "asc" },
      select: { id: true, name: true, habits: { select: { habitId: true } } },
    }),
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: { username: true },
    }),
  ]);

  // Track which habit names are already shared (to mark them)
  const sharedTitles = new Set(myPostHabits.map((h) => h.title.toLowerCase()));

  // Build a map of habitId -> routineIds
  const habitRoutineMap = new Map<string, string[]>();
  for (const routine of userRoutines) {
    for (const { habitId } of routine.habits) {
      if (!habitRoutineMap.has(habitId)) habitRoutineMap.set(habitId, []);
      habitRoutineMap.get(habitId)!.push(routine.id);
    }
  }

  const routines = userRoutines.map((r) => ({ id: r.id, name: r.name }));

  const serialized = myPostHabits.map((h) => ({
    id: h.id,
    title: h.title,
    description: h.description ?? null,
    cadence: h.cadence,
    category: h.category ?? null,
    timeOfDay: h.timeOfDay ?? null,
    reminder: h.reminder ?? null,
    goalAmount: h.goalAmount,
    goalUnit: h.goalUnit,
    goalUnitCategory: h.goalUnitCategory,
    votesCount: h.votesCount,
    createdAt: h.createdAt.toISOString(),
    user: { name: session.user.name, username: dbUser?.username ?? null },
  }));

  const serializedHabits = userHabits.map((h) => ({
    id: h.id,
    name: h.name,
    description: h.description ?? null,
    cadence: h.cadence,
    timeOfDay: h.timeOfDay ?? null,
    reminder: h.reminder ?? null,
    goalAmount: h.goalAmount,
    goalUnit: h.goalUnit,
    goalUnitCategory: h.goalUnitCategory,
    alreadyShared: sharedTitles.has(h.name.toLowerCase()),
    routineIds: habitRoutineMap.get(h.id) ?? [],
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
      routines={routines}
    />
  );
}
