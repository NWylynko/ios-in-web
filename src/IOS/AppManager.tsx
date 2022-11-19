import React, { Suspense, useEffect, useState, createContext, useContext } from "react";
import { LoadingPage, BootingScreen } from "./Components/Loading";

import { getApps, type AppIds } from "./getApps";
import { AppContainer } from "./Components/AppContainer";

import { iosEvents } from "./events";

export interface App {
  id: AppIds;
  name: string;
  icon?: string;
  Component:  React.LazyExoticComponent<React.ComponentType<any>>;
  type: "system" | "user"
}

interface AppMangerStore {
  activeApp: AppIds;
  allApps: App[];
  userApps: App[];
  openApp: (appId: AppIds) => void;
}

const AppManagerContext = createContext<AppMangerStore>({
  activeApp: "com.apple.launcher", // start at the launcher
  allApps: [],
  userApps: [],
  openApp: () => {},
})

export const useAppManager = () => useContext(AppManagerContext);

const apps = getApps() as App[]
const userApps = apps.filter(({ type }) => type === "user")

const AppManager = () => {

  const [id, setId] = useState<AppIds>("com.apple.launcher")
  const [App, setApp] = useState<App | undefined>(undefined)

  useEffect(() => {
    const app = apps.find((app) => app.id === id);
    setApp(app)
  }, [id])

  const openApp = (appId: AppIds) => {
    setId(appId)
  }

  useEffect(() => {
    // events can be fired in from outside, so listen to them and act accordingly
    iosEvents.on("open-app", openApp)
    return () => { iosEvents.off("open-app", openApp) }
  }, [])

  const value: AppMangerStore = {
    activeApp: id,
    allApps: apps,
    userApps,
    openApp
  }

  if (!App) {
    return <span>App doesn't exist</span>
  }

  return (
    <AppManagerContext.Provider value={value}>
      <Suspense fallback={<LoadingPage text={"Loading " + App.name} />} >
        <AppContainer>
          <App.Component />
        </AppContainer>
      </Suspense>
    </AppManagerContext.Provider>
  )
}

export default AppManager