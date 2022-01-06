import React, { Suspense } from "react"
import { render } from "react-dom"
import "./index.css"

// import { LoadingPage } from "./Components/Loading";

const IOS = React.lazy(() => import("./IOS"))

const Container = () => (
    <Suspense fallback={<></>} >
      <IOS />
    </Suspense>
)

render(<Container />, document.getElementById("root"))