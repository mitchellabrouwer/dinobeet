import { IconButton } from "@chakra-ui/react";
import React, { MouseEvent } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import {
  useFavouritesQuery,
  useUpdateFavouriteMutation,
} from "../../../generated/graphql";
import graphQLClient from "../../../utility/graphql-request";

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
        <IconButton
          variant="ghost"
          aria-label="Unfavourite"
          icon={<IoIosHeart size="2em" onClick={onHeartClick} />}
        />
      ) : (
        <IconButton
          aria-label="Make avourite"
          variant="ghost"
          icon={<IoIosHeartEmpty size="2em" onClick={onHeartClick} />}
        />
      )}
    </>
  );
};
