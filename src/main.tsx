import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { LoadingPage } from "./Components/Loading"
import './index.css'

const App = React.lazy(() => import("./app"))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage text="Loading" />} >
      <App />
    </Suspense>
  </React.StrictMode>
)
