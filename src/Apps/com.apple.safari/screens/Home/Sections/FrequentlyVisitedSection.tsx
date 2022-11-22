import React from "react";
import { Action } from "../Action";
import { Header } from "../Header";
import { useBoolean } from "react-raw-hooks/hooks/useBoolean";

export const FrequentlyVisitedSection = () => {
  const [expanded, { toggle }] = useBoolean(false);
  const manyItems = false;

  return (
    <>
      <Header
        title="Frequently Visited"
        action={manyItems ? <Action onClick={toggle} expanded={expanded} /> : undefined}
      />
    </>
  );
};
