import { FC } from "react";
import { Heading } from "../common/Heading";

interface PrivateDashboardProps {}

export const PrivateDashboard: FC<PrivateDashboardProps> = () => {
  console.log("here");

  return (
    <Heading as="h1" styles="pt-12" dataCy="dashboard-page-heading">
      Private Dashboard
    </Heading>
  );
};
