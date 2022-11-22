import createStore from "zustand";
import { findApp, type AppId } from "./apps";

interface AppMangerStore {
  activeApp: AppId;
  installing: AppId[];
  loadApp: (appId: AppId) => Promise<void>;
  openApp: (appId: AppId) => Promise<void>;
}

export const useAppManager = createStore<AppMangerStore>()((set, get) => ({
  activeApp: "ios.launcher",
  installing: [],
  loadApp: async (appId) => {
    const app = findApp(appId);
    set({ installing: [...get().installing, appId] });
    await app.Component.load();
    set({ installing: [...get().installing.filter((id) => id !== appId)] });
  },
  openApp: async (appId) => {
    const { loadApp } = get();
    await loadApp(appId);
    set({ activeApp: appId });
  },
}));
