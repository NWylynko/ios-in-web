import styled from "styled-components";
import { Website } from "./screens/Website";

const Safari = () => {
  return (
    <Container>
      <Website />
    </Container>
  );
};

export default Safari;

const Container = styled.div`
  height: var(--full-height);
`;
