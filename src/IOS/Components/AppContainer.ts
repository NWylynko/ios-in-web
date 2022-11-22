import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
  width: var(--full-width);
  height: calc(var(--full-height) - 35px);
  background-color: ${({ theme }) => theme.color.white};
  padding-top: 35px;
`;
