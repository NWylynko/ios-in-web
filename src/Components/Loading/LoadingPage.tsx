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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`;