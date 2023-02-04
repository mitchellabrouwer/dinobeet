/*
  Warnings:

  - The values [extremely_cheap,somewhat_cheap,neither_cheap_or_expensive,somewhat_expensive,extremely_expensive] on the enum `Cost` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Cost_new" AS ENUM ('¢¢', '¢', '$', '$$', '$$$');
ALTER TYPE "Cost" RENAME TO "Cost_old";
ALTER TYPE "Cost_new" RENAME TO "Cost";
DROP TYPE "Cost_old";
COMMIT;
