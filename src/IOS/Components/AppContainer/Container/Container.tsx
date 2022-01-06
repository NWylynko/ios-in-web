import { useState, useEffect } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )

}

const StyledContainer = styled.div`
  position: relative;
  width: var(--full-width);
  height: calc(var(--full-height) - 35px);
  background-color: var(--background);
  padding-top: 35px;
`;