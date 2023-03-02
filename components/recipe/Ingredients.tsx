import { FC } from "react";
import { Heading } from "../common/Heading";

interface IngredientsProps {
  ingredients: any[];
}

export const Ingredients: FC<IngredientsProps> = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <div className="ml-3">
      {ingredients?.map((group, y) => (
        <>
          {group.heading && <Heading as="h3">{group.heading}</Heading>}
          <ul>
            {group.list.map((ingredient, x) => (
              <li>
                <input
                  id={`ingredient ${y} ${x}`}
                  type="checkbox"
                  value={`${y} ${x}`}
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                ></input>
                <label
                  htmlFor={`ingredient ${y} ${x}`}
                  className="ml-2 w-full py-3 text-sm font-medium text-gray-900"
                >
                  {`${ingredient.qty} ${
                    ingredient.unit
                  } ${ingredient.ingredientName.replace("_", " ")}`}
                </label>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};
