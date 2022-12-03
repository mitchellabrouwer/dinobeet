import Link from "next/link";
import { FC, ReactNode } from "react";
import { Button } from "./Button";

interface LinkButtonProps {
  children: ReactNode;
  href: string;
  styles?: string;
  dataCy: string;
  // size: "sm" | "md" | "lg";
}

// const sizing = {
//   sm: "3",
//   md: "4",
//   lg: "5",
// };

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  href,
  styles,
  dataCy,
}) => (
  <Link href={href} className={styles}>
    <Button dataCy={dataCy}>{children}</Button>
  </Link>
);
