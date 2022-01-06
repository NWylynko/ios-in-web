import preval from 'preval.macro'
import React from 'react';
import path from "path-browserify"

import { AppInfo } from "../Types/AppInfo";
import { App } from '../Types/App';

const appInfos: AppInfo[] = preval`

  // import file system api
  const fs = require("fs");
  const path = require("path");

  // read the dir for all the apps
  const appsDir = fs.readdirSync(__dirname)

  // filter out the typescript files (eg this one)
  const apps = appsDir.filter((appName) => appName.slice(-3) !== ".ts")

  // read the app.json files
  const appInfos = apps.map(app => {
    console.log("found", app)
    const filePath = path.join(__dirname, app, "app.json")
    const fileString = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(fileString)
  })

  // export it
  module.exports = appInfos
`;

export const getApps = async (): Promise<App[]> => {

  console.time()

  // add the imports
  const apps = await Promise.all(appInfos.map(async (app) => {
    return {
      ...app,
      icon: app.icon && (await import("./" + path.join(app.id, app.icon))).default,
      Component: React.lazy(() => import("./" + path.join(app.id, app.entrypoint))),
    }
  }))

  console.timeEnd()

  return apps
}