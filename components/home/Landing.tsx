import { FC } from "react";
import { HeroImage } from "../common/HeroImage";
import { Benefits } from "./Benefits";
import { Features } from "./Features";
import { Navigation } from "./Navigation";
import { Questions } from "./Questions";
import { RegisterMe } from "./RegisterMe";
import { SignMeUp } from "./SignMeUp";

interface LandingProps {}

export const Landing: FC<LandingProps> = () => (
  <>
    <Navigation />
    <div className="mb-10 flex flex-col items-center p-4 pt-16 md:justify-between md:pt-28 lg:flex-row lg:px-16">
      <SignMeUp />
      <HeroImage />
    </div>

    <Benefits />
    <Features />
    <Questions />
    <RegisterMe />
  </>
);
