import { AppId } from ".."
import { useAppLayout } from "../com.apple.launcher/layout"

export const useInstallApp = () => {
  const addApp = useAppLayout(state => state.addApp)

  const installApp = (appId: AppId) => {
    addApp(appId)
  }

  return installApp
}