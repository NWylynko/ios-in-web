import React from "react"
import { useRouter } from "../../../modules/Router"

export const HomeScreen = () => {
  const { navigate } = useRouter()

  return (
    <main>
      <h1>Settings</h1>
      <button onClick={() => navigate("/wifi")}>Wifi</button>
    </main>
  )
}