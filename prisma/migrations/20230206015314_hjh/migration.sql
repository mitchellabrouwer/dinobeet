/*
  Warnings:

  - A unique constraint covering the columns `[recipeId,userId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Review_recipeId_userId_key" ON "Review"("recipeId", "userId");
