import { OccasionOptions } from "@prisma/client";
import { FC, MouseEvent, useState } from "react";
import { useQuery } from "react-query";
import { randomProperty } from "../../../lib/utils";
import { GetRandomRecipe } from "../../../types/types";
import { Button } from "../../common/Button";
import { Card } from "../../common/Card";
import { Spinner } from "../../common/Spinner";

const fetchRecipe = async (occasion: string) => {
  const res = await fetch(`/api/random?occasion=${occasion}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  console.log("res", res);

  const data: GetRandomRecipe = await res.json();
  console.log("data", data);

  return data;
};

export const Random: FC = () => {
  const randomOccasion = randomProperty(OccasionOptions);

  const [occasion, setOccasion] = useState<string>("breakfast", randomOccasion);

  const { isLoading, error, data, isSuccess } = useQuery<
    GetRandomRecipe,
    Error
  >(["random", { occasion }], () => fetchRecipe(occasion), { cacheTime: 0 });

  console.log(data);

  const onCategorySelect = async (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    console.log(value);

    setOccasion(value);
  };
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <div className="m-auto flex w-1/4 flex-col">
          {Object.keys(OccasionOptions).map((occ) => (
            <Button value={occ} onClick={onCategorySelect}>
              {occ.replaceAll("_", " ")}
            </Button>
          ))}
        </div>
        <div className="w-2/4 flex-grow">
          {isLoading && <Spinner size="lg" />}
          {error && <span>Something went wrong</span>}
          {!isLoading && !error && data?.recipe?.id && data?.reviews && (
            <Card
              id={data.recipe.id}
              name={data.recipe.name}
              occasion={data.recipe.occasion}
              cost={data.recipe.cost}
              difficulty={data.recipe.difficulty}
              prep={data.recipe.prep}
              cook={data.recipe.cook}
              average_rating={data.reviews[data.recipe.id]?.average}
              total_votes={data.reviews[data.recipe.id]?.count}
              tags={data.recipe.tags}
            />
          )}
          {isSuccess && !data?.recipe && !data?.reviews && (
            <span>nothing found</span>
          )}
        </div>
      </div>
    </div>
  );
};
