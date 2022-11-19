// this is run node.js side to read the file system for apps
// the file getApps.ts gets the list from here

import fs from "fs";
import path from "path";

export default async () => {
  // Apps folder
  const appsBaseDir = path.join(__dirname, "Apps")

  // read the dir for all the apps
  const appsDir = fs.readdirSync(appsBaseDir)

  // filter out the typescript files (eg this one)
  const apps = appsDir.filter((appName) => appName.slice(-3) !== ".ts")

  // read the app.json files
  const appInfos = apps.map(app => {
    const filePath = path.join(appsBaseDir, app, "app.json")
    const fileString = fs.readFileSync(filePath, "utf-8")
    return JSON.parse(fileString)
  })

  return {
    data: appInfos
  }
}

