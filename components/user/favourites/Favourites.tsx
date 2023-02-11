import React from "react";
import { useQuery } from "react-query";
import { GetFavourites } from "../../../types/types";
import { Card } from "../../common/Card";

interface FavouritesProps {}

const fetchRecipes = async () => {
  const res = await fetch("/api/favourites");
  const data: GetFavourites = await res.json();
  return data;
};

export const Favourites: React.FC<FavouritesProps> = () => {
  const { error, isSuccess, isLoading, data, refetch } = useQuery(
    "favourites",
    fetchRecipes
  );

  console.log(data);

  return (
    <>
      {data && (
        <div className="flex">
          {data.map((favourite) => {
            if (favourite.recipe) {
              return (
                <Card
                  id={favourite.recipe.id}
                  key={favourite.recipe.id}
                  name={favourite?.recipe?.name || ""}
                  bg="red"
                  occasion={favourite.recipe.occasion}
                  prep={favourite.recipe.prep}
                  cook={favourite.recipe.cook}
                  average_rating={favourite.recipe.averageRating}
                  total_votes={favourite.recipe.total_votes}
                  cost={favourite.recipe.cost}
                  difficulty={favourite.recipe.difficulty}
                />
              );
            }
          })}
        </div>
      )}
      {isSuccess &&
        !isLoading &&
        data?.favouriteDetailed &&
        data.favouriteDetailed.length === 0 && (
          <Text textAlign="center">
            You have no favourites at the moment, press the heart button on a
            recipe to favourite
          </Text>
        )}
      {isLoading && (
        <Box textAlign="center" mt="3">
          <Spinner size="lg" />
        </Box>
      )}
      {error && <Text>error</Text>}
    </>
  );
};
