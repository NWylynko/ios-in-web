import dirtyApps, { AppId } from "../../Apps";
import { z } from "zod";
import type { LoadableComponent } from "@loadable/component";
export type { AppId } from "../../Apps";

const schemaItem = z.object({
  info: z.object({
    id: z.string(),
    name: z.string(),
    "built-in": z.boolean().optional(),
  }),
  icon: z.any().optional(),
  app: z.any(),
});

export const apps = Object.keys(dirtyApps).map((id) => {
  // @ts-ignore
  const dirtyApp = dirtyApps[id];

  const app = schemaItem.parse(dirtyApp);

  return {
    ...app.info,
    icon: app?.icon,
    Component: app.app,
  } as App;
});

export const findApp = (appId: AppId) => {
  const app = apps.find((app) => app.id === appId);
  if (!app) {
    throw new Error(`Unable to find the app ${appId}`);
  }
  return app;
};

export interface App {
  id: AppId;
  name: string;
  icon?: string;
  Component: LoadableComponent<unknown>;
  "built-in": boolean;
}
