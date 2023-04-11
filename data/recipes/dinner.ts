import { Prisma } from "@prisma/client";

export const dinner: Prisma.RecipeCreateInput[] = [
  {
    name: "Meatballs",
    occasion: "dinner",
    tags: ["stores_well"],
    difficulty: "medium",
    cost: "cheap",
    ingredients: {
      create: [
        {
          heading: "Meatballs",
          list: {
            create: [
              {
                qty: "1",
                unit: "can",
                ingredient: { connect: { name: "black_beans" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "almonds" } },
                note: "ground",
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "gf_bread_crumbs" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "flax_seeds_ground" } },
                note: "3 Tbsp water",
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "red_onion" } },
                note: "chopped",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "ginger" } },
                note: "diced",
              },
            ],
          },
        },
        {
          heading: "Tomato Sauce",
          list: {
            create: [
              {
                qty: "2",
                unit: "can",
                ingredient: { connect: { name: "tomato" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "mixed_herbs" } },
              },
              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "salt" } },
              },
            ],
          },
        },
      ],
    },

    method: {
      create: [
        {
          heading: "Meatballs",
          instructions: [
            "Blend everything in food processor or mash",
            "Fry in oil",
            "Oven bake for 15 mins",
            "Serve with steamed vegetables",
          ],
        },
        {
          heading: "Tomato sauce",
          instructions: [
            "Heat canned tomatoes on stovetop to thicken",
            "Add mixed herbs maple syrup and salt",
          ],
        },
        {
          instructions: "Serve with rice and steamed vegetables",
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },

  {
    name: "Sausage Rolls",
    occasion: "dinner",
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
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
                unit: "cup",
                ingredient: { connect: { name: "cashews" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "onion_powder" } },
              },
              {
                qty: "1",
                unit: "sheet",
                ingredient: { connect: { name: "firm_tofu" } },
                note: "300g",
              },

              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "gf_bread_crumbs" } },
              },
              {
                qty: "3",
                unit: "Tbsp",
                ingredient: { connect: { name: "gf_soy_sauce" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "sweet_paprika" } },
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "basil" } },
              },
              {
                qty: "4",
                unit: "sheet",
                ingredient: { connect: { name: "gf_pastry" } },
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
            "Preheat oven to 200°C",
            "Take pastry out of freezer",
            "Blend all other ingredients",
            "Place filling in middle of pastry and roll",
            "Bake for 20 mins or until brown",
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
    name: "Falafel",
    occasion: "dinner",
    tags: ["bitesized", "freezer_friendly"],
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
                ingredient: { connect: { name: "chickpeas" } },
                note: "dried",
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "cumin_seeds" } },
                note: "ground",
              },

              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "salt" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "sesame_seeds" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "nutritional_yeast" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "flax_seeds_ground" } },
                note: "mixed with 3 Tbsp water",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "vegan_tartar_sauce" } },
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
            "Blend all ingredients in a food processor until sticking together",
            "Roll into ping pong sized balls",
            "Shallow fry on medium heat until golden brown",
            "Serve with veggies, rice and tartar sauce",
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
    name: "Satay",
    occasion: "dinner",
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "1",
                unit: "block",
                ingredient: { connect: { name: "firm_tofu" } },
              },
              {
                qty: "3",
                unit: "Tbsp",
                ingredient: { connect: { name: "peanut_butter" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "ginger" } },
                note: "crushed",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "gf_soy_sauce" } },
              },
              {
                qty: "0.5",
                unit: "can",
                ingredient: { connect: { name: "coconut_cream" } },
              },
              {
                qty: "2",
                unit: "Tbsp",
                ingredient: { connect: { name: "peanut" } },
                note: "crushed",
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "mixed_vegetable" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "garlic_clove" } },
                note: "diced",
              },
              {
                qty: "2",
                unit: "tsp",
                // ingredient: { connect: { name: "red_curry_paste" } },
                recipe: {
                  connect: {
                    name: "Red Curry Paste",
                  },
                },
                note: "optional",
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
            "Press tofu dry with teatowel",
            "Mix tofu and corn flour together in bowel",
            "Shallow fry until golden",
            "Add remaining ingredients and mix",
            "Serve as side or part of buddha bowel",
          ],
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 25,
    notes: "",
  },
  {
    name: "Cheesey Pasta",
    occasion: "dinner",
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          heading: "Sauce",
          list: {
            create: [
              {
                qty: "3",
                unit: "Tbsp",
                ingredient: { connect: { name: "nutritional_yeast" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "cashews" } },
              },
              {
                qty: "1",
                unit: "cube",
                ingredient: { connect: { name: "chicken_stock" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "tumeric_powder" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "water" } },
              },
            ],
          },
        },
        {
          heading: "Base",
          list: {
            create: [
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "mixed_vegetable" } },
              },
              {
                qty: "0.5",
                unit: "box",
                ingredient: { connect: { name: "meat_free_chicken" } },
                note: "eg sunfed",
              },
              {
                qty: "1",
                unit: "box",
                ingredient: { connect: { name: "gf_penne" } },
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
            "Cook pasta as per instructions",
            "Fry vegetables in a frypan",
            "Blend ingredients except pasta in high-speed blender until smooth",
            "Add pasta, sauce and meat_free_chicken",
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
    name: "Chicken and Leek Pie",
    occasion: "dinner",
    difficulty: "easy",
    cost: "ok",
    ingredients: {
      create: [
        {
          heading: "Vegetables",
          list: {
            create: [
              {
                qty: "2",
                unit: "large",
                ingredient: { connect: { name: "leek" } },
              },

              {
                qty: "2",
                unit: "medium",
                ingredient: { connect: { name: "garlic_clove" } },
              },

              {
                qty: "0.25",
                unit: "medium",
                ingredient: { connect: { name: "red_cabbage" } },
              },

              {
                qty: "4",
                unit: "large",
                ingredient: { connect: { name: "mushroom" } },
              },

              {
                qty: "1",
                unit: "large",
                ingredient: { connect: { name: "broccoli" } },
              },
            ],
          },
        },
        {
          heading: "Sauce",
          list: {
            create: [
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "mixed_herbs" } },
              },
              {
                qty: "3",
                unit: "tsp",
                ingredient: { connect: { name: "dijon_mustard" } },
              },
              {
                qty: "0.5",
                unit: "can",
                ingredient: { connect: { name: "coconut_cream" } },
              },
              {
                qty: "2",
                unit: "Tbsp",
                ingredient: { connect: { name: "corn_four" } },
              },
            ],
          },
        },
        {
          heading: "Pastry",
          list: {
            create: [
              {
                qty: "3",
                unit: "sheet",
                ingredient: { connect: { name: "gf_pastry" } },
              },
            ],
          },
        },
      ],
    },
    method: {
      create: [
        {
          instructions: ["Preheat over 180°C"],
        },
      ],
    },

    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },

  {
    name: "Pasta Bake",
    occasion: ["dinner"],
    tags: ["hosting"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          heading: "Base",
          list: {
            create: [
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "onion" } },
                note: "diced",
              },
              {
                qty: "2",
                unit: "medium",
                ingredient: { connect: { name: "garlic_clove" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "olive_oil" } },
              },
              {
                qty: "8",
                unit: "medium",
                ingredient: { connect: { name: "mushroom" } },
                note: "grated",
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "zucchini" } },
              },
              {
                qty: "0.25",
                unit: "cup",
                ingredient: { connect: { name: "red_lentils" } },
              },
            ],
          },
        },
        {
          heading: "Tomato Paste",
          list: {
            create: [
              {
                qty: "2",
                unit: "can",
                ingredient: { connect: { name: "tomato" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "mixed_herbs" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "maple_syrup" } },
              },
            ],
          },
        },
        {
          heading: "Sauce",
          list: {
            create: [
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "cashews" } },
              },
              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "salt" } },
              },
              {
                qty: "0.5",
                unit: "cube",
                ingredient: { connect: { name: "vegetable_stock" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "dijon_mustard" } },
              },
              {
                qty: "3",
                unit: "Tbsp",
                ingredient: { connect: { name: "nutritional_yeast" } },
              },
              {
                qty: "2",
                unit: "Tbsp",
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
          instructions: [
            "Preheat oven to 220°C",
            "Cook down tomatoes herb and maple on stove top",
            "Cook pasta",
            "Stir fry base ingredients",
            "Blend sauce",
            "Pour everything into a baking dish",
            "Cook for about 20 minutes or until brown at top",
          ],
        },
      ],
    },
    servings: 4,
    prep: 10,
    cook: 30,
    notes: "",
  },

  {
    name: "Pumpkin Soup",
    occasion: ["dinner"],
    tags: ["winter"],
    difficulty: "easy",
    cost: "cheap",
    ingredients: {
      create: [
        {
          list: {
            create: [
              {
                qty: "0.5",
                unit: "medium",
                ingredient: { connect: { name: "pumpkin" } },
              },
              {
                qty: "2",
                unit: "medium",
                ingredient: { connect: { name: "carrot" } },
              },
              {
                qty: "2",
                unit: "medium",
                ingredient: { connect: { name: "potato" } },
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "parsnip" } },
              },
              {
                qty: "1",
                unit: "medium",
                ingredient: { connect: { name: "red_onion" } },
              },
              {
                qty: "1",
                unit: "cup",
                ingredient: { connect: { name: "non_dairy_milk" } },
              },
              {
                qty: "2",
                unit: "cup",
                ingredient: { connect: { name: "chicken_stock" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "ginger" } },
              },
              {
                qty: "1",
                unit: "tsp",
                ingredient: { connect: { name: "all_spice" } },
              },
              {
                qty: "0.5",
                unit: "can",
                ingredient: { connect: { name: "coconut_cream" } },
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
            "Throw everything into a large pot",
            "Bring to boil",
            "Let simmer until vegetables soft",
            "Puree if desire smooth texture",
            "Stir through coconut cream",
          ],
        },
      ],
    },
    servings: 4,
    prep: 15,
    cook: 15,
    notes: "",
  },
  {
    name: "Quinoa Burgers",
    occasion: ["dinner"],
    tags: ["protein"],
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
                ingredient: { connect: { name: "quinoa" } },
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "gf_bread_crumbs" } },
              },
              {
                qty: "1",
                unit: "handful",
                ingredient: { connect: { name: "non_dairy_cheese" } },
                note: "grated",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "flax_seeds_ground" } },
                notes: "mixed with 3 Tbsp water",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "chicken_stock" } },
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
            "Cook quinoa and let cool",
            "Blend all ingredients",
            "Roll into balls",
            "Flatten and fry in non stick pan for ~5 mins each side",
          ],
        },
      ],
    },
    servings: 4,
    prep: 5,
    cook: 25,
    notes: "",
  },

  {
    name: "Parma and Chips",
    occasion: ["dinner"],
    tags: ["winter"],
    difficulty: "medium",
    cost: "cheap",
    ingredients: {
      create: [
        {
          heading: "Tomato Paste",
          list: {
            create: [
              {
                qty: "1",
                unit: "can",
                ingredient: { connect: { name: "tomato" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "mixed_herbs" } },
              },
              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "maple_syrup" } },
              },
              {
                qty: "0.5",
                unit: "tsp",
                ingredient: { connect: { name: "salt" } },
              },
            ],
          },
        },
        {
          heading: "Schnitzel",
          list: {
            create: [
              {
                qty: "400",
                unit: "gram",
                ingredient: { connect: { name: "firm_tofu" } },
                note: "sliced",
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "chickpea_flour" } },
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "non_dairy_milk" } },
              },
              {
                qty: "0.5",
                unit: "cup",
                ingredient: { connect: { name: "gf_bread_crumbs" } },
              },
              {
                qty: "2",
                unit: "Tbsp",
                ingredient: { connect: { name: "canola_oil" } },
              },
            ],
          },
        },
        {
          heading: "Chips",
          list: {
            create: [
              {
                qty: "10",
                unit: "medium",
                ingredient: { connect: { name: "potato" } },
                note: "cut into thick slices",
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "mixed_herbs" } },
              },
              {
                qty: "1",
                unit: "Tbsp",
                ingredient: { connect: { name: "sweet_paprika" } },
              },
              {
                qty: "2",
                unit: "Tbsp",
                ingredient: { connect: { name: "gf_flour" } },
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
      create: [
        {
          instructions: [
            {
              heading: "Chips",
              instructions: [
                "Preheat oven to 180°C",
                "Place incredients into large plastic container",
                "Shake it up",
                "Bake for 40 mins or until crispy",
              ],
            },
            {
              heading: "Tomato paste",
              instructions: ["cook down tomatoes herb and maple on stove top"],
            },
            {
              heading: "Schnitzel",
              instructions: [
                "Grab two bowels and fill them with the following",
                "First, whisked chickpea flour and non dairy milk",
                "Seconds, GF breadcrumbs",
                "Dip tofu in each bowel then pan fry in oil until crispy",
                "Coat with tomato paste and cheese",
                "Grill to melt cheese",
                "Serve with chips and salad",
              ],
            },
          ],
        },
      ],
    },
    servings: 4,
    prep: 15,
    cook: 30,
    notes: "",
  },

  // {
  //   name: "Sausages",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "1 can red kidney beans,1 Tbsp seasoning,1 Tbsp tartare,6-8 rice paper rolls",
  //   method:
  //     "Mash beans,Mix in seasoning and tartare,Place rice paper roll in water to soften,Add filling and roll,Repeat,Serve with veggies and mash",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },

  // {
  //   name: "Parma and Chips",
  //   occasion: dinner,
  //   difficulty: "medium",
  //   cost: "$",
  //   ingredients:
  //     "# Tomato Paste,2 canned tomatoes,1 Tbsp mixed herbs,0.5 tsp maple syrup,0.5 tsp salt,# Schnitzel,400g firm tofu sliced,0.5 cup chickpea flour,0.5 cup non dairy milk,0.5 cup GF flour,0.5 cup GF breadcrumbs,2 Tbsp canola oil,# Chips,10 potatoes cut into chips,1 Tbsp mixed herbs,1 Tbsp paprika,2 Tbsp GF flour,2 Tbsp canola oil",
  //   method:
  //     "# Chips,Preheat oven to 180°C,Place incredients into large plastic container,Shake it up,Bake for 40 mins or until crispy,# Tomato Paste,Cook down tomatoes herb and maple on stove top,# Schnitzel,Grab three bowels,First, GF flour,Second, whisked chickpea flour and non dairy milk,Third, GF breadcrumbs,Dip tofu in each bowel then pan fry in oil until crispy,Coat with tomato paste and cheese,Grill to melt cheese and serve with chips and salad",
  //   servings: 4,
  //   prep: 10,
  //   cook: 40,
  //   notes: "",
  // },
  // {
  //   name: "Buckwheat Picklets",
  //   occasion: "{snack}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "0.75 cup buckwheat flour,0.25 cup GF self raising flour,1 chia egg,1 tsbp baking powder,1 cup non dairy milk",
  //   method: "Whisk all ingredients together and pan fry",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Protein Balls",
  //   occasion: "{snack}",
  //   difficulty: "easy",
  //   cost: "$$",
  //   ingredients:
  //     "4 medjool datas,1 cup almonds / cashews,0.25 cup raisins / apricots,1 Tbsp chia seeds,1 Tbsp hemp seeds,3 Tbsp dessicated coconut",
  //   method:
  //     "Blend all ingredients except coconut,Roll into balls,Coat in dessicated coconut",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },

  // {
  //   name: "Samurai Sushi",
  //   occasion: "{lunch, dinner}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "# Base8 sheets of nori paper3 cups of rice (sushi, jasmine or arborio)# Filling1 carrot1 avocado8 sticks of asparagus1 pack of tofu0.5 cup corn flour2 Tbsp hemp seeds2 Tbsp sesame seeds# SauceHarrisa chilli paste (optional)4 Tbsp of tartar sauce# Binder0.5 cup of water",
  //   method:
  //     "Cook rice and let cool (as long as possible),Fry asparagus,Slice everything into thin strips,Place sushi paper onto flat surface,Add a thin layer of rice (leave ~5cm at top),Spread sauces and seeds,Make a line of tofu, avo and veggies in the middle,Take bottom end and roll,Use water to seal the join",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Nut Roast",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$$",
  //   ingredients: "tbc",
  //   method: "tbc",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Thai Red Curry",
  //   occasion: dinner,
  //   difficulty: "medium",
  //   cost: "$",
  //   ingredients: "tbc",
  //   method: "tbc",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Sri Lankan Curry",
  //   occasion: dinner,
  //   difficulty: "medium",
  //   cost: "$",
  //   ingredients: "tbc",
  //   method: "tbc",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Ganstar Wraps",
  //   occasion: dinner,
  //   difficulty: "medium",
  //   cost: "$",
  //   ingredients: "tbc",
  //   method: "tbc",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
];
