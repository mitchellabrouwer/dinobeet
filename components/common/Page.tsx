import { FC, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ children }) => (
  <div className="mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    {children}
  </div>
);
