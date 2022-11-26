import Image from "next/image";
import { FC } from "react";

interface FeaturesProps {}

const features = {
  easy: {
    image: "/images/dinobeet_kettlebell.svg",
    examples: [
      {
        name: "Easy search",
        description:
          "Find what you need fast. Search by ingredient, filter by meal type, occasion",
      },
      {
        name: "Checkboxs",
        description: "Super simple steps with checkboxes",
      },
      {
        name: "Save favourites",
        description: "Easily access what you like to cook",
      },
    ],
  },
  convenient: {
    image: "/images/dinobeet_meditation.svg",
    examples: [
      {
        name: "Meal plans",
        description: "Super simple steps with checkboxes",
        category: "Convenient",
      },
      {
        name: "Random meal",
        description: "Pick a time of day and get a random meal",
        category: "Convenient",
      },
    ],
  },
  fun: {
    image: "/images/dinobeet_skate.svg",
    examples: [
      {
        name: "Save favourites",
        description: "Easily access what you like to cook",
        category: "Fun",
      },
      {
        name: "Meal plans",
        description: "Super simple steps with checkboxes",
        category: "Fun",
      },
    ],
  },
};

export const Features: FC<FeaturesProps> = () => (
  <div
    id="features"
    className="mt-5 bg-dino-red-500 pt-10 pb-10 shadow-xl md:rounded-lg lg:rounded-br-3xl"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-2 text-3xl leading-8 tracking-tight text-dino-red-800 sm:text-4xl">
          What you get...
        </h2>
        <p className="mb-4 max-w-2xl p-1 text-xl text-gray-100 lg:mx-auto">
          We constantly add more features here to make cooking easier
        </p>
        <div className="grid gap-x-8 gap-y-3 text-left md:grid-cols-3 md:text-center">
          {Object.keys(features).map((category) => (
            <div
              className="rounded-xl bg-neutral-100 py-3 px-4 text-center"
              key={category}
            >
              <Image
                className="m-auto max-w-sm p-2"
                src={features[category].image}
                width={200}
                height={200}
                alt="logo"
              />
              <h3 className="p-2 text-xs uppercase text-gray-400">
                {category}
              </h3>

              <div className="rounded-lg bg-opacity-40 p-2">
                {features[category].examples.map((example) => (
                  <div key={example.description}>
                    <h4 className="font-medium">{example.name}</h4>
                    <p className="text-xs text-gray-500">
                      {example.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
