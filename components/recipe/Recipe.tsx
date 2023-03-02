import Image from "next/image";
import router from "next/router";
import React, { FC, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillPeopleFill, BsHammer } from "react-icons/bs";
import { ImCoinDollar, ImPriceTag, ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";
import { useQuery } from "react-query";
import { GetRecipes } from "../../types/types";
import { Button } from "../common/Button";
import { Heading } from "../common/Heading";
import { DisplayStars } from "../review/DisplayStars";
import { HeartButton } from "../user/favourites/HeartButton";
import { Ingredients } from "./Ingredients";
import { Method } from "./Method";

interface RecipeProps {
  id: string;
}

async function getSingleRecipe(context) {
  const [, { id }] = context.queryKey;
  const res = await fetch(`/api/recipe?id=${id}`);
  const data = await res.json();
  return data;
}

const nutritionExample = {
  Nutrition: {
    protein: 10,
    iron: 3.5,
    b12: 1,
    omega3: 0.16,
    calcium: 300,
    zinc: 3,
  },
};

export const Recipe: FC<RecipeProps> = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [ingredientChecks, setIngredientChecks] = React.useState<number[]>([]);
  const [instructionChecks, setInstructionChecks] = React.useState<number[]>(
    []
  );

  const { isLoading, error, data } = useQuery<GetRecipes, Error>(
    ["singleRecipe", { id: router.query.recipe }],
    getSingleRecipe
  );
  console.log("data", data);

  const {
    name,
    occasion,
    cost,
    difficulty,
    cook,
    prep,
    servings,
    ingredients,
    method,
    tags,
  } = data?.recipe || {};

  // const checkAllIngredientsAndInstructions = () => {
  //   setIngredientChecks([...Array(ingredients?.length).keys()].map((x) => ++x));
  //   setInstructionChecks(
  //     // eslint-disable-next-line no-return-assign
  //     [...Array(method?.length).keys()].map((x) => (x += 1))
  //   );
  // };

  // const onIngredientClick = (event: any) => {
  //   const index = Number(event.target.value);

  //   if (ingredientChecks.includes(index)) {
  //     setIngredientChecks(
  //       ingredientChecks.filter((included) => included !== index)
  //     );
  //   } else {
  //     setIngredientChecks([...ingredientChecks, index]);
  //   }
  // };
  // const onInstructionClick = (event: any) => {
  //   const index = Number(event.target.value);

  //   if (instructionChecks.includes(index)) {
  //     setInstructionChecks(
  //       instructionChecks.filter((included) => included !== index)
  //     );
  //   } else {
  //     setInstructionChecks([...instructionChecks, index]);
  //   }
  // };

  return (
    <>
      {!isLoading && data && (
        <div>
          <div className="relative h-[300px] overflow-hidden">
            <Image
              alt={name}
              src="/images/rice_cakes.jpg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/ggAAnYBq60PPYYAAAAASUVORK5CYII="
              fill
              style={{
                objectFit: "cover",
              }}
              quality={10}
              priority
            />
            <div className="absolute mt-8 flex w-full">
              <div className="ml-2 mt-2 flex flex-col items-start justify-start">
                <Heading as="h2">{name}</Heading>

                <div className="mt mb-1 h-[300px] overflow-hidden py-1 px-2">
                  <DisplayStars
                    rating={data?.reviews[id]?.average || 0}
                    totalVotes={data?.reviews[id]?.count || 0}
                  />
                </div>

                <div className="absolute mt-24 ml-2 md:mt-28">
                  <div className="flex">
                    <div className="mr-1">
                      <ImPriceTag />
                    </div>
                    <span className="text-sm italic">
                      {tags?.join() || "no tags yet"}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="mr-1">
                      <ImSpoonKnife />
                    </div>
                    <span className="text-sm italic">
                      {occasion?.toString().replace(/,/g, " |")}
                    </span>
                  </div>
                  <div className="flex">
                    <BsHammer />
                    <span className="text-sm italic">{difficulty}</span>
                  </div>
                  <div className="flex">
                    <RiKnifeFill />
                    <span className="text-sm italic">{`${prep}m prep`}</span>
                  </div>
                  <div className="flex">
                    <AiFillClockCircle />
                    <span className="text-sm italic">{`${cook}m cook`}</span>
                  </div>
                  <div className="flex">
                    <BsFillPeopleFill />
                    <span className="text-sm italic">{`${servings} servings`}</span>
                  </div>
                  <div className="flex">
                    <ImCoinDollar />
                    <span className="text-sm italic">{cost}</span>
                  </div>
                </div>
              </div>
              <div className="absolute right-4 top-4 h-[300px] overflow-hidden">
                <HeartButton recipeId={id} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="justify-evenly sm:flex">
        <div>
          <Heading as="h2">Ingredients</Heading>
          <Ingredients ingredients={ingredients} />
        </div>
        <div>
          <Heading as="h2">Method</Heading>
          <Method method={method} />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button
          onClick={() => {
            setShowModal(false);
            // checkAllIngredientsAndInstructions();
            setShowModal(true);
          }}
        >
          Cooked It!
        </Button>
      </div>

      {/* {showModal &&
        ingredients?.length === ingredientChecks.length &&
        method?.length === instructionChecks.length && (
          <PartyModal
            title="Congratulations"
            recipeName={name || "something yum"}
            recipeId={id}
          />
        )} */}
    </>
  );
};
