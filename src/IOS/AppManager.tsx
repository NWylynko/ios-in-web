import React, { Suspense, useEffect, useState, createContext, useContext } from "react";
import { LoadingPage, BootingScreen } from "./Components/Loading";

import { getApps } from "./getApps";
import { App } from "./Types/App"
import { AppContainer } from "./Components/AppContainer";

import { iosEvents } from "./events";

interface AppMangerStore {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  userApps: App[];
  setUserApps: React.Dispatch<React.SetStateAction<App[]>>;
  App: App | undefined;
  setApp: React.Dispatch<React.SetStateAction<App | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppManagerContext = createContext<AppMangerStore>({
  id: "com.apple.launcher",
  setId: () => {},
  userApps: [],
  setUserApps: () => {},
  App: undefined,
  setApp: () => {},
  loading: true,
  setLoading: () => {}
})

export const useAppManager = () => useContext(AppManagerContext);

const AppManager = () => {

  const [id, setId] = useState("com.apple.launcher")
  const [apps, setApps] = useState<App[]>([])
  const [userApps, setUserApps] = useState<App[]>([])
  const [App, setApp] = useState<App | undefined>(undefined)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async() => {
      const apps = await getApps();
      console.log(apps)
      
      const userApps = apps.filter(({ type }) => type === "user")
      setApps(apps);
      setUserApps(userApps)
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    if (apps.length === 0) return;
    setLoading(true)
    console.log('launching', id)
    const app = apps.find((app) => app.id === id);
    setApp(app)
    setLoading(false)
  }, [id, apps])

  useEffect(() => {
    const openApp = (appId: string) => {
      setId(appId)
    }
    iosEvents.on("open-app", openApp)
    return () => { iosEvents.off("open-app", openApp) }
  }, [])

  const value: AppMangerStore = {
    id, setId,
    userApps, setUserApps,
    App, setApp,
    loading, setLoading
  }
  
  if (loading) {
    return <BootingScreen />
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