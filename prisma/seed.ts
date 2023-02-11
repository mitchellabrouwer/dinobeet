import { PrismaClient } from "@prisma/client";
import { ingredients } from "../data/ingredients";
import { breakfast } from "../data/recipes/breakfast";
import { dinner } from "../data/recipes/dinner";
import { sauceOrRub } from "../data/recipes/sauceOrRub";

const prisma = new PrismaClient();

const SLOW_LOAD = 800;
const FAST_LOAD = 400;

function time(milliseconds) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
}

async function main() {
  // clean database
  await prisma.user.deleteMany({});
  await prisma.verificationToken.deleteMany({});
  await prisma.account.deleteMany({});
  await prisma.session.deleteMany({});

  await prisma.recipe.deleteMany({});
  await prisma.methodGroup.deleteMany({});
  await prisma.ingredientGroup.deleteMany({});
  await prisma.ingredientMeasured.deleteMany({});
  await prisma.ingredient.deleteMany({});

  await prisma.favourite.deleteMany({});
  await prisma.review.deleteMany({});

  // create test user
  await prisma.user.upsert({
    create: {
      email: "test@test.com",
      paid: true,
      name: "test",
    },
    update: {},
    where: {
      email: "test@test.com",
    },
  });

  // seed from data folder
  await prisma.ingredient.createMany({
    data: ingredients,
    skipDuplicates: true,
  });

  breakfast.forEach(async (recipe) => {
    await prisma.recipe.create({ data: recipe });
  });

  dinner.forEach(async (recipe) => {
    await prisma.recipe.create({ data: recipe });
  });

  sauceOrRub.forEach(async (recipe) => {
    await prisma.recipe.create({ data: recipe });
  });

  // wait for db to populate
  await time(SLOW_LOAD);

  // create for testing
  await prisma.favourite.create({
    data: {
      user: { connect: { email: "test@test.com" } },
      recipe: { connect: { name: "Meatballs" } },
    },
  });

  await prisma.favourite.create({
    data: {
      user: { connect: { email: "test@test.com" } },
      recipe: { connect: { name: "Chia Pudding" } },
    },
  });

  await prisma.review.create({
    data: {
      user: { connect: { email: "test@test.com" } },
      recipe: { connect: { name: "Chia Pudding" } },
      comment: "test",
      rating: 4,
    },
  });

  await prisma.review.create({
    data: {
      user: { connect: { email: "test@test.com" } },
      recipe: { connect: { name: "Banana Pillows" } },
      comment: "nice one",
      rating: 5,
    },
  });

  await prisma.review.create({
    data: {
      user: { connect: { email: "test@test.com" } },
      recipe: { connect: { name: "Meatballs" } },
      comment: "yum",
      rating: 5,
    },
  });
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
