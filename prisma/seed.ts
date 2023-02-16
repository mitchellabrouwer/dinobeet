import { PrismaClient } from "@prisma/client";
import { ingredients } from "../data/ingredients";
import { breakfast } from "../data/recipes/breakfast";
import { dinner } from "../data/recipes/dinner";
import { sauceOrRub } from "../data/recipes/sauceOrRub";

const prisma = new PrismaClient();

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
