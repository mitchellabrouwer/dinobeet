/* eslint-disable camelcase */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import { IoIosHeart } from "react-icons/io";
import { DisplayStars } from "../review/DisplayStars";
import { Heading } from "./Heading";

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
      <div className="" onClick={handleClick}>
        <div className="relative w-full rounded-lg border bg-gray-500 shadow-lg">
          <div className="relative block h-[400px] w-full">
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
            {/* <HeartButton recipeId={id} /> */}
            <IoIosHeart size="2em" />
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
