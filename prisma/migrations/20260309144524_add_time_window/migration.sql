/*
  Warnings:

  - You are about to drop the column `reminder` on the `habit` table. All the data in the column will be lost.
  - You are about to drop the column `timeOfDay` on the `habit` table. All the data in the column will be lost.
  - You are about to drop the column `commitment` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `timeWindow` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `user` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RoutineTimeWindow" AS ENUM ('Anytime', 'Morning', 'Workday', 'Evening');

-- AlterTable
ALTER TABLE "habit" DROP COLUMN "reminder",
DROP COLUMN "timeOfDay",
ADD COLUMN     "timeWindow" TEXT;

-- AlterTable
ALTER TABLE "post_habit" DROP COLUMN "commitment",
DROP COLUMN "timeWindow";

-- AlterTable
ALTER TABLE "routine" ADD COLUMN     "timeWindow" "RoutineTimeWindow" NOT NULL DEFAULT 'Anytime';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "emailVerified";

-- DropEnum
DROP TYPE "HabitCommitment";

-- DropEnum
DROP TYPE "HabitTimeWindow";
