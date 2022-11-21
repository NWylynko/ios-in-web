import styled from "styled-components"
import { Router, Route } from "../../Router"

import { HomeScreen } from "./screens/home"

import { WifiScreen } from "./screens/CoreControls/Wifi"

const Settings = () => {
  return (
    <Container>
      <Router initialPath="/">
        <Route path="/" screen={HomeScreen} />
        <Route path="/wifi" screen={WifiScreen} />
      </Router>
    </Container>
  )
}

export default Settings

const Container = styled.div`
  margin: 12px;
  background-color: #dfdfdf;
`;