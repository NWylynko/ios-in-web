import { createContext } from "react";

export type RouterStore = {
  path: string;
  navigate: (newPath: string) => void;
  goBack: () => void;
  goForward: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
};

const InvalidFunction = () => {
  throw new Error(`try to call a function from useRouter outside of the <Router> component`);
};

export const RouterContext = createContext<RouterStore>({
  path: "/",
  navigate: InvalidFunction,
  goBack: InvalidFunction,
  goForward: InvalidFunction,
  canGoBack: false,
  canGoForward: false,
});
