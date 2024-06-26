import { FC } from "react";
import { Heading } from "../../common/Heading";

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
              <li className="flex p-1">
                <input
                  id={`method ${y} ${x}`}
                  type="checkbox"
                  value={`${y} ${x}`}
                  className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-green-600 accent-green-500 focus:ring-2 focus:ring-green-500 dark:ring-offset-gray-700 dark:focus:ring-green-600 dark:focus:ring-offset-gray-700"
                ></input>
                <label
                  htmlFor={`method ${y} ${x}`}
                  className="strikethrough ml-2 text-sm font-medium text-gray-900"
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
