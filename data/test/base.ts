/* eslint-disable no-console */
import { Prisma, PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { SLOW_LOAD } from "../../lib/constants";
import { time } from "../../lib/utils";
import { ingredients } from "../ingredients";
import { breakfast } from "../recipes/breakfast";
import { dinner } from "../recipes/dinner";
import { sauceOrRub } from "../recipes/sauceOrRub";

dotenv.config({ path: `${__dirname}/./../../.env.test.local` });

export const user: Prisma.UserCreateInput = {
  id: "a2950aa3-7bf7-4044-87e9-5a8db9274fd7",
  email: "test@test.com",
  paid: true,
  name: "test",
  role: "ADMIN",
};

export const userTwo: Prisma.UserCreateInput = {
  id: "5dd0207e-79f4-4382-bdf0-6f2262148125",
  email: "testtwo@test.com",
  paid: true,
  name: "testtwo",
};

const favourites: Prisma.FavouriteCreateInput[] = [
  {
    recipe: { connect: { id: "Meatballs" } },
    user: { connect: { email: user.email } },
  },
  {
    recipe: { connect: { id: "Satay" } },
    user: { connect: { email: user.email } },
  },
];

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
