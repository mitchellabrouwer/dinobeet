/* eslint-disable no-nested-ternary */
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { STARS } from "../../lib/constants";
import { Heading } from "../common/Heading";

interface InputStarsProps {
  initialStars?: number;
  setRating: Dispatch<SetStateAction<number>>;
}

function toBooleanArray(number: number) {
  return [...Array(STARS)].map((_, index) => index + 1 <= number);
}

export const InputStars: React.FC<InputStarsProps> = ({
  initialStars = 0,
  setRating,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [stars, setStars] = useState<boolean[]>(toBooleanArray(initialStars));
  const [hover, setHover] = useState(toBooleanArray(0));

  useEffect(() => {
    setRating(stars.filter(Boolean).length);
  }, [setRating, stars]);

  useEffect(() => {
    setStars(toBooleanArray(initialStars));
  }, [initialStars]);

  const onMouseHover = (event: MouseEvent<HTMLButtonElement>) => {
    const value = Number(event.currentTarget.value) - 1;
    setIsHovering(true);
    setHover(hover.map((_, index) => index <= value));
  };

  const onMouseExit = () => {
    setIsHovering(false);
  };

  const onStarClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const value = Number(event.currentTarget.value) - 1;
    setStars(stars.map((_, index) => index <= value));
  };

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="m-auto mb-2">
        <Heading as="h3">Star rating</Heading>
      </div>
      <div className="flex w-full justify-center">
        {stars.map((_, i) => (
          <button
            key={i}
            aria-label={`stars of ${i + 1}`}
            value={i + 1}
            type="button"
            onMouseEnter={onMouseHover}
            onMouseLeave={onMouseExit}
            onClick={onStarClick}
          >
            {isHovering && hover[i] ? (
              <BsStarFill data-cy="star-fill-input" size="24px" />
            ) : !isHovering && stars[i] ? (
              <BsStarFill data-cy="star-fill-input" size="24px" />
            ) : (
              <BsStar data-cy="star-empty-input" size="24px" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
