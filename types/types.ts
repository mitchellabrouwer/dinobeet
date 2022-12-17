import { Prisma } from "@prisma/client";
import { getRecipes } from "../lib/data";

// type UserChildren = Prisma.PromiseReturnType<typeof getChild>;
type GetRecipes = Prisma.PromiseReturnType<typeof getRecipes>;

interface SelectOption {
  readonly label: string;
  readonly value: string;
}

export type { GetRecipes, SelectOption };
