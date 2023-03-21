import { Prisma } from "@prisma/client";
import { getFavourites, getRandomRecipe } from "../lib/data";

// type UserChildren = Prisma.PromiseReturnType<typeof getChild>;
type RecipeExpanded = Prisma.RecipeGetPayload<{
  include: { ingredients: true; method: true };
}>;
// type Reviews = Prisma.PromiseReturnType<typeof getReviews>;
type GetRecipes = {
  recipe: RecipeExpanded;
  reviews: { [key: string]: { count: number; average: number } };
};

type GetFavourites = Prisma.PromiseReturnType<typeof getFavourites>;
type GetRandomRecipe = Prisma.PromiseReturnType<typeof getRandomRecipe>;

interface SelectOption {
  readonly label: string;
  readonly value: string;
}

export type LoginFormInput = {
  // userName: string;
  // lastName: string;
  email: string;
};

export type {
  GetRecipes,
  GetFavourites,
  SelectOption,
  GetRandomRecipe,
  LoginFormInput,
};

// type RecipeType = Prisma.RecipeGetPayload<{
//   include: { tags: true };
// }>;
