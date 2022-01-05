import preval from 'preval.macro'
import React from 'react';
import path from "path-browserify"

import { AppInfo } from "../Types/AppInfo";
import { App } from '../Types/App';

const appDirs: string[] = preval`

  // import file system api
  const fs = require("fs");

  // read the dir for all the apps
  const appsDir = fs.readdirSync(__dirname)

  // filter out the typescript files (eg this one)
  const apps = appsDir.filter((appName) => appName.slice(-3) !== ".ts")

  // export it
  module.exports = apps
`;

export const getApps = async (): Promise<App[]> => {

  // loads the info.ts file from each app
  const appInfos = await Promise.all(appDirs.map( async (dir: string) => {
    const { info }: { info: AppInfo } = await import("./" + dir + "/info.ts")
    return info
  }))

  // add the imports
  const apps = await Promise.all(appInfos.map(async (app) => {
    return {
      ...app,
      icon: app.icon && (await import("./" + path.join(app.id, app.icon))).default,
      Component: React.lazy(() => import("./" + path.join(app.id, app.entrypoint))),
    }
  }))

  return apps
}