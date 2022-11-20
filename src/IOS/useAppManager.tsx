import createStore from "zustand";
import { findApp, type AppId } from "./apps";

interface AppMangerStore {
  activeApp: AppId;
  installing: AppId[];
  openApp: (appId: AppId) => void;
}

export const useAppManager = createStore<AppMangerStore>()((set, get) => ({
  activeApp: "com.apple.launcher",
  installing: [],
  openApp: async (appId) => {
    const app = findApp(appId)
    set({ installing: [...get().installing, appId ] })
    await app.Component.load()
    set({ installing: [...get().installing.filter((id) => id !== appId)] })

    set({ activeApp: appId })
  }
}));

