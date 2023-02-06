import React, { useEffect, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

interface HeartButtonProps {
  recipeId: string;
}

export const HeartButton: React.FC<HeartButtonProps> = ({ recipeId }) => {
  // get list of favourites
  // update favourite if clicked on

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const getFavourite = async () => {
      const res = await fetch(`/api/favourites`);
      const data = await res.json();

      setFavourites(data.favourites.map((favourite) => favourite.recipeId));
    };

    getFavourite();
  }, []);

  const onHeartClick = async (event) => {
    event.stopPropagation();

    const res = await fetch("/api/favourites", {
      body: JSON.stringify({
        recipeId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();

    setFavourites(data.favourites.map((favourite) => favourite.recipeId));
    console.log("data", data);
    console.log("click");
    // await mutateAsync({ recipeId });
    // refetch();
  };

  return (
    <div>
      {favourites.includes(recipeId) ? (
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Unfavourite"
          onClick={onHeartClick}
        >
          <IoIosHeart size="2em" />
        </button>
      ) : (
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Favourite"
          onClick={onHeartClick}
        >
          <IoIosHeartEmpty size="2em" />
        </button>
      )}
    </div>
  );
};
