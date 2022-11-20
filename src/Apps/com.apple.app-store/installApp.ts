import { useState } from "react"
import { AppId } from ".."
import { findApp } from "../../IOS"
import { useAppLayout } from "../com.apple.launcher/layout"

export const useInstallApp = (appId: AppId) => {
  const { addApp, isAppInstalled } = useAppLayout(({ addApp, isAppInstalled }) => ({ addApp, isAppInstalled }))
  const [installing, setInstalling] = useState(false)
  const installed = isAppInstalled(appId)

  const installApp = async () => {
    setInstalling(true)
    addApp(appId)

    const app = findApp(appId);
    await app.Component.load()
    setInstalling(false)

  }

  return { installApp, installing, installed }
}