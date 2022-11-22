import { useRouter } from "module/Router";
import React from "react";
import styled from "styled-components";

export const HomeScreen = () => {
  return (
    <Container>
      <Header title="Favourites" action={<Action />} />
      <Header title="Frequently Visited" />
      <Header title="Shared with You" action={<Action />} />
      <Header title="Privacy Report" />
      <Header title="Siri Suggestions" />
      <Header title="Reading List" action={<Action />} />
      <Header title="iCloud Tabs" />
    </Container>
  );
};

type HeaderProps = {
  title: string;
  action?: JSX.Element;
};

const Header = ({ title, action }: HeaderProps) => {
  return (
    <div>
      <h3>{title}</h3>
      {action}
    </div>
  );
};

type ActionProps = {
  title?: string;
};

const Action = ({ title = "Show All" }: ActionProps) => {
  return <ActionButton>{title}</ActionButton>;
};

const ActionButton = styled.button`

`;

const Container = styled.div`
  padding: 8px;
`;
