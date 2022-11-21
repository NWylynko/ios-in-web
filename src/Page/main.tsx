import React, { Suspense } from 'react'
import { inject } from '@vercel/analytics';
import ReactDOM from 'react-dom/client'
import { LoadingPage } from "./Components/Loading"

import "../fonts/sf-pro/index"
import './index.css'

const App = React.lazy(() => import("./app"))
const Theme = React.lazy(() => import("./Theme"))
const GlobalStyles = React.lazy(() => import("./GlobalStyles"))

export const main = () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Suspense fallback={<LoadingPage text="Loading" />}>
        <Theme>
          <GlobalStyles />
          <App />
        </Theme>
      </Suspense>
    </React.StrictMode>
  )
  
  if (import.meta.env.PROD) {
    inject()
  }
}
