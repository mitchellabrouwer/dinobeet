/* eslint-disable camelcase */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { LegacyRef, MouseEvent } from "react";
import { Heading } from "../common/Heading";
import { DisplayStars } from "../review/DisplayStars";
import { HeartButton } from "../user/favourites/HeartButton";

export const Card: React.FC<any> = React.forwardRef(
  (
    {
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
    },
    ref
  ) => {
    // const src = `/images/${name.toLowerCase().replace(" ", "-")}.jpeg`;
    console.log(tags);

    const router = useRouter();

    const handleClick = (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      router.push(`./recipes/${id}`);
    };

    const recipeTags = tags?.map((tag) => tag.name).join(", ");

    return (
      <div
        className="sm:flex-[0 0 calc(100%-2%)] flex w-4 min-w-[200px] justify-center p-1 hover:cursor-pointer"
        onClick={handleClick}
        ref={ref as LegacyRef<HTMLDivElement> | undefined}
      >
        <div className="w-full max-w-md rounded-lg border bg-gray-500 shadow-lg">
          <div>
            <Image
              alt={name}
              src="/images/rice-cakes_2560.jpg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/ggAAnYBq60PPYYAAAAASUVORK5CYII="
              objectFit="cover"
              layout="responsive"
              quality={10}
              priority
            />
          </div>
          <div className="absolute top-2 right-2">
            <HeartButton recipeId={id} />
          </div>
          <div className="absolute top-2 left-2">
            <span>{cost}</span>
          </div>
          <div className="spacing-0 py-2 text-center">
            <span className="text-xs uppercase text-gray-500">
              {occasion?.toString().replace(/,/g, " |")}
            </span>
            <Heading as="h2">{name}</Heading>
            <span className="text-xs italic">{recipeTags}</span>
            <div className="flex w-full justify-between">
              <span className="flex-[50%] text-center text-sm italic md:text-xs">
                {`${prep + cook}m`}
              </span>
              <DisplayStars
                rating={Number(average_rating) || 0}
                totalVotes={Number(total_votes) || 0}
              />
              <span className="flex-[50%] text-center text-sm italic text-gray-500 md:text-xs">
                {difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
