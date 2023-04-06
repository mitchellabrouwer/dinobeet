import { FC } from "react";
import { Heading } from "../../common/Heading";

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
              <li className="flex p-1">
                <input
                  id={`ingredient ${y} ${x}`}
                  type="checkbox"
                  value={`${y} ${x}`}
                  className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-green-600 accent-green-500 focus:ring-2 focus:ring-green-500 dark:ring-offset-gray-700 dark:focus:ring-green-600 dark:focus:ring-offset-gray-700"
                ></input>
                <label
                  htmlFor={`ingredient ${y} ${x}`}
                  className="strikethrough pl-2 text-sm font-medium text-gray-900"
                >
                  {`${ingredient.qty} ${
                    ingredient.unit
                  } ${ingredient?.ingredientName?.replace("_", " ")}`}
                </label>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};
