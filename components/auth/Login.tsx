import { Session } from "next-auth";
import Link from "next/link";
import { FC } from "react";

interface LoginProps {
  user: Session["user"];
}

export const Login: FC<LoginProps> = ({ user }) => {
  const destination = user ? "signout" : "signin";
  const label = user ? "out" : "in";
  return (
    <Link
      data-cy="login-button"
      href={`/api/auth/${destination}`}
      className="font-medium text-dino-red-600 hover:text-dino-red-500"
    >
      Log {label}
    </Link>
  );
};
