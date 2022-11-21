import React from "react"
import { useRouter } from "module/Router"

export const BluetoothScreen = () => {
  const { goBack, canGoBack } = useRouter()

  return (
    <>
      <h3>Bluetooth</h3>
      <button disabled={!canGoBack} onClick={goBack}>Go Back</button>
    </>
  )
}