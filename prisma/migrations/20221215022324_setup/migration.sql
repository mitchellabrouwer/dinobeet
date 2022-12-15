-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "MeasurementOptions" AS ENUM ('tsp', 'Tbsp', 'cup', 'can', 'small', 'medium', 'large');

-- CreateEnum
CREATE TYPE "OccasionOptions" AS ENUM ('breakfast', 'lunch', 'dinner', 'treat', 'snack', 'sauce_or_rub');

-- CreateEnum
CREATE TYPE "IngredientOptions" AS ENUM ('cashews', 'walnuts', 'almonds', 'pistachios', 'flax_seeds', 'chia_seeds', 'sunflower_seeds', 'pumpkin_seeds', 'hemp_seeds', 'sesame_seeds', 'raw_buckwheat', 'firm_tofu', 'silken_token', 'tempeh', 'edamame', 'peanut', 'green_peas', 'green_beans', 'chickpeas', 'red_lentils', 'yellow_split_peas', 'green_split_peas', 'red_kidney_beans', 'black_beans', 'blackeye_peas', 'pinto_beans', 'mixed_beans', 'nutritional_yeast', 'jasmine_rice', 'basmati_rice', 'brown_rice', 'quinoa', 'quinoa_flakes', 'buckwheat', 'millet', 'popcorn', 'gf_flour', 'almond_flour', 'buckwheat_flour', 'chickpea_flour', 'corn_four', 'tapioca_flour', 'polenta', 'gf_penne', 'gf_spagetti', 'gf_bread', 'gf_bread_crumbs', 'garlic_clove', 'brown_onion', 'red_onion', 'ginger', 'spinach', 'carrot', 'broccoli', 'brussels_sprouts', 'eggplant', 'kale', 'chard', 'beetroot', 'red_cabbage', 'potato', 'sweet_potato', 'silverbeet', 'cauliflower', 'bok_choy', 'lettuce', 'tomato', 'capsicum', 'cucumber', 'celery', 'mushroom', 'chive', 'spring_onion', 'asparagu', 'mixed_vegetable', 'banana', 'strawberry', 'grape', 'apple', 'watermelon', 'blueberry', 'lemon', 'peach', 'avocado', 'pineapple', 'cherry', 'rock_mellon', 'honrydew', 'raspberry', 'pear', 'lime', 'blackberry', 'orange', 'mandarin', 'mango', 'plum', 'cocoa_powder', 'date', 'dried_apricot', 'banana_chip', 'raisin', 'saltana', 'cranberry', 'coconut_yoghurt', 'almond_milk', 'non_dairy_milk', 'soy_milk', 'pepper', 'garlic_powder', 'onion_powder', 'smoked_paprika', 'tumeric_powder', 'coriander_seeds', 'cumin_seeds', 'fenugreek_seeds', 'curry_powder', 'cloves', 'cardamon_pods', 'mustard_seeds', 'asafetida_powder', 'fennel_seeds', 'star_anise', 'sweet_paprika', 'bay_leave', 'cinnamon', 'all_spice', 'basil', 'coriander', 'dill', 'mixed_herbs', 'canola_oil', 'olive_oil', 'sesame_oil', 'vegetable_stock', 'beef_stock', 'chicken_stock', 'maple_syrup', 'brown_sugar', 'golden_syrup', 'baking_powder', 'salt', 'water', 'vegan_tartar_sauce', 'tahini', 'peanut_butter', 'marmite', 'chocolate_milk_powder', 'gf_soy_sauce');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "name" TEXT,
    "email" TEXT,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripePi" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "occasion" "OccasionOptions"[],
    "cost" TEXT NOT NULL,
    "servings" INTEGER NOT NULL,
    "prep" INTEGER NOT NULL,
    "cook" INTEGER NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MethodGroup" (
    "id" SERIAL NOT NULL,
    "recipeId" TEXT NOT NULL,
    "heading" TEXT,
    "instructions" TEXT[],

    CONSTRAINT "MethodGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngredientGroup" (
    "id" SERIAL NOT NULL,
    "recipeId" TEXT NOT NULL,
    "heading" TEXT,

    CONSTRAINT "IngredientGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngredientMeasured" (
    "id" SERIAL NOT NULL,
    "ingredientGroupId" INTEGER NOT NULL,
    "qty" TEXT NOT NULL,
    "unit" "MeasurementOptions",
    "ingredientName" "IngredientOptions" NOT NULL,
    "note" TEXT,

    CONSTRAINT "IngredientMeasured_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "name" "IngredientOptions" NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favourite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecipeToTag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_VariationRecipes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_stripePi_key" ON "User"("stripePi");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_name_key" ON "Recipe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeToTag_AB_unique" ON "_RecipeToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeToTag_B_index" ON "_RecipeToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeToUser_AB_unique" ON "_RecipeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeToUser_B_index" ON "_RecipeToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_VariationRecipes_AB_unique" ON "_VariationRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_VariationRecipes_B_index" ON "_VariationRecipes"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MethodGroup" ADD CONSTRAINT "MethodGroup_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientGroup" ADD CONSTRAINT "IngredientGroup_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientMeasured" ADD CONSTRAINT "IngredientMeasured_ingredientGroupId_fkey" FOREIGN KEY ("ingredientGroupId") REFERENCES "IngredientGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientMeasured" ADD CONSTRAINT "IngredientMeasured_ingredientName_fkey" FOREIGN KEY ("ingredientName") REFERENCES "Ingredient"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToTag" ADD CONSTRAINT "_RecipeToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToTag" ADD CONSTRAINT "_RecipeToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToUser" ADD CONSTRAINT "_RecipeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToUser" ADD CONSTRAINT "_RecipeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VariationRecipes" ADD CONSTRAINT "_VariationRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VariationRecipes" ADD CONSTRAINT "_VariationRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
