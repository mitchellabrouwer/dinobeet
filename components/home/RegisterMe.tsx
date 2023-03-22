import { FC } from "react";
import { LoginButton } from "../common/LoginButton";

export const RegisterMe: FC = () => (
  <div>
    <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:flex lg:items-start lg:justify-between lg:py-16 lg:px-8">
      <div>
        <h2 className="text-3xl text-gray-900 sm:text-4xl">
          Ready to learn everything you need to cook vegan and guten free?
        </h2>
        <h3 className="tracking-tight text-gray-900">
          Click join to get access to the web app
        </h3>
      </div>
      <div className="flex lg:mt-0 lg:flex-shrink-0">
        <LoginButton>yes please</LoginButton>
      </div>
    </div>
  </div>
);
