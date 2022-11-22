import { Suspense } from "react";

import { AppContainer } from "../Components/AppContainer";
import { BootingScreen } from "../Components/Loading";

import { apps } from "./apps";
import { useAppManager } from "./useAppManager";

export const AppManager = () => {
  const activeApp = useAppManager((state) => state.activeApp);
  const App = apps.find((app) => app.id === activeApp);

  if (!App) {
    return <span>App doesn't exist</span>;
  }

  return (
    <Suspense fallback={<BootingScreen />}>
      <AppContainer>
        <App.Component />
      </AppContainer>
    </Suspense>
  );
};
