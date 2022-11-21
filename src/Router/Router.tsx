import React from "react"
import { type RouteElement } from "./Route"
import { RouterProvider } from "./Provider"

type RouterProps = {
  initialPath?: string;
  children: RouteElement | RouteElement[]
}

export const Router = ({ children, initialPath = "/" }: RouterProps) => {
  return (
    <RouterProvider initialState={{ path: initialPath }}>
      {children}
    </RouterProvider>
  )
}