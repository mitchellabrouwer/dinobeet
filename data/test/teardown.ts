/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/./../../.env.test.local` });

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.recipe.deleteMany({});
  await prisma.methodGroup.deleteMany({});
  await prisma.ingredientGroup.deleteMany({});
  await prisma.ingredientMeasured.deleteMany({});
  await prisma.ingredient.deleteMany({});
  await prisma.favourite.deleteMany({});
  await prisma.review.deleteMany({});

  console.log("teardown complete");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
