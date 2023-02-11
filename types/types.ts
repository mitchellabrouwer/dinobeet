import { Prisma } from "@prisma/client";
import { getFavourites, getRecipes } from "../lib/data";

// type UserChildren = Prisma.PromiseReturnType<typeof getChild>;
type GetRecipes = Prisma.PromiseReturnType<typeof getRecipes>;
type GetFavourites = Prisma.PromiseReturnType<typeof getFavourites>;

interface SelectOption {
  readonly label: string;
  readonly value: string;
}

export type { GetRecipes, GetFavourites, SelectOption };

// type RecipeType = Prisma.RecipeGetPayload<{
//   include: { tags: true };
// }>;
