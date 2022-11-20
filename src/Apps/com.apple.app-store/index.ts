import loadable from '@loadable/component'

export { default as icon } from "./icon.svg"
export { default as info } from "./app.json"
export const app = loadable(() => import('./app'))