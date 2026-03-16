"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Target,
  Lock,
  ArrowUp,
  Share2,
  Settings,
} from "lucide-react";
import PostCard, { PostHabitData } from "@/app/community/post-card";

const FOCUS_AREA_COLORS: Record<string, { bg: string; text: string }> = {
  "Health & Fitness": { bg: "bg-green-100", text: "text-green-700" },
  Mindfulness: { bg: "bg-purple-100", text: "text-purple-700" },
  Productivity: { bg: "bg-blue-100", text: "text-blue-700" },
  Learning: { bg: "bg-amber-100", text: "text-amber-700" },
  Relationships: { bg: "bg-rose-100", text: "text-rose-700" },
  Creativity: { bg: "bg-pink-100", text: "text-pink-700" },
  Finance: { bg: "bg-emerald-100", text: "text-emerald-700" },
  Sleep: { bg: "bg-indigo-100", text: "text-indigo-700" },
  Nutrition: { bg: "bg-teal-100", text: "text-teal-700" },
  Other: { bg: "bg-gray-100", text: "text-gray-600" },
};

type ProfileUser = {
  id: string;
  name: string;
  username: string | null;
  bio: string | null;
  location: string | null;
  focusArea: string | null;
  privateAccount: boolean;
  joinedDate: string;
};

type ProfileClientProps = {
  user: ProfileUser;
  habits: PostHabitData[];
  isOwnProfile: boolean;
  isLoggedIn: boolean;
};

export default function ProfileClient({
  user,
  habits: initialHabits,
  isOwnProfile,
  isLoggedIn,
}: ProfileClientProps) {
  const [habits, setHabits] = useState<PostHabitData[]>(initialHabits);

  const isPrivate = user.privateAccount && !isOwnProfile;
  const totalVotes = habits.reduce((sum, h) => sum + h.votesCount, 0);
  const focusColor = user.focusArea
    ? (FOCUS_AREA_COLORS[user.focusArea] ?? FOCUS_AREA_COLORS.Other)
    : null;

  function handleVote(id: string, voted: boolean) {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              votedByCurrentUser: voted,
              votesCount: voted ? h.votesCount + 1 : h.votesCount - 1,
            }
          : h,
      ),
    );
  }

  function handleDelete(id: string) {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  }

  return (
    <main className="relative min-h-screen bg-card lg:px-6 xl:px-8 2xl:px-28 lg:pt-14 xl:pt-20 2xl:pt-28">
      <div className="grid lg:gap-6 xl:gap-8 lg:pb-8 xl:pb-12 2xl:pb-16">
        {/* ── Profile Header Card ── */}
        <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
          {/* Banner */}
          <div className="lg:h-20 xl:h-24 bg-secondary relative">
            {isOwnProfile && (
              <Link
                href="/account"
                className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/60 bg-white/80 backdrop-blur-sm lg:px-2.5 xl:px-3 lg:py-1 xl:py-1.5 lg:text-[9px] xl:text-[10px] font-semibold text-foreground hover:bg-white transition shadow-sm"
              >
                <Settings className="w-3 h-3" />
                Edit profile
              </Link>
            )}
          </div>

          <div className="lg:px-5 xl:px-6 lg:pb-5 xl:pb-6">
            {/* Avatar row */}
            <div className="-mt-8 xl:-mt-10 mb-3 flex items-end justify-between">
              <div className="z-10 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-2xl border-4 border-white shadow-md shrink-0 bg-primary/15 flex items-center justify-center">
                <span className="lg:text-2xl xl:text-3xl font-bold text-primary leading-none">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Name + username */}
            <div className="mb-2">
              <h1 className="font-bold lg:text-base xl:text-lg 2xl:text-xl text-foreground leading-tight">
                {user.name}
              </h1>
              {user.username && (
                <p className="text-muted-foreground lg:text-[10px] xl:text-xs mt-0.5">
                  @{user.username}
                </p>
              )}
            </div>

            {/* Bio */}
            {!isPrivate && user.bio && (
              <p className="text-foreground/75 lg:text-[10px] xl:text-xs leading-relaxed mb-3 max-w-xl">
                {user.bio}
              </p>
            )}

            {/* Meta pills */}
            <div className="flex flex-wrap items-center gap-2">
              {user.location && (
                <span className="inline-flex items-center gap-1 rounded-full bg-muted lg:px-2 xl:px-2.5 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium">
                  <MapPin className="w-2.5 h-2.5" />
                  {user.location}
                </span>
              )}
              {focusColor && user.focusArea && (
                <span
                  className={`inline-flex items-center gap-1 rounded-full lg:px-2 xl:px-2.5 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] font-semibold ${focusColor.bg} ${focusColor.text}`}
                >
                  <Target className="w-2.5 h-2.5" />
                  {user.focusArea}
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-full bg-muted lg:px-2 xl:px-2.5 lg:py-0.5 xl:py-1 lg:text-[9px] xl:text-[10px] text-muted-foreground font-medium">
                <Calendar className="w-2.5 h-2.5" />
                Joined {user.joinedDate}
              </span>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        {!isPrivate && (
          <div className="grid grid-cols-2 lg:gap-3 xl:gap-4">
            <div className="rounded-2xl border border-gray-100 bg-white lg:p-4 xl:p-5">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Habits shared
                </p>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent">
                  <Share2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="font-bold lg:text-2xl xl:text-3xl text-foreground">
                {habits.length}
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] mt-1">
                with the community
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white lg:p-4 xl:p-5">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                  Votes received
                </p>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary/60 text-amber-500">
                  <ArrowUp className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="font-bold lg:text-2xl xl:text-3xl text-foreground">
                {totalVotes}
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] mt-1">
                from the community
              </p>
            </div>
          </div>
        )}

        {/* ── Shared Habits / Private State ── */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-semibold lg:text-base xl:text-lg">
                Shared habits
              </h2>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px]">
                {isPrivate
                  ? "This account is private"
                  : `${habits.length} habit${habits.length !== 1 ? "s" : ""} shared with the community`}
              </p>
            </div>
          </div>

          {isPrivate ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 lg:p-10 xl:p-14 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-2xl bg-muted mb-3">
                <Lock className="lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-muted-foreground" />
              </div>
              <p className="font-semibold lg:text-xs xl:text-sm text-foreground mb-1">
                Private account
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] max-w-xs">
                {user.name} hasn&apos;t made their profile public yet.
              </p>
            </div>
          ) : habits.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 lg:p-10 xl:p-14 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-2xl bg-muted mb-3">
                <Share2 className="lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-muted-foreground" />
              </div>
              <p className="font-semibold lg:text-xs xl:text-sm text-foreground mb-1">
                No shared habits yet
              </p>
              <p className="text-muted-foreground lg:text-[9px] xl:text-[10px] max-w-xs">
                {isOwnProfile
                  ? "Share your habits with the community to inspire others."
                  : `${user.name} hasn't shared any habits yet.`}
              </p>
              {isOwnProfile && (
                <Link
                  href="/community/my-habits"
                  className="mt-4 inline-block rounded-full bg-primary text-white lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 lg:text-[10px] xl:text-xs font-semibold hover:-translate-y-0.5 transition"
                >
                  Share a habit
                </Link>
              )}
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 xl:gap-4">
              {habits.map((habit) => (
                <PostCard
                  key={habit.id}
                  habit={habit}
                  showVote={!isOwnProfile && isLoggedIn}
                  onVote={!isOwnProfile && isLoggedIn ? handleVote : undefined}
                  showDelete={isOwnProfile}
                  onDelete={isOwnProfile ? handleDelete : undefined}
                  showAdd={!isOwnProfile && isLoggedIn}
                  compact={false}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
