import { FC } from "react";

interface LogoProps {}

export const Logo: FC<LogoProps> = () => (
  <h1 className="text-5xl tracking-tight sm:text-5xl md:m-0 md:text-6xl">
    <span>dino</span>
    <span className="text-purple-600">beet</span>
  </h1>
);
