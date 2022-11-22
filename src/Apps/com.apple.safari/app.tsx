import { Route, Router } from "module/Router";
import { Statusbar } from "ios/StatusBars";
import styled from "styled-components";

import { HomeScreen } from "./screens/Home";
import { TabsScreen } from "./screens/Tabs";
// import { Website } from "./screens/Website";

const Safari = () => {
  return (
    <>
      <Statusbar />
      <Router>
        <Route path="/" screen={HomeScreen} />
        <Route path="/tabs" screen={TabsScreen} />
      </Router>
    </>
  );
};

export default Safari;
