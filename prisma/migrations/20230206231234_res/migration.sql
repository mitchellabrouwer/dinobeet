-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "reviewAvg" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "reviewCount" INTEGER NOT NULL DEFAULT 0;
