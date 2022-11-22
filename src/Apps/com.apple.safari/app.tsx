import { Route, Router } from "module/Router";
import { Statusbar } from "ios/Experiences/StatusBars";
import styled from "styled-components";

import { HomeScreen } from "./screens/Home";
import { TabsScreen } from "./screens/Tabs";
// import { Website } from "./screens/Website";

const Safari = () => {
  return (
    <>
      <Statusbar />
      <Container>
        <Router>
          <Route path="/" screen={HomeScreen} />
          <Route path="/tabs" screen={TabsScreen} />
        </Router>
      </Container>
    </>
  );
};

export default Safari;

const Container = styled.div`
  /* height: var(--full-height); */
`;
