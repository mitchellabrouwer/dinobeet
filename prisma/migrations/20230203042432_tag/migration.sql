/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RecipeToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('protein', 'omega_3', 'iron', 'bitesized', 'winter', 'summer', 'lunchbox', 'dipping', 'hosting', 'camping', 'on_the_go', 'fun', 'nutritious', 'sometimes_food', 'stores_well', 'freezer_friendly');

-- DropForeignKey
ALTER TABLE "_RecipeToTag" DROP CONSTRAINT "_RecipeToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToTag" DROP CONSTRAINT "_RecipeToTag_B_fkey";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "tags" "Tags"[];

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "_RecipeToTag";
