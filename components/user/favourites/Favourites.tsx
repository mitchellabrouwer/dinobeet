import React from "react";
import { useQuery } from "react-query";
import { GetFavourites } from "../../../types/types";
import { Card } from "../../common/Card";

interface FavouritesProps {}

const fetchRecipes = async () => {
  const res = await fetch("/api/favourite");
  const data: GetFavourites = await res.json();
  return data;
};

export const Favourites: React.FC<FavouritesProps> = () => {
  const { error, isSuccess, isLoading, data, refetch } = useQuery(
    "favourite",
    fetchRecipes
  );

  return (
    <div className="mt-16 p-2">
      {data && (
        <div className="space-1 grid gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {isSuccess &&
            data?.favourites.map((favourite) => (
              <Card
                id={favourite.recipe.id}
                key={favourite.recipe.id}
                name={favourite?.recipe?.name || ""}
                bg="red"
                occasion={favourite.recipe.occasion}
                prep={favourite.recipe.prep}
                cook={favourite.recipe.cook}
                average_rating={data.reviews[favourite.id]?.average || 0}
                total_votes={data.reviews[favourite.id]?.count || 0}
                cost={favourite.recipe.cost}
                difficulty={favourite.recipe.difficulty}
                tags={favourite.recipe.tags}
              />
            ))}
        </div>
      )}
      <div>{error && "error"}</div>
    </div>
  );
};
