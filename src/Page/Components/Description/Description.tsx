import styled from "styled-components";

export const Description = () => {
  return (
    <Container>
      <Text>
        Created for fun by <Link href="https://nick.wylynko.com">Nick Wylynko</Link>, please star it on{" "}
        <Link href="https://github.com/nwylynko/ios-in-web">Github</Link>.
      </Text>
      <Text>This is made to run in Chrome, if you have problems with it on other browsers please use Chrome. (Or a Chromium based browser)</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  max-width: 480px;
  margin: 16px;
  padding: 16px;
  font-family: "SFProDisplay-Bold", 'Roboto', sans-serif;
  color: grey;

  > a {
    color: grey;
  }

  &:hover {
    color: black;

    > a {
      color: black;
    }
  }
`;

const Link = styled.a`
  font-family: "SFProDisplay-Bold", 'Roboto', sans-serif;
`;
