const ingredientList = {
  protein: [
    { nut: ["cashews", "walnuts", "almonds", "pistachios", "peanuts"] },
    {
      seeds: [
        "flax seeds ground",
        "chia seeds",
        "sunflower seeds",
        "pumpkin seeds",
        "hemp seeds",
        "sesame seeds",
        "raw buckwheat",
      ],
    },
    {
      legumes: [
        "firm tofu",
        "silken token",
        "tempeh",
        "edamame",
        "peanut",
        "green peas",
        "green beans",
        {
          pulses: [
            "chickpeas",
            "red lentils",
            "yellow split peas",
            "green split peas",
            "red kidney beans",
            "black beans",
            "blackeye peas",
            "pinto beans",
            "mixed beans",
          ],
        },
      ],
    },
    {
      yeast: "nutritional yeast",
    },
  ],
  grain: [
    {
      whole: [
        "jasmine rice",
        "basmati rice",
        "brown rice",
        "quinoa",
        "quinoa flakes",
        "buckwheat",
        "millet",
        "popcorn",
      ],
      flour: [
        "gf flour",
        "almond flour",
        "buckwheat flour",
        "chickpea flour",
        "corn four",
        "tapioca flour",
        "polenta",
      ],
      pasta: ["gf penne", "gf spagetti"],
      bread: ["gf bread", "gf bread crumbs"],
    },
  ],
  vegetables: [
    "garlic clove",
    "brown onion",
    "red onion",
    "ginger",
    "spinach",
    "carrot",
    "broccoli",
    "brussels sprouts",
    "eggplant",
    "kale",
    "chard",
    "beetroot",
    "red cabbage",
    "potato",
    "sweet potato",
    "pumpkin",
    "parsnip",
    "silverbeet",
    "cauliflower",
    "bok choy",
    "lettuce",
    "tomato",
    "capsicum",
    "cucumber",
    "celery",
    "mushroom",
    "chive",
    "spring onion",
    "asparagus",
    "mixed vegetable",
    "corn",
    "leek",
    "zucchini",
  ],
  fruit: {
    fresh: [
      "banana",
      "strawberry",
      "grape",
      "apple",
      "watermelon",
      "blueberry",
      "lemon",
      "peach",
      "avocado",
      "pineapple",
      "cherry",
      "rock mellon",
      "honeydew",
      "raspberry",
      "pear",
      "lime",
      "blackberry",
      "orange",
      "mandarin",
      "mango",
      "plum",
    ],
    dried: [
      "cocoa powder",
      "dates",
      "dried apricots",
      "banana chips",
      "raisins",
      "saltanas",
      "cranberries",
    ],
  },
  dairyish: [
    "coconut yoghurt",
    "almond milk",
    "non dairy milk",
    "soy milk",
    "non dairy cheese",
  ],
  spices: [
    // rubs
    "pepper",
    "red chilli",
    "garlic powder",
    "onion powder",
    "smoked paprika",
    // curries
    "tumeric powder", // yellow colour
    "coriander seeds", // base spice
    "cumin seeds", // distinct flavour strong
    "fenugreek seeds",
    "curry powder", // Keens
    "cloves",
    "cardamon pods",
    "mustard seeds",
    "asafetida powder",

    "fennel seeds",
    "star anise",
    // soups
    "sweet paprika",
    "bay leave",
    // sweets
    "cinnamon",
    "all spice",
  ],
  herbs: ["basil", "coriander", "dill", "lemongrass", "mixed herbs"],
  oils: ["canola oil", "olive oil", "sesame_oil"],
  stock: ["vegetable stock", "beef stock", "chicken stock"],
  sweeteners: ["maple syrup", "brown sugar", "golden syrup"],
  baking: ["baking powder"],
  salt: "salt",
  water: "water",
  supermarket: [
    "vegan tartar sauce",
    "tahini",
    "peanut butter",
    "marmite",
    "chocolate milk powder",
    "gf soy sauce",
    "gf pastry",
    "gf weet bix",
    "coconut_cream",
    "meat free chicken",
    "dijon_mustard",
    "nori_paper",
  ],
};

const flatten = (deepObject) => {
  const ingredients = [];

  (function iterate(obj) {
    Object.entries(obj).forEach(([, value]) => {
      if (typeof value === "string") {
        const underscoredName = value.replace(/ /g, "_"); // to allow enum safety
        ingredients.push({ name: underscoredName });
        console.log(underscoredName);
      }
      if (typeof value === "object" && value !== null) {
        iterate(value);
      }
    });
  })(deepObject);

  return ingredients;
};

// console.log(flatten(ingredientList));

export const ingredients = flatten(ingredientList);
