import React, { Suspense } from 'react'
import { inject } from '@vercel/analytics';
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

if (import.meta.env.PROD) {
  inject()
}
