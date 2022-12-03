import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  submit?: boolean;
  dataCy: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  submit,
  dataCy,
}) => (
  <button
    data-cy={dataCy}
    onClick={onClick}
    type={submit ? "submit" : "button"}
    className="my-3 flex w-full items-center justify-center rounded-md border border-transparent bg-dino-red px-8 py-3 text-base font-medium text-white shadow hover:bg-dino-purple-700 md:max-w-[200px] md:py-2 md:px-10 md:text-lg lg:ml-0 lg:py-6 lg:text-xl lg:font-normal"
  >
    {children}
  </button>
);
