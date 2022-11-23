import Image from "next/image";
import { FC } from "react";

interface HeroImageProps {}

export const HeroImage: FC<HeroImageProps> = () => (
  <Image
    className="m-auto mt-6 max-w-xs md:max-w-sm lg:mt-0"
    src="/images/dinobeet_skipping.svg"
    width={600}
    height={600}
    alt="logo"
    priority
  />
);
