
import styled from "styled-components";
import { Container } from "./Container"

interface AppContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <><Container>{children}</Container></>
  )
}