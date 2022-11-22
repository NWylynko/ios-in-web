import { lazy } from "@loadable/component";

export { default as info } from "./app.json";
export const app = lazy(() => import("./app"));
