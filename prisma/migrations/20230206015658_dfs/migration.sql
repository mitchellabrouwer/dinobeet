/*
  Warnings:

  - A unique constraint covering the columns `[recipeId,userId]` on the table `Favourite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favourite_recipeId_userId_key" ON "Favourite"("recipeId", "userId");
