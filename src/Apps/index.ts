import comApple from "./com.apple";

const apps = {
  ...comApple
} as const

export default apps;

export type Apps = typeof apps;
export type AppId = keyof Apps