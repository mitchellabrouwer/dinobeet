/* eslint-disable import/no-extraneous-dependencies */
import { Prisma } from "@prisma/client";

const user: Prisma.UserCreateInput = {
  id: "a2950aa3-7bf7-4044-87e9-5a8db9274fd7",
  email: "test@test.com",
  paid: true,
  name: "test",
  role: "ADMIN",
};

const userTwo: Prisma.UserCreateInput = {
  id: "5dd0207e-79f4-4382-bdf0-6f2262148125",
  email: "testTwo@test.com",
  paid: true,
  name: "testTwo",
};

const recipes: Prisma.RecipeCreateInput[] = [
  {
    id: "c36b27e6-0422-47f9-88de-d8aebc57b9d6",
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
    id: "73d43a44-af43-48ca-814d-657a47e8977d",
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
    id: "c7cb61f7-c5f8-439a-8cb1-41ca528c1098",
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
                ingredient: { connect: { name: "flax_seeds" } },
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
];

const reviews: Prisma.ReviewCreateInput[] = [
  {
    recipe: { connect: { id: recipes[0].id } },
    user: { connect: { id: user.id } },
    rating: 5,
    comment: "this is a for test recipe one",
  },
  {
    recipe: { connect: { id: recipes[1].id } },
    user: { connect: { id: user.id } },
    rating: 5,
    comment: "this is a for test recipe two",
  },
];

const favourites: Prisma.FavouriteCreateInput[] = [
  {
    recipe: { connect: { id: recipes[0].id } },
    user: { connect: { email: user.email } },
  },
  {
    recipe: { connect: { id: recipes[1].id } },
    user: { connect: { email: user.email } },
  },
];

export { user, userTwo, recipes, reviews, favourites };
