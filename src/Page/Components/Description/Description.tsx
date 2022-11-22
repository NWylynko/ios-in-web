import styled from "styled-components";

export const Description = () => {
  return (
    <Container>
      <Text>
        Created for fun by <Link href="https://nick.wylynko.com">Nick Wylynko</Link>, please star it on{" "}
        <Link href="https://github.com/nwylynko/ios-in-web">Github</Link>.
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
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
