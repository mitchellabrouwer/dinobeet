import { FC, HTMLAttributes, ReactNode } from "react";

interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  // size: "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  dataCy?: string;
  styles?: HTMLAttributes<"h1">["className"];
}

const headings = {
  h1: (children, attributes, styles) => (
    <h1
      {...attributes}
      className={`mt-0 mb-2 p-3 text-4xl tracking-tight md:mt-4 md:text-5xl ${styles}`}
    >
      {children}
    </h1>
  ),
  h2: (children, attributes, styles) => (
    <h2
      {...attributes}
      className={`text-3xl leading-8 tracking-tight text-dino-green-500 sm:text-4xl ${styles}`}
    >
      {children}
    </h2>
  ),
  h3: (children, attributes, styles) => (
    <h3
      {...attributes}
      className={`text-1xl mt-2 leading-8 tracking-tight sm:text-2xl ${styles}`}
    >
      {children}
    </h3>
  ),
};

export const Heading: FC<HeadingProps> = ({ as, children, dataCy, styles }) => (
  <>{headings[as](children, { "data-cy": dataCy }, styles)}</>
);
