import { Prisma, PrismaClient } from "@prisma/client";

export const getRecipes = async (
  prisma: PrismaClient,
  cursor,
  take,
  options
) => {
  const { query, difficulty, cost, occasion, maxTime, tags } = options;

  const filter: Prisma.RecipeFindManyArgs["where"] = {
    difficulty: difficulty || undefined,
    cost: cost || undefined,
    occasion: occasion ? { hasSome: [occasion] } : undefined,
    tags: tags ? { hasEvery: tags } : undefined,
  };

  const data: Prisma.RecipeFindManyArgs = {
    skip: cursor !== "" ? 1 : 0,
    take,
    where: filter,
    orderBy: [{ id: "desc" }],
    include: {
      ingredients: {
        include: {
          list: true,
        },
      },
      method: true,
    },
  };

  if (cursor !== "") {
    data.cursor = { id: cursor as string };
  }

  if (query.length > 0) {
    data.where = {
      name: {
        contains: query,
        mode: "insensitive",
      },
    };
  }

  let recipes = await prisma.recipe.findMany(data);

  if (maxTime) {
    recipes = recipes.filter(
      (recipe) => recipe.prep + recipe.cook < Number(maxTime)
    );
  }

  return {
    recipes,
    nextCursor: recipes.length === take ? recipes[take - 1].id : null,
  };
};
