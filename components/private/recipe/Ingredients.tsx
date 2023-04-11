import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Heading } from "../../common/Heading";

interface IngredientsProps {
  ingredients: any[];
}

export const Ingredients: FC<IngredientsProps> = ({ ingredients }) => {
  const router = useRouter();

  return (
    <div className="ml-3">
      {ingredients?.map((group, y) => (
        <>
          {group.heading && <Heading as="h3">{group.heading}</Heading>}
          <ul>
            {group.list.map((ingredient, x) => {
              const simpleIngredient = `${ingredient.qty} ${
                ingredient.unit
              } ${ingredient?.ingredientName?.replace("_", " ")}`;
              const complexIngredient = `${ingredient.qty} ${
                ingredient.unit
              } ${ingredient?.recipe?.name.toLowerCase()}`;
              return (
                <li className="flex cursor-pointer p-1">
                  <input
                    id={`ingredient ${y} ${x}`}
                    type="checkbox"
                    value={`${y} ${x}`}
                    className="h-5 w-5 cursor-pointer rounded border-gray-300 bg-gray-100 text-green-600 accent-green-500 focus:ring-2 focus:ring-green-500 dark:ring-offset-gray-700 dark:focus:ring-green-600 dark:focus:ring-offset-gray-700"
                  ></input>
                  <label
                    htmlFor={`ingredient ${y} ${x}`}
                    className="strikethrough cursor-pointer pl-2 text-sm font-medium text-gray-900"
                  >
                    {ingredient?.recipe?.name ? (
                      <Link
                        href={`${router.basePath}/dashboard/recipes/${ingredient?.recipe?.id}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-red-400 underline"
                      >
                        {complexIngredient}
                      </Link>
                    ) : (
                      simpleIngredient
                    )}
                  </label>
                </li>
              );
            })}
          </ul>
        </>
      ))}
    </div>
  );
};
