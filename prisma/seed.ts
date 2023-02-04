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
  await prisma.recipe.deleteMany({});
  await prisma.ingredient.deleteMany({});
  await prisma.favourite.deleteMany({});
  // await prisma.ingredientGroup.deleteMany({});
  // await prisma.tag.createMany(tags);
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
      recipe: { connect: { name: "Chia Pudding" } },
      comment: "test",
      rating: 4,
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
