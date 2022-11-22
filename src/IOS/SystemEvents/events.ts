import { EventEmitter } from "events";
import { AppId } from "../../Apps";

export const iosEvents = new EventEmitter();

export const openApp = (appId: AppId) => {
  iosEvents.emit("open-app", appId);
};
