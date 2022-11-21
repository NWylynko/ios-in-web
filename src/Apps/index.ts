import comApple from "./com.apple";
import * as Launcher from "./ios.launcher"

const apps = {
  "ios.launcher": Launcher,
  ...comApple
} as const

export default apps;

export type Apps = typeof apps;
export type AppId = keyof Apps