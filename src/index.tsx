import React, { Suspense } from "react"
import { render } from "react-dom"
import "./index.css"

import { LoadingPage } from "./Components/Loading";

const App = React.lazy(() => import("./app"))

const Container = () => (
  <Suspense fallback={<LoadingPage text="Loading App" />} >
    <App />
  </Suspense>
)

render(<Container />, document.getElementById("root"))