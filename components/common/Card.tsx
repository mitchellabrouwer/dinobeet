/* eslint-disable camelcase */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import { DisplayStars } from "../review/DisplayStars";
import { HeartButton } from "../user/favourites/HeartButton";
import { Heading } from "./Heading";

export const Card: React.FC<any> = ({
  id,
  name,
  occasion,
  cost,
  difficulty,
  prep,
  cook,
  average_rating,
  total_votes,
  tags,
}) => {
  // const src = `/images/${name.toLowerCase().replace(" ", "-")}.jpeg`;
  // console.log(tags);

  // enum unable to be stored as symbols
  const costSymbols = {
    really_cheap: "¢",
    cheap: "$",
    ok: "$$",
    expensive: "$$$",
    really_expensive: "$$$$",
  };

  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.push(`./recipes/${id}`);
  };

  const recipeTags = tags?.map((tag) => tag).join(", ");

  return (
    <div className="" onClick={handleClick}>
      <div className="relative w-full rounded-lg border shadow-lg">
        <div className="relative block h-[400px]">
          <Image
            alt={name}
            src="/images/rice_cakes.jpg"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/ggAAnYBq60PPYYAAAAASUVORK5CYII="
            fill
            style={{
              objectFit: "cover",
            }}
            quality={10}
            priority
          />
        </div>

        <div className="absolute top-2 right-2">
          <HeartButton recipeId={id} />
        </div>

        <div className="absolute top-2 left-2">
          <span className="text-2xl font-light">{costSymbols[cost]}</span>
        </div>

        <div className="spacing-0 py-2 text-center">
          <span className="text-xs uppercase text-gray-500">
            {occasion?.toString().replace(/_/g, " ").replace(/,/g, " | ")}
          </span>
          <Heading as="h2" styles="py-1">
            {name}
          </Heading>
          <span className="text-xs italic">
            {recipeTags.replace(/_/g, " ")}
          </span>
          <div className="flex w-full justify-between">
            <span className="flex-[50%] pl-2 text-left text-sm italic md:text-xs">
              {`${prep + cook}m`}
            </span>
            <DisplayStars
              rating={Number(average_rating) || 0}
              totalVotes={Number(total_votes) || 0}
            />
            <span className="flex-[50%] pr-2 text-right text-sm italic text-gray-500 md:text-xs">
              {difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
