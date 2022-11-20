import createStore from "zustand"
import { persist } from 'zustand/middleware'

import { type AppId } from "../../IOS/apps";

const initialDock: AppId[]= [
  "com.apple.stocks", "com.apple.safari", "com.apple.i-message", "com.apple.apple-music"
]

const initialPages: AppId[][] = [
  [ // the first page
    "com.apple.facetime", "com.apple.calendar", "com.apple.photos", "com.apple.camera",
    "com.apple.mail", "com.apple.notes", "com.apple.reminders", "com.apple.clock",
    "com.apple.news", "com.apple.apple-tv", "com.apple.podcasts", "com.apple.app-store",
    "com.apple.home", "com.apple.wallet", "com.apple.settings", "com.apple.my-shortcuts",
  ]
]

type AppLayoutStore = {
  dock: AppId[]
  pages: AppId[][]
}

export const useAppLayout = createStore<AppLayoutStore>()(
  persist(
    (set, get) => ({
      dock: initialDock,
      pages: initialPages,
    }),
    {
      name: `app-layout`,
    }
  )
)