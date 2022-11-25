import { FC, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ children }) => (
  <div className="mx-auto max-w-7xl">{children}</div>
);
