
import EventEmitter from "events"

export const iosEvents = new EventEmitter()

export const openApp = (appId: string) => {
  iosEvents.emit("open-app", appId)
}