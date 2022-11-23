import { FC } from "react";
import { HeroImage } from "../common/HeroImage";
import { Benefits } from "./Benefits";
import { CallToSignUp } from "./CallToSignUp";
import { Features } from "./Features";
import { Questions } from "./Questions";

interface LandingProps {}

export const Landing: FC<LandingProps> = () => (
  <>
    <div className="mb-10 flex flex-col p-4 lg:flex-row">
      <CallToSignUp />
      <HeroImage />
    </div>

    <Benefits />
    <Features />
    <Questions />
  </>
);
