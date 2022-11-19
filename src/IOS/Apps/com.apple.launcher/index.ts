import React from "react"


export { default as info } from "./app.json"
export const app = React.lazy(() => import("./app"))