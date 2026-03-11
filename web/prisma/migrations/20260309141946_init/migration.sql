-- CreateEnum
CREATE TYPE "TodoPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('PLANNED', 'IN_PROGRESS', 'COMPLETED', 'MISSED');

-- CreateEnum
CREATE TYPE "HabitCategory" AS ENUM ('Movement', 'Energy', 'Focus', 'Recovery', 'Mindset', 'Health');

-- CreateEnum
CREATE TYPE "HabitCommitment" AS ENUM ('Quick', 'Standard', 'Deep');

-- CreateEnum
CREATE TYPE "HabitTimeWindow" AS ENUM ('Anytime', 'Morning', 'Workday', 'Evening');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "streakGoalDays" INTEGER DEFAULT 21,
    "privateAccount" BOOLEAN NOT NULL DEFAULT false,
    "username" TEXT,
    "focusArea" TEXT,
    "bio" TEXT,
    "location" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "priority" "TodoPriority" NOT NULL DEFAULT 'MEDIUM',
    "status" "TodoStatus" NOT NULL DEFAULT 'PLANNED',
    "dueAt" TIMESTAMP(3),
    "durationMinutes" INTEGER,
    "location" TEXT,
    "reminder" TEXT,
    "recurrence" TEXT,
    "tags" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "iconColor" TEXT NOT NULL DEFAULT '#E5E7EB',
    "iconName" TEXT NOT NULL DEFAULT 'Notebook',
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection_todo" (
    "id" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "todoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collection_todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "cadence" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "timeOfDay" TEXT,
    "reminder" TEXT,
    "goalAmount" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "goalUnit" TEXT NOT NULL DEFAULT 'count',
    "goalUnitCategory" TEXT NOT NULL DEFAULT 'Quantity',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "sourcePopularPostId" TEXT,
    "dailyProgress" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit_daily_progress" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "habit_daily_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routine" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "anchor" TEXT,
    "notes" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "routine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routine_habit" (
    "id" TEXT NOT NULL,
    "routineId" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "routine_habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_habit" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT,
    "highlight" TEXT,
    "anchor" TEXT,
    "duration" TEXT,
    "cadence" TEXT NOT NULL,
    "category" "HabitCategory" NOT NULL,
    "timeWindow" "HabitTimeWindow" NOT NULL DEFAULT 'Anytime',
    "commitment" "HabitCommitment" NOT NULL,
    "benefits" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "steps" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "guardrails" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "habitId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "likesCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "post_habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_habit_like" (
    "id" TEXT NOT NULL,
    "postHabitId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_habit_like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_read" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "notificationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_read_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE INDEX "todo_userId_dueAt_idx" ON "todo"("userId", "dueAt");

-- CreateIndex
CREATE UNIQUE INDEX "todo_id_userId_key" ON "todo"("id", "userId");

-- CreateIndex
CREATE INDEX "collection_userId_name_idx" ON "collection"("userId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "collection_todo_collectionId_todoId_key" ON "collection_todo"("collectionId", "todoId");

-- CreateIndex
CREATE INDEX "habit_userId_idx" ON "habit"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "habit_id_userId_key" ON "habit"("id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "habit_userId_sourcePopularPostId_key" ON "habit"("userId", "sourcePopularPostId");

-- CreateIndex
CREATE INDEX "habit_daily_progress_habitId_idx" ON "habit_daily_progress"("habitId");

-- CreateIndex
CREATE INDEX "habit_daily_progress_date_idx" ON "habit_daily_progress"("date");

-- CreateIndex
CREATE UNIQUE INDEX "habit_daily_progress_habitId_date_key" ON "habit_daily_progress"("habitId", "date");

-- CreateIndex
CREATE INDEX "routine_userId_idx" ON "routine"("userId");

-- CreateIndex
CREATE INDEX "routine_habit_routineId_idx" ON "routine_habit"("routineId");

-- CreateIndex
CREATE INDEX "routine_habit_habitId_idx" ON "routine_habit"("habitId");

-- CreateIndex
CREATE UNIQUE INDEX "routine_habit_routineId_habitId_key" ON "routine_habit"("routineId", "habitId");

-- CreateIndex
CREATE INDEX "post_habit_userId_idx" ON "post_habit"("userId");

-- CreateIndex
CREATE INDEX "post_habit_habitId_idx" ON "post_habit"("habitId");

-- CreateIndex
CREATE INDEX "post_habit_like_postHabitId_idx" ON "post_habit_like"("postHabitId");

-- CreateIndex
CREATE INDEX "post_habit_like_userId_idx" ON "post_habit_like"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "post_habit_like_postHabitId_userId_key" ON "post_habit_like"("postHabitId", "userId");

-- CreateIndex
CREATE INDEX "notification_read_userId_idx" ON "notification_read"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "notification_read_userId_notificationId_key" ON "notification_read"("userId", "notificationId");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection" ADD CONSTRAINT "collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection_todo" ADD CONSTRAINT "collection_todo_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection_todo" ADD CONSTRAINT "collection_todo_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit" ADD CONSTRAINT "habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_daily_progress" ADD CONSTRAINT "habit_daily_progress_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine" ADD CONSTRAINT "routine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_habit" ADD CONSTRAINT "routine_habit_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routine_habit" ADD CONSTRAINT "routine_habit_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "routine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_habit" ADD CONSTRAINT "post_habit_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_habit" ADD CONSTRAINT "post_habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_habit_like" ADD CONSTRAINT "post_habit_like_postHabitId_fkey" FOREIGN KEY ("postHabitId") REFERENCES "post_habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_habit_like" ADD CONSTRAINT "post_habit_like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_read" ADD CONSTRAINT "notification_read_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
