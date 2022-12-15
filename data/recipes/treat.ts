import { Prisma } from "@prisma/client";

export const treat: Prisma.RecipeCreateInput[] = [
  {
    name: "Almond Coconut Slice",
    occasion: "{treat}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "# Base,1 cup almond meal,1 cup coconut flour,3 Tbsp coconut oil,2 Tbsp maple syrup,# Top,0.5 block of chocolate",
    method:
      "Blend base ingredients,Scoop into patty tins and press down,Place chocolate into a plastic container,Carefully hold container over steam from boiling water,Mix with spoon until chocolate has melted,Pour melted chocolate into patty tins,Place in freezer",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Coconut Oat Slice",
    occasion: "{treat}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "1 cup oats,1 cup GF flour,1 cup shredded coconup,1 Tbsp agar,1 Tbsp maple syrup,1 tsp baking powder,2 Tbsp melted coconut oil,1 tsp vanilla extract,0.5 flax egg,0.25 tsp salt",
    method:
      "Preheat oven to 180°C,Blend all ingredients in food processor,Push down into lined baking tray,Bake for ~20mins",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
  {
    name: "Anzac Cookies",
    occasion: "{treat}",
    difficulty: "easy",
    cost: "$",
    ingredients:
      "1 cup flour,1 cup rolled oats,0.5 cup coconut,0.5 cup non dairy butter,2 Tbsp golden syrup / maple syrup,1 tsp bakind powder",
    method:
      "Preheat oven to 180°C,Blend all ingredients in food processor,Roll into balls and flatten into cookies,Bake for ~15mins",
    servings: 4,
    prep: 10,
    cook: 20,
    notes: "",
  },
];
