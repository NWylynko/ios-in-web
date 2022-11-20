import styled from "styled-components"

export const AppButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
  border: none;

  span {
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    color: var(--background);
  }
`;