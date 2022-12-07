import { Session } from "next-auth";
import Link from "next/link";
import { FC } from "react";

interface LoginProps {
  user?: Session["user"];
  label?: string;
  button?: boolean;
}

export const Login: FC<LoginProps> = ({ user, label = false, button }) => {
  const destination = user ? "signout" : "signin";
  const verb = user ? "out" : "in";
  const buttonStyles =
    "my-3 flex w-full items-center justify-center rounded-md border border-transparent bg-dino-red px-8 py-3 text-base font-medium text-white shadow hover:bg-dino-purple-700 md:max-w-[200px] md:py-2 md:px-10 md:text-lg lg:ml-0 lg:py-6 lg:text-xl lg:font-normal";
  return (
    <Link
      data-cy="login-button"
      href={`/api/auth/${destination}`}
      className={
        button
          ? buttonStyles
          : "font-medium text-dino-red-600 hover:text-dino-red-500"
      }
    >
      {label || `Log ${verb}`}
    </Link>
  );
};
