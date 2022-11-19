import dirtyApps from "./Apps"
import { z } from "zod"
export type { AppIds } from "./Apps";

const schemaItem = z.object({
  info: z.object({
    id: z.string(),
    name: z.string(),
    type: z.union([z.literal("user"), z.literal("system")])
  }),
  icon: z.any().optional(),
  app: z.any()
})

export const getApps = () => {

  return Object.keys(dirtyApps).map((id) => {

    // @ts-ignore
    const dirtyApp = dirtyApps[id]

    const app = schemaItem.parse(dirtyApp)

    return {
      ...app.info,
      icon: app?.icon,
      Component: app.app
    }
  })
}