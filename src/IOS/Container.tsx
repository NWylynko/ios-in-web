import React, { Suspense } from "react"
import styled from "styled-components";

import { LoadingPage, BootingScreen } from "./Components/Loading";

const AppManager = React.lazy(() => import("./AppManager"))

export const Container = () => (
  <IphoneEdge>
    <Suspense fallback={<BootingScreen />} >
      <AppManager />
    </Suspense>
  </IphoneEdge>

)

const IphoneEdge = styled.div`
  border: 16px solid var(--foreground);
  border-radius: 45px;
  overflow: hidden;
  position: relative;
  background-color: var(--foreground);

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