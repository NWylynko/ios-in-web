import styled from "styled-components";

// interface DockProps {
//   children: JSX.Element[];
// }

export const Dock = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #00000037;
  backdrop-filter: blur(16px);

  margin: 12px;
  padding: 16px;
  border-radius: 28px;
`;