import React from "react"


export { default as icon } from "./icon.svg"
export { default as info } from "./app.json"
export const app = React.lazy(() => import("./app"))