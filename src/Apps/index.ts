import React from "react";

export { getApps } from "./apps"



// export const getApps = async (): Promise<App[]> => [
//   {
//     id: "com.apple.launcher",
//     name: "Launcher",
//     icon: "",
//     Component: React.lazy(() => import("./com.apple.launcher")),
//     type: "system"
//   },
//   {
//     id: "com.apple.contacts",
//     name: "Contacts",
//     icon: await import("./com.apple.contacts/icon.svg"),
//     Component: React.lazy(() => import("./com.apple.contacts")),
//     type: "user"
//   }
// ]