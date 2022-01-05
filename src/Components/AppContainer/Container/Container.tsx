import { useState, useEffect } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: ContainerProps) => {

  const [height, setHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  
  return (
    <StyledContainer height={`${height}px`}>
      {children}
    </StyledContainer>
  )

}

interface StyledContainerProps {
  height: string;
}

const StyledContainer = styled.div`
  height: ${({ height }: StyledContainerProps) => height};
`;