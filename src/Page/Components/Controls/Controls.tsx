import styled from "styled-components";

import { CgHomeScreen } from "@react-icons/all-files/cg/CgHomeScreen";

import { useAppManager } from "ios/AppManager";

export const Controls = () => {
  const openApp = useAppManager((state) => state.openApp);
  return (
    <Container>
      <CgHomeScreen size={48} onClick={() => openApp("ios.launcher")} color="var(--colorBlack)" />
    </Container>
  );
};

const Container = styled.div`

  display: flex;
  flex-direction: column;

  svg {

    margin: 16px;
    padding: 4px;
    border: 3px solid var(--colorBlack);
    border-radius: 8px;
    cursor: pointer;

  }

`;
