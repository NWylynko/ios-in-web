import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  padding: 16px;

  /* I don't know why these needs to be here but it breaks otherwise */
  backdrop-filter: blur(0px);
  `;