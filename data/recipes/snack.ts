import { Prisma } from "@prisma/client";

export const snack: Prisma.RecipeCreateInput[] = [
  {
    name: "Blueberry Muffins",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "3 medium ripe bananas,1.5 blended almonds or cashews,2 tsp baking powder,0.5 tsp baking soda,1 tsp apple cider vinegar,0.25 cup melted coconut oil,1 cup of non dairy milk,1 punnet of bluberries",
    method:
      "Preheat oven to 180°C,Line muffin trays with baking paper,Melt coconut oil,Blend all ingredients except bluberries until smooth,Mix through bluberries by hand,Spoon into patty trays,Bake about 25 mins (check with toothpick)",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Blueberry Muffins 2",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "# Dry,1.5 cups oats,1 cup ground almonds,1 tsp baking powder,0.5 tsp baking soda,0.25 tsp salt,1 punnet bluberries,# Wet,1 cup almond milk,1 Tbsp lemon juice,3 Tbsp oil,1 tsp maple syrup,1 tsp vanilla extract",
    method:
      "Preheat oven to 180°C,Line muffin trays with baking paper,Blend all ingredients except bluberries until smooth,Mix through bluberries by hand,Spoon into patty trays,Bake about 25 mins (check with toothpick)",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Choc Chip Cookies",
    occasion: "{treat}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "# Wet Ingredients,0.25 cup of raw sugar,1 Tbsp flax,1 tsp maple syrup,0.75 cup non dairy milk,1 Tbsp melted coconut oil,# Dry Ingredients,1 cup GF flour,1 cup ground almond meal,0.5 tsp baking powder,50g chocolate broken into bits",
    method:
      "Preheat oven to 180°C,Line muffin trays,Blend wet and dry ingredients together,Roll into golf ball sized balls,Spoon into trays and flatten with back of spoon,Bake for 15 mins or until turning golden",
    servings: 18,
    prep: 10,
    cook: 15,
    notes: "",
  },
  {
    name: "Banana Bread",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "# Wet Ingredients,4 medium bananas,2 Tbsp chia,0.33 cup non dairy milk,1 Tbsp canola oil,2 Tbsp maple syrup,# Dry Ingredients,0.5 cup oats or GF flour,1 tsp baking powder,1.5 cups almonds,0.5 cup crushed walnuts",
    method:
      "Preheat oven to 180°C and line bread tin,Blend almonds at high speed to create almond meal,Blend all ingredients until mixed well,Pour into bread tin,Bake 45 mins or until brown",
    servings: 10,
    prep: 5,
    cook: 45,
    notes: "",
  },
  {
    name: "Trail Mix",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$$",
    ingredients: "tbc",
    method: "tbc",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Damper",
    occasion: "{snack, side}",
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
    name: "Freaky Faces",
    occasion: "{snack}",
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
    name: "Ricecake Vovo",
    occasion: "{snack}",
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
    name: "Popcorn Pirates",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "# Boat1 cored apple4 cheese or bread slices4 toothpicks# Decorations 0.5 cups natural peanut butter (glue)10 pieces of popcorn (pirates)10 blueberries (cannons)",
    method:
      "Slice apple up into boats hulls,Place a toothpick into each,Puch cheese slice or bread onto toothpick,Coat top of base in peanut butter,Stick on pirates,Try different shapes and sizes,Capsize with bluberry cannons",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Chickpea Crisps",
    occasion: "{snack}",
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
    name: "Fruit Iceypoles",
    occasion: "{snack}",
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
    name: "Oatmeal Tressure Hunt",
    occasion: "{breakfast, snack}",
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
    name: "Kiwi Scoop",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients: "4 ripe kiwis",
    method:
      "Slice the top off the kiwi,Have kids scoop the goodness out with a spoon",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Raw Rainbow",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "red - tomatoes, capsicum or raspberriesorange - carrot, orange or mandarinyellow - capsicum, banana or lemongreen - zucchini, cucumber or kiwipurple - blueberries, purple grapes or plum",
    method:
      "Get your kidlets to make a rainbow using food,Chop everything up into small pieces,Serve with dipping sauce like hummus",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Popcorn",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients: "tbc",
    method:
      "put oil in pan,medium heat,add two pieces of popcorn kernals wait until pop,add remaining popcorn kernals,put lid on and heat on low until almost all popped",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },

  {
    name: "Potato Goodness",
    occasion: "{snack}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "10 potatoes,0.25 red cabbage diced,2 peeled and grated carrots,1 diced red onion,1 Tbsp canola oil,3 Tbsp tartar sauce,1 Tbsp pepitas",
    method: "Peel and steam potatoes,Mix in all other ingredients",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
];
