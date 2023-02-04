/*
  Warnings:

  - Changed the type of `difficulty` on the `Recipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cost` on the `Recipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" "Difficulty" NOT NULL,
DROP COLUMN "cost",
ADD COLUMN     "cost" "Cost" NOT NULL;

-- DropEnum
DROP TYPE "TimeOptions";
