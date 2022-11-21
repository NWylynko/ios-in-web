import React from "react"
import { useRouter } from "module/Router"

export const MobileScreen = () => {
  const { goBack, canGoBack } = useRouter()

  return (
    <>
      <h3>Mobile</h3>
      <button disabled={!canGoBack} onClick={goBack}>Go Back</button>
    </>
  )
}