/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { favourites, reviews, testRecipes, user, userTwo } from ".";
import { SLOW_LOAD } from "../../lib/constants";
import { time } from "../../lib/utils";
import { ingredients } from "../ingredients";
import { breakfast } from "../recipes/breakfast";
import { dinner } from "../recipes/dinner";
import { sauceOrRub } from "../recipes/sauceOrRub";

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

  await prisma.user.create({ data: user });
  await prisma.user.create({ data: userTwo });

  await prisma.ingredient.createMany({
    data: ingredients,
    skipDuplicates: true,
  });

  sauceOrRub.forEach(async (recipe) => {
    await prisma.recipe.create({ data: recipe });
  });

  await time(SLOW_LOAD);

  breakfast.forEach(async (recipe) => {
    await prisma.recipe.create({ data: recipe });
  });

  await time(SLOW_LOAD);

  dinner.forEach(async (recipe) => {
    await prisma.recipe.create({ data: recipe });
  });

  await time(SLOW_LOAD);

  testRecipes.forEach(async (recipe) => {
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
