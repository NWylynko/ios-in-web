import { Suspense, useEffect } from "react";

import { AppContainer } from "./Components/AppContainer";
import { BootingScreen } from "./Components/Loading";

import { apps } from "./apps";
import { iosEvents } from "./events";
import { useAppManager } from "./useAppManager";

const AppManager = () => {
  const { activeApp, openApp } = useAppManager(({ activeApp, openApp }) => ({ activeApp, openApp }))
  const App = apps.find((app) => app.id === activeApp);

  useEffect(() => {
    // events can be fired in from outside, so listen to them and act accordingly
    iosEvents.on("open-app", openApp)
    return () => { iosEvents.off("open-app", openApp) }
  }, [])

  if (!App) {
    return <span>App doesn't exist</span>
  }

  return (
    <Suspense fallback={<BootingScreen />} >
      <AppContainer>
        <App.Component />
      </AppContainer>
    </Suspense>
  )

}

export default AppManager
