import { Prisma } from "@prisma/client";

export const lunch: Prisma.RecipeCreateInput[] = [
  {
    name: "Toastie Terrific",
    occasion: "{lunch}",
    difficulty: "easy",
    cost: "$",
    ingredients: "tbc",
    method: "tbc",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Nachoes",
    occasion: "{lunch, dinner}",
    difficulty: "easy",
    cost: "$",
    ingredients: "tbc",
    method: "tbc",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
];
