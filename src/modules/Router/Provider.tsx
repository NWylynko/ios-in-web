import React, { useState } from "react";
import { RouterContext, RouterStore } from "./Context";
import { useStack } from "react-raw-hooks/hooks/useStack";

type RouterProviderProps = {
  initialState: Partial<RouterStore>;
  children: JSX.Element | JSX.Element[];
};

export const RouterProvider = ({ children, initialState }: RouterProviderProps) => {
  const { topOfStack: path, add: setPath, ...stack } = useStack([initialState.path ?? "/"], { minStackCount: 1 });

  const navigate = (newPath: string) => {
    setPath(newPath);
  };

  const goBack = () => {
    if (stack.canMoveBackwards) {
      stack.back();
    } else {
      throw new Error(`Can't go back, use 'canGoBack' to know if you can`);
    }
  };

  const goForward = () => {
    if (stack.canMoveForwards) {
      stack.forward();
    } else {
      throw new Error(`Can't go forward, use 'canGoForward' to know if you can`);
    }
  };

  const values: RouterStore = {
    path,
    navigate,
    goBack,
    goForward,
    canGoForward: stack.canMoveForwards,
    canGoBack: stack.canMoveBackwards,
  };

  return <RouterContext.Provider value={values}>{children}</RouterContext.Provider>;
};
