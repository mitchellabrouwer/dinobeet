/*
  Warnings:

  - A unique constraint covering the columns `[stripePi]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stripePi` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "stripePi" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_stripePi_key" ON "User"("stripePi");
