import { ComponentType, FC, SVGProps } from "react";

import {
  BiBookOpen,
  BiGame,
  BiHeartCircle,
  BiRun,
  BiWinkTongue,
  BiWorld,
} from "react-icons/bi";

interface BenefitsListProps {
  name: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  reference?: string;
  superscript?: number;
}

const benefits: BenefitsListProps[] = [
  {
    name: "Healthy",
    description:
      "Nutrient-dense and packed with fiber, healthy fats, protein, vitamins, and minerals. Research suggests that the diet can improve heart health, protect against cancer, and lower the risk of type 2 diabetes.",
    icon: BiRun,
    reference:
      "https://www.medicalnewstoday.com/articles/149636#_noHeaderPrefixedContent",
    superscript: 1,
  },
  {
    name: "Delicious",
    description: `Freshly prepared, homemade and getting creative is the secret to making vegan and gluten free food taste great. You can still easily cook kid favourites like parma or bolognaise without compromising on taste`,
    icon: BiWinkTongue,
  },
  {
    name: "Fun",
    description:
      "Recipes carefully chosen to be kid friendly. We also include tips to involve your children in cooking as it so wonderful opportunity to bond with your kids",
    icon: BiGame,
  },
  {
    name: "Kind",
    description:
      "Being vegan and saves approximately 30 animals per day, thats over 25,000 over 70 year lifespan ",
    icon: BiHeartCircle,
    reference: "https://vegancalculator.com/",
    superscript: 2,
  },
  {
    name: "Environment",
    description:
      "“A vegan diet is probably the single biggest way to reduce your impact on planet Earth, not just greenhouse gases, but global acidification, eutrophication, land use and water use,” Joseph Poore, at the University of Oxford, UK,",
    icon: BiWorld,
    reference: "https://www.science.org/doi/10.1126/science.aaq0216",
    superscript: 3,
  },
  {
    name: "Safe",
    description:
      "Includes all nutrients required by vegans. We discuss in detail what nutrients we need and where to get them from. Reviewed by a qualified dietition",
    icon: BiBookOpen,
    reference: "https://www.healthline.com/nutrition/7-supplements-for-vegans",
    superscript: 4,
  },
];

interface BenefitsProps {}

export const Benefits: FC<BenefitsProps> = () => (
  <div className="py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base font-semibold uppercase text-gray-400">
          Everything is vegan and gluten free
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
          Making it easy to cook vegan and gluten free
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          There are so many great reasons to move to a plant based life.
        </p>
        <p className="max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Stop googling, pressing jump to recipe and being bombarded by
          advertising!
        </p>
      </div>

      <dl className="mt-5 space-y-2 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
        {benefits.map((feature) => (
          <div
            key={feature.name}
            className="flex rounded-lg bg-slate-400 bg-opacity-25 px-5 py-2"
          >
            <div className="mt-3 flex h-10 w-12 shrink-0 basis-10 items-center justify-center rounded-md bg-teal-500 text-white">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="p-2">
              <dt className="mt-3 text-xl font-medium text-gray-900">
                {feature.name}
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}{" "}
                {feature.reference && (
                  <a href={feature.reference}>
                    <sup>{feature.superscript}</sup>
                  </a>
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  </div>
);
