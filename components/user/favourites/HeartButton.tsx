import React, { MouseEvent, useEffect } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { Button } from "../../common/Button";

interface HeartButtonProps {
  recipeId: string;
}

export const HeartButton: React.FC<HeartButtonProps> = ({ recipeId }) => {
  // get list of favourites
  // update favourite if clicked on

  // const { mutateAsync } = useUpdateFavouriteMutation(graphQLClient);

  useEffect(() => {}, []);

  const fill = !!hearts?.favourite?.includes(recipeId);

  const onHeartClick = async (event: MouseEvent<SVGElement>) => {
    event.stopPropagation();
    await mutateAsync({ recipeId });
    refetch();
  };

  return (
    <div>
      {fill ? (
        <Button aria-label="Unfavourite" onClick={onHeartClick}>
          <IoIosHeart size="2em" />
        </Button>
      ) : (
        <Button aria-label="Favourite" onClick={onHeartClick}>
          <IoIosHeartEmpty size="2em" />
        </Button>
      )}
    </div>
  );
};
