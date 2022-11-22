import React from "react";
import styled from "styled-components";

type HeaderProps = {
  title: string;
  action?: JSX.Element;
};

export const Header = ({ title, action }: HeaderProps) => {
  return (
    <Container>
      <h3>{title}</h3>
      {action}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
