import styled from "styled-components";
import { Router, Route } from "module/Router";
import { Statusbar } from "module/StatusBar";

import { HomeScreen } from "./screens/home";

import { WifiScreen } from "./screens/CoreControls/Wifi";
import { BluetoothScreen } from "./screens/CoreControls/bluetooth";
import { MobileScreen } from "./screens/CoreControls/mobile";
import { HotspotScreen } from "./screens/CoreControls/hotspot";

const Settings = () => {
  return (
    <>
      <Statusbar color="var(--iosColorGray6)" />
      <Container>
        <Router initialPath="/">
          <Route path="/" screen={HomeScreen} />
          <Route path="/wifi" screen={WifiScreen} />
          <Route path="/bluetooth" screen={BluetoothScreen} />
          <Route path="/mobile" screen={MobileScreen} />
          <Route path="/hotspot" screen={HotspotScreen} />
        </Router>
      </Container>
    </>
  );
};

export default Settings;

const Container = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.ios.color.gray6};
`;
