import createStore from "zustand";
import { type AppId } from "./apps";

interface AppMangerStore {
  activeApp: AppId;
  openApp: (appId: AppId) => void;
}

export const useAppManager = createStore<AppMangerStore>()((set) => ({
  activeApp: "com.apple.launcher",
  openApp: (appId) => set({ activeApp: appId })
}));

