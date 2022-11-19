import styled from "styled-components";


export const Description = () => {
  return (
    <Container>
      <Text>Created for fun by <Link href="https://nick.wylynko.com">Nick Wylynko</Link>, I would love if you left me a star on the <Link href="https://github.com/nwylynko/ios-in-web">Repository</Link>.</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  max-width: 315px;
  margin: 16px;
  padding: 16px;

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

`;