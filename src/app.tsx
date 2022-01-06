import styled from "styled-components";
import { Controls } from "./Components/Controls";
import IOS from "./IOS";


const App = () => {
  return (
    <Container>
      <div />
      <IOS />
      <Controls />
    </Container>
  )
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 64px;
`;