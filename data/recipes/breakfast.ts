import { Prisma } from "@prisma/client";

export const breakfast: Prisma.RecipeCreateInput[] = [
  {
    id: "clds6195h0002a53058l0l52z",
    name: "Banana Pillows",
    occasion: "dinner",
    tags: ["nutritious"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "2",
                unit: "medium",
                ingredient: { connect: { name: "banana" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "almond_flour" } },
                note: "chopped",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "chia_seeds" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "baking_powder" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "gf_flour" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "almond_milk" } },
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
            "Preheat oven to 180°C",
            "Blend until thick smooth batter",
            "Spoon onto lined baking trays",
            "Bake 12-17 mins until light brown",
            "Let cool a little to avoid sticking",
          ],
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 20,
    notes:
      "Make your own almond meal by grinding almonds in high speed blender",
  },

  {
    name: "Chia Pudding",
    occasion: ["breakfast", "snack"],
    tags: ["nutritious", "omega_3"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "2",
                unit: "Tbsp",
                ingredient: { connect: { name: "chia_seeds" } },
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "non_dairy_milk" } },
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "strawberry" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "maple_syrup" } },
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
            "Blend all ingredients",
            "Place in fridge for at least 3 hours",
          ],
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },

  {
    name: "Fritters",
    occasion: ["breakfast", "lunch", "dinner"],
    tags: ["freezer_friendly"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: {
        list: {
          create: [
            {
              qty: "2",
              unit: "cup",
              ingredient: { connect: { name: "corn" } },
            },
            {
              qty: "1",
              unit: "medium",
              ingredient: { connect: { name: "leek" } },
            },
            {
              qty: "4",
              unit: "medium",
              ingredient: { connect: { name: "mushroom" } },
            },
            {
              qty: "1",
              unit: "medium",
              ingredient: { connect: { name: "garlic_clove" } },
            },
            {
              qty: "0.5",
              unit: "cup",
              ingredient: { connect: { name: "gf_flour" } },
            },
            {
              qty: "0.5",
              unit: "cup",
              ingredient: { connect: { name: "corn_four" } },
            },
            {
              qty: "0.5",
              unit: "cup",
              ingredient: { connect: { name: "water" } },
            },
          ],
        },
      },
    },
    method: {
      create: [
        {
          instructions: [
            "Pre cook vegetables and garlic and let cool",
            "Blend all ingredients,Roll into patties,Fry until crispy",
          ],
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },

  {
    name: "Frittatas",
    occasion: ["breakfast", "snack"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          heading: "Vegetables",
          list: {
            create: [
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "red_onion" } },
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "garlic_clove" } },
              },
              {
                qty: "0.5",
                unit: "medium",
                ingredient: { connect: { name: "broccoli" } },
              },
              {
                qty: "0.5",
                unit: "medium",
                ingredient: { connect: { name: "cauliflower" } },
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "sweet_potato" } },
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "mixed_vegetable" } },
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "spring_onion" } },
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "non_dairy_cheese" } },
              },
            ],
          },
        },
        {
          heading: "Batter",
          list: {
            create: [
              {
                qty: "2",
                unit: "cup",
                ingredient: { connect: { name: "chickpea_flour" } },
              },

              {
                qty: "2",
                unit: "cup",
                ingredient: { connect: { name: "non_dairy_milk" } },
              },

              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "baking_powder" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "mixed_herbs" } },
              },
              {
                qty: "3",
                unit: "Tbsp",
                ingredient: { connect: { name: "nutritional_yeast" } },
              },
              {
                qty: "1",
                unit: "sprinkle",
                ingredient: { connect: { name: "salt" } },
              },
              {
                qty: "1",
                unit: "sprinkle",
                ingredient: { connect: { name: "pepper" } },
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
            "Preheat oven to 180°C",
            "Fry vegetables",
            "Blend in food processor",
            "Pour into muffin or pie trays",
            "Bake for 30 mins or until brown",
          ],
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },

  {
    name: "Wild Wild Wheatbix",
    occasion: ["breakfast", "snack"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "3",
                unit: "biscuit",
                ingredient: { connect: { name: "gf_weet_bix" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "pumpkin_seeds" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "sunflower_seeds" } },
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "banana" } },
              },
              {
                qty: "1",
                unit: "Tbsp",

                ingredient: { connect: { name: "saltanas" } },
              },
              {
                qty: "1",
                unit: "handful",
                ingredient: { connect: { name: "walnuts" } },
                note: "crushed",
              },
              {
                qty: "2",
                unit: "cup",
                ingredient: { connect: { name: "non_dairy_milk" } },
              },
            ],
          },
        },
      ],
    },
    method: {
      create: [
        {
          instructions: ["Break up weetbix and add all ingredients"],
        },
      ],
    },
    servings: 1,
    prep: 5,
    cook: 0,
    notes: "",
  },

  {
    name: "Overnight buckwheat",
    occasion: ["breakfast", "snack"],
    tags: ["on_the_go"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "3",
                unit: "Tbsp",
                ingredient: { connect: { name: "buckwheat" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "soy_milk" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "maple_syrup" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "peanut_butter" } },
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
            "Mix together in a container",
            "keep in refrigerator overnight",
          ],
        },
      ],
    },
    servings: 1,
    prep: 5,
    cook: 0,
    notes: "Options to add different fruits and chocolate",
  },

  // french toast
  // Tofu scramble
];
