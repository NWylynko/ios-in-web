import styled from "styled-components";

export const Loading = styled.div`

  height: 50px;
  width: 50px;

  margin: 16px;

  border: 4px solid transparent;
  border-top: 4px solid var(--foreground);
  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`;
