import { FC } from "react";
import { HeroImage } from "../common/HeroImage";
import { Benefits } from "./Benefits";
import { Features } from "./Features";
import { Questions } from "./Questions";
import { RegisterMe } from "./RegisterMe";
import { SignMeUp } from "./SignMeUp";

interface LandingProps {}

export const Landing: FC<LandingProps> = () => (
  <>
    <div className="mb-10 flex flex-col items-center p-4 md:justify-between lg:flex-row lg:px-16">
      <SignMeUp />
      <HeroImage />
    </div>

    <Benefits />
    <Features />
    <Questions />
    <RegisterMe />
  </>
);
