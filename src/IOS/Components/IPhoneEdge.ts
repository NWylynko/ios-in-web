import styled from "styled-components";

export const IPhoneEdge = styled.div`
  border: 16px solid var(--foreground);
  border-radius: 64px;
  overflow: hidden;
  position: relative;
  background-color: var(--foreground);

  max-height: var(--full-height);
  max-width: var(--full-width);
  min-width: var(--full-width);

  &:after {
    content: "";
    width: 50%;
    height: 28px;
    background-color: var(--foreground);
    position: absolute;
    top: 0;
    left: 25%;
    right: 25%;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;
