import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { STARS } from "../../../lib/constants";

interface DisplayStarsProps {
  rating: number | undefined;
  totalVotes: number | undefined;
}

export const DisplayStars: React.FC<DisplayStarsProps> = ({
  rating = 0,
  totalVotes = 0,
}) => {
  const [floor, ceil] = [Math.floor(rating), Math.ceil(rating)];
  const decimal = rating - floor;

  const stars = [...Array(STARS)].map((_, index) => {
    const count = index + 1;
    if (count <= floor) {
      return <BsStarFill size="18" key={index} />;
    }
    if (decimal >= 0.5 && count <= ceil) {
      return <BsStarHalf size="18" key={index} />;
    }
    return <BsStar size="18" key={index} />;
  });

  return (
    <div>
      {rating ? (
        <div className="flex">
          {stars}
          <span className="p-1 text-xs">{`(${totalVotes})`}</span>
        </div>
      ) : (
        <div className="flex">
          <BsStar size="18" color="lightGray" />
          <BsStar size="18" color="lightGray" />
          <BsStar size="18" color="lightGray" />
          <BsStar size="18" color="lightGray" />
          <BsStar size="18" color="lightGray" />
          <span className="p-1 text-xs">{`(${totalVotes})`}</span>
        </div>
      )}
    </div>
  );
};
