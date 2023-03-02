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
      const res = await fetch(`/api/favourite`);
      const data = await res.json();

      console.log(data);

      if (data && data?.favourites.length > 0) {
        setFavourites(data?.favourites.map((favourite) => favourite.recipeId));
      } else {
        setFavourites([]);
      }
    };

    getFavourite();
  }, []);

  const onHeartClick = async (event) => {
    event.stopPropagation();

    const res = await fetch("/api/favourite", {
      body: JSON.stringify({
        recipeId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await res.json();

    if (data?.favourites.length > 0) {
      setFavourites(data.favourites.map((favourite) => favourite.recipeId));
    } else {
      setFavourites([]);
    }
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
          <IoIosHeart size="2em" fill="#C51104" />
        </button>
      ) : (
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Favourite"
          onClick={onHeartClick}
        >
          <IoIosHeartEmpty size="2em" color="#C51104" />
        </button>
      )}
    </div>
  );
};
