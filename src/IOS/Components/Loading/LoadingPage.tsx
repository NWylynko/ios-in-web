import styled from "styled-components"

import { Loading } from "./Loading";

interface LoadingPageProps {
  text: string;
}

export const LoadingPage = ({ text }: LoadingPageProps) => {
  return (
    <LoadingPageContainer>
      <Loading />
      <span>{text}</span>
    </LoadingPageContainer>
  )
}

const LoadingPageContainer = styled.div`
  width: var(--full-width);
  height: var(--full-height);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`;