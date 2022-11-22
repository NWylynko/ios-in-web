import React from "react";
import { Action } from "../Action";
import { Header } from "../Header";
import { useBoolean } from "react-raw-hooks/hooks/useBoolean";

export const FavouritesSection = () => {
  const [expanded, { toggle }] = useBoolean(false);
  const manyItems = true;

  return (
    <>
      <Header title="Favourites" action={manyItems ? <Action onClick={toggle} expanded={expanded} /> : undefined} />
    </>
  );
};
