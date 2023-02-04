import { Prisma } from "@prisma/client";

export const dinner: Prisma.RecipeCreateInput[] = [
  {
    name: "Meatballs",
    occasion: "dinner",
    tags: ["stores_well"],
    difficulty: "easy",
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
  // {
  //   name: "Falafel",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "2 cups dried chickpeas,handful of dill,1 tsp cumin,0.5 tsp salt,1 Tbsp sesame seeds,1 Tbsp dust,1 Tbsp canola oil,1 flax egg,Tartar sauce",
  //   method:
  //     "Blend all ingredients until sticking together,Roll into ping pong sized balls,Shallow fry for 5 mins,Serve with salad and tatar sauce",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Satay",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "400g firm tofu,2 Tbsp corn flour,3 Tbsp crunchy natural peanut butter,1 Tbsp minced ginger,1 Tbsp minced garlic,1 Tsp soy sauce,1 can coconut cream,2 Tbsp crushed peanuts,1 Tbsp sesame oil,Mixed vegetables,2 cups uncooked rice",
  //   method:
  //     "Dry tofu with teatowel,Mix tofu and corn flour together in bowel,Shallow fry until golden,Add remaining ingredients and mix,Serve as side or part of buddha bowel",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Cheesey Pasta",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "1 can coconut cream,3 Tbsp dust,2 Tbsp flour,1 Tbsp spice mix",
  //   method: "Place in saucepan and cook until thick",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Chicken and Leek Pie",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$$",
  //   ingredients:
  //     "# Vegetables,2 large leeks,2 cloves garlic,0.25 of a red cabbage,4 large mushrooms,1 large brocoli,2 handfuls of spinach,# Rest,3 sheets GF pastry,1 Tbsp mixed herbs,0.5 can coconut cream,1-2 Tbsp corn flour,3 tsp mustard",
  //   method: "Preheat over 200°C,Stir fry vegetables",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Pasta Bake",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "# Base,1 diced onion,2 diced cloves garlic,1 Tbsp oil,8 grated mushrooms,1 grated zucchini,1 can lentils, drained and washed,250g GF pasta,# Tomato Paste,2 cans of tomatoes,1 Tbsp mixed herbs,1 Tbsp maple,# Sauce,1 cup cashews,0.5 lemon's juice,0.5 tsp salt,0.5 vegetable stock,1 tsp mustard,3 Tbsp dust,2 Tbsp GF flour,0.5 cup non dairy milk",
  //   method:
  //     "Preheat oven to 220°C,Cook down tomatoes herb and maple on stove top,Cook pasta,Stir fry base ingredients,Blend sauce,Pour everything into a baking dish,Cook for ~20 mins",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
  // {
  //   name: "Pumpkin Soup",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "0.5 medium sized pumpkin,2 carrots cubed,2 potatoes cubed,1 parsnip cubed,1 onion,1 cup non dairy milk,500ml chicken stock,1 tsp ginger,1 tsp nutmeg,1 tsp cinnamon,0.5 can coconut cream",
  //   method:
  //     "Throw everything into a large pot and bring to boil,Let simmer until vegetables soft,Puree and add cream",
  //   servings: 4,
  //   prep: 10,
  //   cook: 20,
  //   notes: "",
  // },
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
  //   name: "Quinoa Burgers",
  //   occasion: dinner,
  //   difficulty: "easy",
  //   cost: "$",
  //   ingredients:
  //     "2 cups quinoa,0.5 cup GF bread crumbs,1 handful of grated vegan cheese,1 flax egg,1 Tbso chia seed,1 Tbsp chick'n spice",
  //   method:
  //     "Cook quinoa and let cool,Blend all ingredients,Roll into balls,Flatten and fry in non stick pan for ~5 mins each side",
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
