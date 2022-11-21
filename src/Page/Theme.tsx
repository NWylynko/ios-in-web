import React from "react"
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from "styled-components"
import createStore from "zustand"
import { persist } from 'zustand/middleware'

const baseTheme: Partial<DefaultTheme> = {

}

const lightTheme: DefaultTheme = {
  ...baseTheme,
  color: {
    white: `rgb(250, 250, 250)`,
    black: `rgb(5, 5, 5)`,
  },
  ios: {
    color: {
      red: `rgb(255, 59, 48)`,
      orange: `rgb(255, 149, 0)`,
      yellow: `rgb(255, 204, 0)`,
      green: `rgb(52, 199, 89)`,
      mint: `rgb(0, 199, 190)`,
      teal: `rgb(48, 176, 199)`,
      cyan: `rgb(50, 173, 230)`,
      blue: `rgb(0, 122, 255)`,
      indigo: `rgb(88, 86, 214)`,
      purple: `rgb(175, 82, 222)`,
      pink: `rgb(255, 45, 85)`,
      brown: `rgb(162, 132, 94)`,
    
      gray: `rgb(142, 142, 147)`,
      gray2: `rgb(174, 174, 178)`,
      gray3: `rgb(199, 199, 204)`,
      gray4: `rgb(209, 209, 214)`,
      gray5: `rgb(229, 229, 234)`,
      gray6: `rgb(242, 242, 247)`,
    }
  }
}

const darkTheme: DefaultTheme = {
  ...baseTheme,
  color: {
    white: `rgb(5, 5, 5)`,
    black: `rgb(250, 250, 250)`,
  },
  ios: {
    color: {
      red: `rgb(255, 69, 58)`,
      orange: `rgb(255, 159, 10)`,
      yellow: `rgb(255, 214, 10)`,
      green: `rgb(48, 209, 88)`,
      mint: `rgb(102, 212, 207)`,
      teal: `rgb(64, 200, 224)`,
      cyan: `rgb(100, 210, 255)`,
      blue: `rgb(10, 132, 255)`,
      indigo: `rgb(94, 92, 230)`,
      purple: `rgb(191, 90, 242)`,
      pink: `rgb(255, 55, 95)`,
      brown: `rgb(172, 142, 104)`,
    
      gray: `rgb(142, 142, 147)`,
      gray2: `rgb(99, 99, 102)`,
      gray3: `rgb(72, 72, 74)`,
      gray4: `rgb(58, 58, 60)`,
      gray5: `rgb(44, 44, 46)`,
      gray6: `rgb(28, 28, 30)`,
    }
  }
}

const themes = {
  light: lightTheme,
  dark: darkTheme
}

type ThemeProps = {
  children: JSX.Element | JSX.Element[]
}

const Theme = ({ children }: ThemeProps) => {

  const theme = useTheme(state => state.theme)

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  )
}

export default Theme

type ThemeOptions = keyof typeof themes

type ThemeStore = {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}

export const useTheme = createStore<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => set({ theme })
    }),
    {
      name: "theme"
    }
  )
)