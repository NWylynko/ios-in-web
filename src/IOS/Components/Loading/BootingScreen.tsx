import styled from "styled-components";

import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple";

export const BootingScreen = () => {
  return (
    <BootingScreenContainer>
      <AiFillApple size={64 * 1.5} />
      {/* <LoadingBar /> */}
    </BootingScreenContainer>
  );
};

const BootingScreenContainer = styled.div`
  width: var(--full-width);
  height: var(--full-height);
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: var(--alwaysBlack);

  svg {
    color: var(--alwaysWhite);
  }
`;

const LoadingBar = styled.div`
  height: 4px;
  width: 50%;
  background-color: var(--alwaysWhite);
  border-radius: 2px;
`;
