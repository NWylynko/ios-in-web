import styled from "styled-components"
import { Router, Route } from "../../modules/Router"
import { Statusbar } from "../../modules/StatusBar"

import { HomeScreen } from "./screens/home"

import { WifiScreen } from "./screens/CoreControls/Wifi"

const Settings = () => {
  return (
    <>
      <Statusbar color="var(--iosColorGray5)" />
      <Container>
        <Router initialPath="/">
          <Route path="/" screen={HomeScreen} />
          <Route path="/wifi" screen={WifiScreen} />
        </Router>
      </Container>
    </>
  )
}

export default Settings

const Container = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.ios.color.gray5};
`;