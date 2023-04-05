import { Prisma } from "@prisma/client";

export const lunch: Prisma.RecipeCreateInput[] = [
  {
    name: "Fast Noodles",
    occasion: ["lunch"],
    tags: ["lunchbox"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "1",
                unit: "handful",
                ingredient: { connect: { name: "walnuts" } },
              },

              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "red_onion" } },
              },

              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "maple_syrup" } },
              },

              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "mixed_vegetable" } },
                note: "frozen",
              },
            ],
          },
        },
      ],
    },
    method: {
      create: [
        {
          instructions: ["Fry walnuts and red onion with maple syrup"],
        },
      ],
    },
    servings: 2,
    prep: 5,
    cook: 10,
    notes: "",
  },
  // {
  //   name: "Toastie Terrific",
  //   occasion: "{lunch}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients: "tbc",
  //   method: "tbc",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Nachoes",
  //   occasion: "{lunch, dinner}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients: "tbc",
  //   method: "tbc",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
];
