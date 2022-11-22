import { useContext } from "react";
import { RouterContext } from "./Context";

export const useRouter = () => useContext(RouterContext);
