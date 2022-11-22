import styled, { css } from "styled-components";

export const invisible = css`
  background-color: transparent;
  border: none;
`;

export const InvisibleButton = styled.button`
  ${invisible}
`;
