/* eslint-disable react/button-has-type */
import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode } from "react";

const variantStyles = {
  primary: {
    solid: `
    text-white bg-dino-green-500 border border-dino-green-400 
    hover:bg-dino-green-400 
    `,
    outline: `
    text-dino-green-600 border border-dino-green-600
    hover:text-white hover:bg-dino-green-600 
    `,
    ghost: "focus:outline-none hover:text-white hover:bg-dino-green-600",
    link: "hover:underline hover:text-dino-green-600",
  },
  secondary: {
    solid: `
    text-white bg-dino-red-500 border border-dino-red-400 
    hover:bg-dino-red-400 
    `,
    outline: `
    text-dino-red-500 border border-dino-red-500
    hover:text-white hover:bg-dino-red-500 
    `,
    ghost: "focus:outline-none hover:text-white hover:bg-dino-red-500",
    link: "hover:underline hover:text-dino-red-500",
  },
};

interface ButtonProps {
  children: ReactNode;
  dataCy?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  colour: "primary" | "secondary";
  variant: "solid" | "outline" | "ghost" | "link";
  icon?: boolean;
  accessibilityLabel: string;
  type?: "button" | "submit";
  value?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  dataCy,
  onClick,
  className,
  colour,
  variant = "primary",
  icon,
  accessibilityLabel,
  type = "button",
  value,
}) => (
  <button
    className={clsx(
      "mr-2 mb-2 inline-block rounded-lg px-5 py-3 text-center text-sm font-light",
      variantStyles[colour][variant],
      className
    )}
    onClick={onClick}
    aria-label={accessibilityLabel}
    type={type}
    value={value}
    data-cy={dataCy}
  >
    {/* {icon ? ( */}
    <div className="flex">
      <span className="absolute inset-y-0 left-0 flex items-center">
        {icon}
      </span>
      {children}
    </div>
    {/* )} */}
  </button>
);
