import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 104px);
  gap: 5px;
  min-width: calc(var(--full-width) - 32px);

  padding: 16px;

  /* I don't know why these needs to be here but it breaks otherwise */
  backdrop-filter: blur(0px);
  `;