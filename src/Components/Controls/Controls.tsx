import styled from "styled-components";

import { CgHomeScreen } from "react-icons/cg"

import { openApp } from "../../IOS";

export const Controls = () => {
  return (
    <Container>
      <CgHomeScreen size={48} onClick={() => openApp("com.apple.launcher")} />
    </Container>
  )
}

const Container = styled.div`

  display: flex;
  flex-direction: column;

  svg {

    margin: 16px;
    padding: 4px;
    border: 3px solid var(--foreground);
    border-radius: 8px;
    cursor: pointer;

  }

`;