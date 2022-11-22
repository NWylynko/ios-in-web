import React, { useMemo } from "react";
import { useRouter } from "./useRouter";
import { pathToRegexp, parse, match } from "path-to-regexp";

type RouteProps = {
  path: string;
  screen: (props: { path: string; params: object }) => JSX.Element;
};

export const Route = ({ path, screen: Screen }: RouteProps) => {
  const matcher = useMemo(() => match(path), [path]);

  const { path: activePath } = useRouter();

  const props = matcher(activePath);

  // if this is false it means it didn't match
  if (props !== false) {
    const { path, params } = props;
    return <Screen {...{ path, params }} />;
  }

  return <></>;
};

export type RouteElement = ReturnType<typeof Route>;
