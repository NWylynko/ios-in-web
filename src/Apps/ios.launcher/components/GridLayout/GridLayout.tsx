import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 90px);
  gap: 6px;
  min-width: calc(var(--full-width) - 32px);

  padding-bottom: 45px;
  padding-top: 35px;
  padding-left: 17px;
  padding-right: 17px;

  /* I don't know why these needs to be here but it breaks otherwise */
  backdrop-filter: blur(0px);
  `;
