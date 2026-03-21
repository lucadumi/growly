export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProfileClient from "./profile-client";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  const user = await prisma.user.findFirst({
    where: { OR: [{ username }, { id: username }] },
    select: {
      id: true,
      name: true,
      username: true,
      bio: true,
      location: true,
      focusArea: true,
      privateAccount: true,
      bannerColor: true,
      createdAt: true,
      postHabits: {
        orderBy: [{ votesCount: "desc" }, { createdAt: "desc" }],
        select: {
          id: true,
          title: true,
          description: true,
          cadence: true,
          category: true,
          votesCount: true,
          createdAt: true,
        },
      },
    },
  });

  if (!user) notFound();

  // If accessed by ID but the user has a username, redirect to the canonical URL
  if (user.username && username !== user.username) {
    redirect(`/profile/${user.username}`);
  }

  const isOwnProfile = session?.user.id === user.id;

  // Fetch which habits the current user has voted on
  let votedIds = new Set<string>();
  if (session && user.postHabits.length > 0) {
    const votes = await prisma.postHabitVote.findMany({
      where: {
        userId: session.user.id,
        postHabitId: { in: user.postHabits.map((h) => h.id) },
      },
      select: { postHabitId: true },
    });
    votedIds = new Set(votes.map((v) => v.postHabitId));
  }

  const habits = user.postHabits.map((h) => ({
    id: h.id,
    title: h.title,
    description: h.description ?? null,
    cadence: h.cadence,
    category: h.category ?? null,
    votesCount: h.votesCount,
    votedByCurrentUser: votedIds.has(h.id),
    ownedByCurrentUser: isOwnProfile,
    createdAt: h.createdAt.toISOString(),
    user: { name: user.name, username: user.username },
  }));

  const profileUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    bio: user.bio ?? null,
    location: user.location ?? null,
    focusArea: user.focusArea ?? null,
    privateAccount: user.privateAccount,
    bannerColor: user.bannerColor ?? "#e2e8f0",
    joinedDate: new Date(user.createdAt).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),
  };

  return (
    <ProfileClient
      user={profileUser}
      habits={habits}
      isOwnProfile={isOwnProfile}
      isLoggedIn={!!session}
    />
  );
}
