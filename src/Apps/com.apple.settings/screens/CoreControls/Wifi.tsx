import React from "react"
import { useRouter } from "../../../../modules/Router"

export const WifiScreen = () => {
  const { goBack, canGoBack } = useRouter()

  return (
    <>
      <h3>NETWORKS</h3>
      <button disabled={!canGoBack} onClick={goBack}>Go Back</button>
    </>
  )
}