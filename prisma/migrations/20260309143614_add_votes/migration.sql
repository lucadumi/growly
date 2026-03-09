/*
  Warnings:

  - You are about to drop the column `anchor` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `benefits` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `guardrails` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `highlight` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `likesCount` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `steps` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `post_habit` table. All the data in the column will be lost.
  - You are about to drop the `post_habit_like` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_habit_like" DROP CONSTRAINT "post_habit_like_postHabitId_fkey";

-- DropForeignKey
ALTER TABLE "post_habit_like" DROP CONSTRAINT "post_habit_like_userId_fkey";

-- AlterTable
ALTER TABLE "post_habit" DROP COLUMN "anchor",
DROP COLUMN "benefits",
DROP COLUMN "duration",
DROP COLUMN "guardrails",
DROP COLUMN "highlight",
DROP COLUMN "likesCount",
DROP COLUMN "steps",
DROP COLUMN "summary",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "votesCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "post_habit_like";

-- CreateTable
CREATE TABLE "post_habit_vote" (
    "id" TEXT NOT NULL,
    "postHabitId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_habit_vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "post_habit_vote_postHabitId_idx" ON "post_habit_vote"("postHabitId");

-- CreateIndex
CREATE INDEX "post_habit_vote_userId_idx" ON "post_habit_vote"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "post_habit_vote_postHabitId_userId_key" ON "post_habit_vote"("postHabitId", "userId");

-- AddForeignKey
ALTER TABLE "post_habit_vote" ADD CONSTRAINT "post_habit_vote_postHabitId_fkey" FOREIGN KEY ("postHabitId") REFERENCES "post_habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_habit_vote" ADD CONSTRAINT "post_habit_vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
