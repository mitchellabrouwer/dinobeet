import { Prisma } from "@prisma/client";

export const sauceOrRub: Prisma.RecipeCreateInput[] = [
  {
    name: "Red Curry Paste",
    occasion: ["sauce_or_rub"],
    tags: ["freezer_friendly"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "4",
                unit: "large",
                ingredient: { connect: { name: "red_chilli" } },
                note: "deseeded and soaked in boiling water",
              },

              {
                qty: "1",
                unit: "thumb",
                ingredient: { connect: { name: "ginger" } },
              },

              {
                qty: "5",
                unit: "medium",
                ingredient: { connect: { name: "garlic_clove" } },
              },

              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "salt" } },
              },
              {
                qty: "1",
                unit: "stick",
                ingredient: { connect: { name: "lemongrass" } },
              },
              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "pepper" } },
              },
              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "pepper" } },
              },
              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "cumin_seeds" } },
                note: "ground",
              },
            ],
          },
        },
      ],
    },
    method: {
      create: [
        {
          instructions: [
            "Blend all ingredients together",
            "Add water, oil or maple syrup if needed to allow blending",
          ],
        },
      ],
    },
    servings: 8,
    prep: 5,
    cook: 0,
    notes: "",
  },
  {
    name: "Pesto",
    occasion: "sauce_or_rub",
    tags: ["omega_3"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "2",
                unit: "cup",
                ingredient: { connect: { name: "basil" } },
                note: "diced",
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "walnuts" } },
                note: "crushed",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "lemon" } },
                note: "juice",
              },
              {
                qty: "3",
                unit: "Tbsp",
                ingredient: { connect: { name: "nutritional_yeast" } },
              },
              {
                qty: "2",
                unit: "Tbsp",
                ingredient: { connect: { name: "canola_oil" } },
              },
            ],
          },
        },
      ],
    },
    method: {
      create: {
        instructions: [
          "Blend all ingredients",
          "For a smoother sauce add water",
        ],
      },
    },
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Teryaki",
    occasion: "sauce_or_rub",
    tags: ["tasty"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "gf_soy_sauce" } },
              },
              {
                qty: "2",
                unit: "tsp",
                ingredient: { connect: { name: "brown_sugar" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "ginger" } },
                note: "diced",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "maple_syrup" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "sesame_oil" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "gf_flour" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "water" } },
              },
            ],
          },
        },
      ],
    },
    method: {
      create: [
        {
          instructions: [
            "Cook all ingredients on medium heat 5 mins",
            "Add more flour to thicken if desired",
          ],
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  // {
  //   name: "Swinging Salsa",
  //   occasion: "{dinner}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "1 can tomatoes,0.5 diced red onion,8 diced olives,4 diced raddishes",
  //   method:
  //     "Cook tomatoes down to a paste,Cool tomato paste in ice,Filter out water in fine colander,Add other diced ingredients",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
];
