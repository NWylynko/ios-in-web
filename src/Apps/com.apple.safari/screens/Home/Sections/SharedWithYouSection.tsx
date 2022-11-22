import React from "react";
import { Action } from "../Action";
import { Header } from "../Header";
import { useBoolean } from "react-raw-hooks/hooks/useBoolean";

export const SharedWithYouSection = () => {
  const [expanded, { toggle }] = useBoolean(false);
  const manyItems = true;

  return (
    <>
      <Header
        title="Shared with You"
        action={manyItems ? <Action onClick={toggle} expanded={expanded} /> : undefined}
      />
    </>
  );
};
