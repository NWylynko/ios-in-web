import React, { Suspense } from "react";

import { BootingScreen } from "./Components/Loading";
import { IPhoneEdge } from "./Components/IPhoneEdge";

const AppManager = React.lazy(() => import("./AppManager"));

export const IOS = () => (
  <IPhoneEdge>
    <Suspense fallback={<BootingScreen />}>
      <AppManager />
    </Suspense>
  </IPhoneEdge>
);
