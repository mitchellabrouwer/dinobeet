import { FC } from "react";
import { Heading } from "../common/Heading";

interface MethodProps {
  method: any[];
}

export const Method: FC<MethodProps> = ({ method }) => {
  console.log(method);

  return (
    <div className="ml-3">
      {method?.map((group, y) => (
        <>
          {group.heading && <Heading as="h3">{group.heading}</Heading>}
          <ul>
            {group.instructions.map((instruction, x) => (
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
                  {instruction}
                </label>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};
