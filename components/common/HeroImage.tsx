import Image from "next/image";
import { FC } from "react";

interface HeroImageProps {}

export const HeroImage: FC<HeroImageProps> = () => (
  <Image
    className="m-auto max-w-sm"
    src="/images/dinobeet_a.svg"
    width={600}
    height={600}
    alt="logo"
    priority
  />
);
