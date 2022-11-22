import React from "react";
import { Action } from "../Action";
import { Header } from "../Header";
import { useBoolean } from "react-raw-hooks/hooks/useBoolean";

export const SiriSuggestionsSection = () => {
  const [expanded, { toggle }] = useBoolean(false);
  const manyItems = false;

  return (
    <>
      <Header
        title="Siri Suggestions"
        action={manyItems ? <Action onClick={toggle} expanded={expanded} /> : undefined}
      />
    </>
  );
};
