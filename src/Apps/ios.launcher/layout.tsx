import createStore from "zustand"
import { persist } from 'zustand/middleware'

import { type AppId } from "../../IOS/AppManager/apps";

const initialDock: AppId[]= [
  "com.apple.stocks", "com.apple.safari", "com.apple.i-message", "com.apple.apple-music"
]

const initialPages: AppId[][] = [
  [ // the first page
    "com.apple.facetime", "com.apple.calendar", "com.apple.photos", "com.apple.camera",
    "com.apple.mail", "com.apple.notes", "com.apple.reminders", "com.apple.clock",
    "com.apple.news", "com.apple.apple-tv", "com.apple.podcasts", "com.apple.app-store",
    "com.apple.home", "com.apple.wallet", "com.apple.settings", "com.apple.shortcuts",
  ],
  [
    "com.apple.contacts", "com.apple.books", "com.apple.calculator", "com.apple.files", 
    "com.apple.find-my", "com.apple.health", "com.apple.measure", "com.apple.translate", 
    "com.apple.voice-memos", "com.apple.weather"
  ]
]

type AppLayoutStore = {
  dock: AppId[]
  pages: AppId[][]
  addApp: (appId: AppId) => void;
  isAppInstalled: (appId: AppId) => boolean;
}

export const useAppLayout = createStore<AppLayoutStore>()(
  persist(
    (set, get) => ({
      dock: initialDock,
      pages: initialPages,
      addApp: (appId: AppId) => {
        const { pages } = get()
        for (const indexString in pages) {

          const index = Number(indexString)
          const page = pages[index]
          const numberOfApps = page.length

          if (numberOfApps < 4 * 6) {

            const newPage = [...page, appId]
            pages.splice(index, 1, newPage)

            set({ pages })
            return;
          }
        }
      },
      isAppInstalled: (appId: AppId) => {
        const { pages } = get()
        let installed = false;
        for (const page of pages) {
          for (const app of page) {
            if (app === appId) {
              installed = true
            }
          }
        }
        return installed;
      }
    }),
    {
      name: `app-layout`,
      version: 2
    }
  )
)