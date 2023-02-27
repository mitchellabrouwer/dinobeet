import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillPeopleFill, BsHammer } from "react-icons/bs";
import { ImCoinDollar, ImPriceTag, ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";
import { useQuery } from "react-query";
import { Heading } from "../../../components/common/Heading";
import PartyModal from "../../../components/common/PartyModal";
import { DisplayStars } from "../../../components/review/DisplayStars";
import { HeartButton } from "../../../components/user/favourites/HeartButton";
import { GetRecipes } from "../../../types/types";

async function getSingleRecipe(context) {
  const [, { id }] = context.queryKey;
  const res = await fetch(`/api/recipe?id=${id}`);
  const data = await res.json();
  return data;
}

const validUuidv4 = (argument: any) =>
  /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
    argument
  );

// allow edits if admin

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

export default function RecipePage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [isUuid, setIsUuid] = useState(true);
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

  useEffect(() => {
    if (validUuidv4(router.query.recipe)) {
      setIsUuid(true);
    }

    if (typeof router.query.recipe === "string" && isUuid) {
      setId(router.query.recipe);
    }
  }, [router.query]);

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
            <div className="absolute flex">
              <div className="ml-2 flex flex-col items-start justify-start">
                <Heading as="h2">{name}</Heading>

                <div className="mt mb-1 h-[300px] overflow-hidden py-1 px-2">
                  <DisplayStars
                    rating={data?.reviews[id]?.average || 0}
                    totalVotes={data?.reviews[id]?.count || 0}
                  />
                </div>

                <div className="">
                  <div className="flex">
                    <div className="mr-1">
                      <ImPriceTag />
                    </div>
                    <span className="text-sm italic">
                      {tags.join() || "no tags yet"}
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
              <div className="2 h-[300px] overflow-hidden">
                <HeartButton recipeId={id} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div>ingredients</div>
      <div> method</div>
      <button
        type="button"
        onClick={() => {
          setShowModal(false);
          // checkAllIngredientsAndInstructions();
          setShowModal(true);
        }}
      >
        Cooked It!
      </button>

      {showModal &&
        ingredients?.length === ingredientChecks.length &&
        method?.length === instructionChecks.length && (
          <PartyModal
            title="Congratulations"
            recipeName={name || "something yum"}
            recipeId={id}
          />
        )}
    </>
  );
}
