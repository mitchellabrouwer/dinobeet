import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  title: string;
  href: string;
}

export const Button: FC<ButtonProps> = ({ title, href }) => (
  <Link
    href={href}
    className="m-auto my-3 flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white shadow hover:bg-purple-700 md:max-w-[200px] md:py-2 md:px-10 md:text-lg lg:ml-0"
  >
    {title}
  </Link>
);
