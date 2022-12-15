import { Box, HStack, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { useFavouritesDetailedQuery } from "../../../generated/graphql";
import graphQLClient from "../../../utility/graphql-request";
import { Card } from "../../recipe/Card";

interface FavouritesProps {}

export const Favourites: React.FC<FavouritesProps> = ({}) => {
  const { error, isSuccess, isLoading, data, refetch } =
    useFavouritesDetailedQuery(graphQLClient);

  console.log(data);

  return (
    <>
      {data?.favouriteDetailed && (
        <HStack wrap="wrap" justifyContent="center" spacing="0">
          {data.favouriteDetailed.map((fav) => {
            if (fav.recipe) {
              return (
                <Card
                  id={fav.recipe.id}
                  key={fav.recipe.id}
                  name={fav?.recipe?.name || ""}
                  bg="red"
                  occasion={fav.recipe.occasion}
                  prep={fav.recipe.prep}
                  cook={fav.recipe.cook}
                  average_rating={fav.recipe.average_rating}
                  total_votes={fav.recipe.total_votes}
                  cost={fav.recipe.cost}
                  difficulty={fav.recipe.difficulty}
                />
              );
            }
          })}
        </HStack>
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
