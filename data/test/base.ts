/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { favourites, recipes, reviews, user, userTwo } from ".";
import { ingredients } from "../ingredients";

dotenv.config({ path: `${__dirname}/./../../.env.test.local` });

const prisma = new PrismaClient();

const SLOW_LOAD = 800;

function time(milliseconds) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
}

async function main() {
  await prisma.user.deleteMany({});
  await prisma.recipe.deleteMany({});
  await prisma.methodGroup.deleteMany({});
  await prisma.ingredientGroup.deleteMany({});
  await prisma.ingredientMeasured.deleteMany({});
  await prisma.ingredient.deleteMany({});
  await prisma.favourite.deleteMany({});
  await prisma.review.deleteMany({});

  await prisma.user.create({ data: user });
  await prisma.user.create({ data: userTwo });

  await prisma.ingredient.createMany({
    data: ingredients,
    skipDuplicates: true,
  });

  recipes.forEach(async (recipe) => {
    console.log(recipe.name);

    await prisma.recipe.create({ data: recipe });
  });

  await time(SLOW_LOAD);

  reviews.forEach(async (review) => {
    await prisma.review.create({ data: review });
  });

  favourites.forEach(async (favourite) => {
    await prisma.favourite.create({ data: favourite });
  });

  console.log("base test data set");
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
