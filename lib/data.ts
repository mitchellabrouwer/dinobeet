import { Prisma, PrismaClient } from "@prisma/client";

export const getReviews = async (
  prisma: PrismaClient,
  recipeIds: string[] | string
) => {
  const ids = Array.isArray(recipeIds) ? [...recipeIds] : [recipeIds];

  const data: Prisma.ReviewGroupByArgs = {
    by: ["recipeId"],
    _count: {
      _all: true,
    },
    _avg: {
      rating: true,
    },
    where: recipeIds ? { recipeId: { in: ids } } : undefined,
  };

  // @ts-ignore - known Prisma error https://github.com/prisma/prisma/issues/6494
  const reviews = await prisma.review.groupBy(data);

  let reviewDetails: { [x: string]: { count: number; average: number } };
  if (reviews?.length) {
    // @ts-ignore
    reviewDetails = reviews.reduce<{
      [x: string]: { count: number; average: number };
    }>(
      (accumulator, review) => ({
        ...accumulator,
        [review.recipeId]: {
          // eslint-disable-next-line no-underscore-dangle
          count: review._count._all,
          // eslint-disable-next-line no-underscore-dangle
          average: review._avg.rating,
        },
      }),
      {}
    );
  }

  return { ...reviewDetails };
};

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
      reviews: true,
    },
  };

  console.log(data);
  console.log(cursor);

  if (cursor !== "" && cursor) {
    data.cursor = { id: cursor as string };
  }

  if (query?.length > 0) {
    data.where = {
      name: {
        contains: query,
        mode: "insensitive",
      },
    };
  }

  let recipes = await prisma.recipe.findMany(data);
  console.log(recipes);

  if (maxTime) {
    recipes = recipes.filter(
      (recipe) => recipe.prep + recipe.cook < Number(maxTime)
    );
  }

  const reviews = await prisma.review.groupBy({
    by: ["recipeId"],
    _count: {
      _all: true,
    },
    _avg: {
      rating: true,
    },
  });

  console.log("reviews", reviews);

  let reviewDetails: { [x: string]: { count: number; average: number } };
  if (reviews?.length) {
    reviewDetails = reviews.reduce<{
      [x: string]: { count: number; average: number };
    }>(
      (accumulator, review) => ({
        ...accumulator,
        [review.recipeId]: {
          // eslint-disable-next-line no-underscore-dangle
          count: review._count._all,
          // eslint-disable-next-line no-underscore-dangle
          average: review._avg.rating,
        },
      }),
      {}
    );
  }

  console.log("review details", reviewDetails);

  return {
    recipes,
    reviews: reviewDetails,
    nextCursor: recipes.length === take ? recipes[take - 1].id : null,
  };
};

export const getFavourites = async (prisma: PrismaClient, userId) => {
  const favourites = await prisma.favourite.findMany({
    where: {
      userId,
    },
    include: {
      recipe: true,
    },
  });
  const favouriteIds = favourites.map((favourite) => favourite.recipeId);

  const reviewDetails = await getReviews(prisma, favouriteIds);

  return { favourites, reviews: reviewDetails };
};
