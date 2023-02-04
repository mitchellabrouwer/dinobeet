/*
  Warnings:

  - The values [¢¢,¢,$,$$,$$$] on the enum `Cost` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Cost_new" AS ENUM ('really_cheap', 'cheap', 'ok', 'expensive', 'really_expensive');
ALTER TABLE "Recipe" ALTER COLUMN "cost" TYPE "Cost_new" USING ("cost"::text::"Cost_new");
ALTER TYPE "Cost" RENAME TO "Cost_old";
ALTER TYPE "Cost_new" RENAME TO "Cost";
DROP TYPE "Cost_old";
COMMIT;
