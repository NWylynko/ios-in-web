import React, { Suspense } from "react";
import { LoadingPage } from "./Components/Loading";

const Launcher = React.lazy(() => import("./Launcher"))

const App = () => {
  return (
    <Suspense fallback={<LoadingPage text="Loading Launcher" />} >
      <Launcher />
    </Suspense>
  )
}

export default App