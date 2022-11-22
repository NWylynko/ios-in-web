import styled from "styled-components";
import { ListOfApps } from "./components/ListOfApps";

const AppStore = () => {
  return (
    <Page>
      <Title>Apps</Title>
      <ListOfApps />
    </Page>
  );
};

export default AppStore;

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
`;
