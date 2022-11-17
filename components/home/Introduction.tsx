import { FC } from "react";
import { HeroImage } from "../common/HeroImage";
import { Benefits } from "./Benefits";
import { CallToSignUp } from "./CallToSignUp";
import { Features } from "./Features";
import { Questions } from "./Questions";

interface IntroductionProps {}

export const Introduction: FC<IntroductionProps> = () => (
  <div>
    <div className="flex flex-col lg:flex-row">
      <CallToSignUp />
      <HeroImage />
    </div>
    <Features />
    <Benefits />
    <Questions />
  </div>
);
