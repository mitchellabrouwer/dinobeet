import { FC } from "react";
import { Button } from "../common/Button";
import { Heading } from "../common/Heading";
import ToggleDark from "../common/ToggleDark";

interface PrivateDashboardProps {}

export const PrivateDashboard: FC<PrivateDashboardProps> = () => {
  console.log("here");

  return (
    <>
      <Heading as="h1" styles="pt-12" dataCy="dashboard-page-heading">
        Private Dashboard
      </Heading>
      <Button
        type="button"
        colour="primary"
        variant="link"
        accessibilityLabel="test"
      >
        primary solid
      </Button>
      <Button
        type="button"
        colour="secondary"
        variant="solid"
        accessibilityLabel="test"
      >
        Secondary solid
      </Button>
      <Button
        type="button"
        colour="primary"
        variant="outline"
        accessibilityLabel="test"
      >
        Secondary solid
      </Button>
      <ToggleDark></ToggleDark>
    </>
  );
};
