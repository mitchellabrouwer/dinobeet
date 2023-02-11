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

  // {
  //   name: "Fritters",
  //   occasion: "{breakfast, lunch, dinner}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "2 cups corn,Leek finely chopped,4 mushrooms,1 clove garlic,0.5 cup GF flour,0.5 cup corn flour,0.5 cup water (if needed)",
  //   method:
  //     "Pre cook vegetables and garlic and let cool,Blend all ingredients,Roll into patties,Fry until crispy",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },

  // {
  //   name: "Frittatas",
  //   occasion: "{breakfast, snack}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "# Vegetables,1 onion,1 clove of garlic,0.5 brocoli,0.5 cauliflower,1 sweet potato,0.5 cup mixed frozen vegetables,1 sping onion,0.5 cup grated cheese,# Batter,2 cups chickpea flour,2 cups plant milk/water,1 tsp baking powder,1 tsp mixed herbs,3 Tbsp dust,Spinkle of salt and pepper",
  //   method:
  //     "Preheat oven to 180°C,Blend and fry vegetables,Whist batter ingredients in a separate bowel,Line pattty tins / muffin trays,Pour small amount of batter in each,Scoup vegetables in ,Pour in remaining batter evenly,Bake 30 mins or until bown",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },

  // {
  //   name: "Sausage Rolls",
  //   occasion: "{dinner}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "1 onion,1 clove garlic,0.5 cup cashews,1 tsp onion powder,300g tofu,0.5 cup breadcrumbs,3 Tbsp soy sauce,1 tsp paprika,0.5 cup fresh basil,4 sheets GF pastry",
  //   method:
  //     "Preheat oven to 200°C,Take pastry out of freezer,Blend all other ingredients,Place filling in middle of pastry and roll,Bake for 20 mins or until brown",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },

  // {
  //   name: "Potato Goodness",
  //   occasion: "{snack}",
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "10 potatoes,0.25 red cabbage diced,2 peeled and grated carrots,1 diced red onion,1 Tbsp canola oil,3 Tbsp tartar sauce,1 Tbsp pepitas",
  //   method: "Peel and steam potatoes,Mix in all other ingredients",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },

  // {
  //   name: "Wild Wild Wheatbix",
  //   occasion: "{breakfast, snack}",
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
  //   name: "Weekend Breakfast",
  //   occasion: "{breakfast}",
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
  //   name: "Tofu Scramble",
  //   occasion: "{breakfast, lunch, dinner}",
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
  //   name: "Overnight Oats",
  //   occasion: "{breakfast, snack}",
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
