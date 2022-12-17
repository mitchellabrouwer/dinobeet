import React, { MouseEvent } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import {
  useFavouritesQuery,
  useUpdateFavouriteMutation,
} from "../../../generated/graphql";
import graphQLClient from "../../../utility/graphql-request";
import { Button } from "../../common/Button";

interface HeartButtonProps {
  recipeId: string;
}

export const HeartButton: React.FC<HeartButtonProps> = ({ recipeId }) => {
  const { mutateAsync } = useUpdateFavouriteMutation(graphQLClient);

  const { data: hearts, refetch } = useFavouritesQuery(graphQLClient);

  const fill = !!hearts?.favourite?.includes(recipeId);

  const onHeartClick = async (event: MouseEvent<SVGElement>) => {
    event.stopPropagation();
    await mutateAsync({ recipeId });
    refetch();
  };

  return (
    <>
      {fill ? (
        <Button aria-label="Unfavourite" onClick={onHeartClick}>
          <IoIosHeart size="2em" />
        </Button>
      ) : (
        <Button aria-label="Favourite" onClick={onHeartClick}>
          <IoIosHeartEmpty size="2em" />
        </Button>
      )}
    </>
  );
};
