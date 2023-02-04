import { PrismaClient } from "@prisma/client";
import { ingredients } from "../data/ingredients";
import { breakfast } from "../data/recipes/breakfast";
import { dinner } from "../data/recipes/dinner";
import { sauceOrRub } from "../data/recipes/sauceOrRub";

const prisma = new PrismaClient();

async function main() {
  await prisma.recipe.deleteMany({});
  await prisma.ingredient.deleteMany({});
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
