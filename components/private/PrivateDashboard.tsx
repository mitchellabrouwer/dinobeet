import { FC } from "react";
import { Heading } from "../common/Heading";
import { SuperButton } from "../common/SuperButton";
import ToggleDark from "../common/ToggleDark";

interface PrivateDashboardProps {}

export const PrivateDashboard: FC<PrivateDashboardProps> = () => {
  console.log("here");

  return (
    <>
      <Heading as="h1" styles="pt-12" dataCy="dashboard-page-heading">
        Private Dashboard
      </Heading>
      <SuperButton
        type="button"
        colour="primary"
        variant="link"
        accessibilityLabel="test"
      >
        primary solid
      </SuperButton>
      <SuperButton
        type="button"
        colour="secondary"
        variant="solid"
        accessibilityLabel="test"
      >
        Secondary solid
      </SuperButton>
      <SuperButton
        type="button"
        colour="primary"
        variant="outline"
        accessibilityLabel="test"
      >
        Secondary solid
      </SuperButton>
      <ToggleDark></ToggleDark>
    </>
  );
};
