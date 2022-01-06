import React, { Suspense } from "react"

import { LoadingPage } from "./Components/Loading";

const AppManager = React.lazy(() => import("./AppManager"))

const Container = () => (
  <Suspense fallback={<LoadingPage text="Loading IOS" />} >
    <AppManager />
  </Suspense>
)

export default Container