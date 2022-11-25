import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  styles?: string;
  // size: "sm" | "md" | "lg";
}

// const sizing = {
//   sm: "3",
//   md: "4",
//   lg: "5",
// };

export const Button: FC<ButtonProps> = ({ children, href, styles }) => (
  <Link
    href={href}
    className={`my-3 flex w-full items-center justify-center rounded-md border border-transparent bg-dino-red px-8 py-3 text-base font-medium text-white shadow hover:bg-dino-purple-700 md:max-w-[200px] md:py-2 md:px-10 md:text-lg lg:ml-0 lg:py-6 lg:text-xl lg:font-normal ${styles}`}
  >
    {children}
  </Link>
);
