import { FC } from "react";
import { SelectOption } from "../../types/types";

interface SelectProps {
  heading: string;
  options: SelectOption[];
}

export const Select: FC<SelectProps> = ({ heading, options }) => (
  <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
    <option selected>{heading}</option>
    {options.map((option) => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select>
);
