import { Prisma, PrismaClient } from "@prisma/client";

export const getRecipes = async (
  prisma: PrismaClient,
  cursor,
  take,
  options
) => {
  const { query, difficulty, cost, occasion, maxTime, tags } = options;

  const filter: Prisma.RecipeFindManyArgs["where"] = {};

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

  const recipes = await prisma.recipe.findMany(data);

  console.log("recipes", recipes);

  const more = recipes.length > 1 ? recipes[take - 1].id : null;
  console.log("more", more);

  const moreTo = recipes.length === take ? recipes[take - 1].id : null;

  console.log("more2", moreTo);

  // const test = await prisma.recipe.findMany({ orderBy: [{ id: "desc" }] });

  // console.log("test", test);
  // const dataTwo: Prisma.RecipeFindManyArgs = {
  //   where: {
  //     name: {
  //       contains: "ter",
  //       mode: "insensitive",
  //     },
  //   },
  //   orderBy: [{ id: "desc" }],
  //   include: {
  //     ingredients: {
  //       include: {
  //         list: true,
  //       },
  //     },
  //     method: true,
  //   },
  //   take,
  // };

  // const test = await prisma.recipe.findMany(dataTwo);
  // console.log("test", test);
  return {
    recipes,
    nextCursor: recipes.length === take ? recipes[take - 1].id : null,
  };
};
