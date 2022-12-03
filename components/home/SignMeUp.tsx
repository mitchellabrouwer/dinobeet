import { FC } from "react";
import { handleJoinClick } from "../../lib/utils";
import { Button } from "../common/Button";
import { Logo } from "../common/Logo";

export const SignMeUp: FC = () => (
  <div className="">
    <div className="sm:text-center lg:text-left">
      <Logo />
      <p className="md:tet-xl ml-1 text-base text-gray-500 sm:mx-auto sm:max-w-xl sm:text-lg lg:mx-0">
        dino-licious recipes web app for <strong>vegan</strong> and{" "}
        <strong>gluten free</strong> families.
      </p>
      <Button dataCy="sign-me-up-button" onClick={handleJoinClick}>
        Sign me up
      </Button>
    </div>
  </div>
);
