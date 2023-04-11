import Image from "next/image";
import router from "next/router";
import { FC } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillPeopleFill, BsHammer } from "react-icons/bs";
import { ImCoinDollar, ImPriceTag, ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";
import { useQuery } from "react-query";
import { GetRecipes } from "../../../types/types";
import { Button } from "../../common/Button";
import { Heading } from "../../common/Heading";
import PartyModal from "../../common/PartyModal";
import useDisclosure from "../../hooks/useDisclosure";
import { DisplayStars } from "../review/DisplayStars";
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
  const { ref, isOpen, setIsOpen } = useDisclosure(false);

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

  return (
    <>
      {!isLoading && data && (
        <div className="relative">
          <div className="h-[300px] overflow-hidden">
            <Image
              alt={name}
              src="/images/rice_cakes.jpg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/ggAAnYBq60PPYYAAAAASUVORK5CYII="
              fill
              style={{ objectFit: "cover" }}
              quality={10}
              priority
            />
            <div className="absolute bottom-0 left-2 flex">
              <div className="flex flex-col items-start justify-start">
                <Heading
                  as="h2"
                  styles="bg-black bg-opacity-80 rounded-t-lg px-5"
                >
                  {name}
                  <div className="mt-1 ml-1">
                    <DisplayStars
                      rating={data?.reviews[id]?.average || 0}
                      totalVotes={data?.reviews[id]?.count || 0}
                    />
                  </div>
                </Heading>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-3 ml-7 md:flex md:space-x-3">
        <div className="flex space-x-3">
          <div className="flex">
            <div className="mr-1">
              <ImPriceTag />
            </div>
            <span className="text-sm italic">
              {tags?.join().replace(/,/g, " |").replace(/_/g, " ") ||
                "no tags yet"}
            </span>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="flex">
            <div className="mr-1">
              <ImSpoonKnife />
            </div>
            <span className="text-sm italic">
              {occasion?.toString().replace(/,/g, " |").replace(/_/g, " ")}
            </span>
          </div>
          <div className="flex">
            <BsHammer />
            <span className="text-sm italic">{difficulty}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="flex">
            <RiKnifeFill />
            <span className="text-sm italic">{`${prep}m prep`}</span>
          </div>
          <div className="flex">
            <AiFillClockCircle />
            <span className="text-sm italic">{`${cook}m cook`}</span>
          </div>
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
          accessibilityLabel="I cooked the recipe"
          variant="solid"
          colour="primary"
          onClick={() => setIsOpen(true)}
        >
          Cooked It!
        </Button>
      </div>

      {isOpen && (
        <PartyModal
          ref={ref}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Congratulations"
          recipeName={name || "something yum"}
          recipeId={id}
        />
      )}
    </>
  );
};
