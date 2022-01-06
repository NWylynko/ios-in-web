import React, { Suspense } from "react"
import { render } from "react-dom"
import { LoadingPage } from "./Components/Loading"
import "./index.css"

const App = React.lazy(() => import("./app"))

const Container = () => (
    <Suspense fallback={<LoadingPage text="Loading" />} >
      <App />
    </Suspense>
)

render(<Container />, document.getElementById("root"))