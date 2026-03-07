-- Reconcile schema drift: align migration history with actual DB state

-- Drop enums no longer used
DROP TYPE IF EXISTS "FriendRequestStatus";
DROP TYPE IF EXISTS "HabitCategory";
DROP TYPE IF EXISTS "HabitCommitment";
DROP TYPE IF EXISTS "HabitTimeWindow";

-- Drop friend_request table
DROP TABLE IF EXISTS "friend_request";

-- Fix habit table
ALTER TABLE "habit" DROP CONSTRAINT IF EXISTS "habit_userId_sourcePopularPostId_key";
ALTER TABLE "habit" DROP COLUMN IF EXISTS "sourcePopularPostId";

-- Fix post_habit table
ALTER TABLE "post_habit" DROP CONSTRAINT IF EXISTS "post_habit_habitId_fkey";
DROP INDEX IF EXISTS "post_habit_habitId_idx";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "anchor";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "benefits";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "commitment";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "duration";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "guardrails";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "habitId";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "highlight";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "likesCount";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "steps";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "summary";
ALTER TABLE "post_habit" DROP COLUMN IF EXISTS "timeWindow";
ALTER TABLE "post_habit" ADD COLUMN IF NOT EXISTS "description" TEXT;
ALTER TABLE "post_habit" ADD COLUMN IF NOT EXISTS "goalAmount" DOUBLE PRECISION NOT NULL DEFAULT 1;
ALTER TABLE "post_habit" ADD COLUMN IF NOT EXISTS "goalUnit" TEXT NOT NULL DEFAULT 'count';
ALTER TABLE "post_habit" ADD COLUMN IF NOT EXISTS "goalUnitCategory" TEXT NOT NULL DEFAULT 'Quantity';
ALTER TABLE "post_habit" ADD COLUMN IF NOT EXISTS "reminder" TEXT;
ALTER TABLE "post_habit" ADD COLUMN IF NOT EXISTS "timeOfDay" TEXT;
ALTER TABLE "post_habit" ADD COLUMN IF NOT EXISTS "votesCount" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "post_habit" ALTER COLUMN "cadence" SET DEFAULT 'daily';
ALTER TABLE "post_habit" ALTER COLUMN "category" DROP NOT NULL;
CREATE INDEX IF NOT EXISTS "post_habit_votesCount_idx" ON "post_habit"("votesCount");

-- Fix todo table
DROP INDEX IF EXISTS "todo_userId_dueAt_idx";
ALTER TABLE "todo" DROP COLUMN IF EXISTS "dueAt";
ALTER TABLE "todo" DROP COLUMN IF EXISTS "durationMinutes";
ALTER TABLE "todo" DROP COLUMN IF EXISTS "recurrence";
ALTER TABLE "todo" DROP COLUMN IF EXISTS "reminder";
ALTER TABLE "todo" ADD COLUMN IF NOT EXISTS "scheduledTime" TEXT;

-- Fix user table
ALTER TABLE "user" DROP COLUMN IF EXISTS "headline";
ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "bio" TEXT;
