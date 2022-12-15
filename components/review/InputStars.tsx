/* eslint-disable no-nested-ternary */
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Heading } from "../common/Heading";

interface InputStarsProps {
  initialStars?: boolean[];
  setRating: Dispatch<SetStateAction<number>>;
}

export const InputStars: React.FC<InputStarsProps> = ({
  initialStars = [false, false, false, false, false],
  setRating,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [stars, setStars] = useState(initialStars);
  const [hover, setHover] = useState([false, false, false, false, false]);

  useEffect(() => {
    setRating(stars.filter(Boolean).length);
  }, [setRating, stars]);

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
    <>
      <Heading as="h5">Star rating</Heading>
      <div className="flex">
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
              <BsStarFill size="24px" />
            ) : !isHovering && stars[i] ? (
              <BsStarFill size="24px" />
            ) : (
              <BsStar size="24px" />
            )}
          </button>
        ))}
      </div>
    </>
  );
};
