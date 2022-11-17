import { FC } from "react";
import { Button } from "../common/Button";
import { Logo } from "../common/Logo";

export const CallToSignUp: FC = () => (
  <div className="">
    <div className="sm:text-center lg:text-left">
      <Logo />
      <p className="md:tet-xl ml-1 text-base text-gray-500 sm:mx-auto sm:max-w-xl sm:text-lg lg:mx-0">
        dino-licious recipes for <strong>vegan</strong> and{" "}
        <strong>gluten free</strong> families.
      </p>
      <Button href="/api/auth/signin" title="Sign me up" />
    </div>
  </div>
);
