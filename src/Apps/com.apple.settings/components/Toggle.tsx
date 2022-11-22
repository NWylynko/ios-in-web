import styled from "styled-components";

type ToggleProps = {
  value: boolean;
  onChange: (state: boolean) => void;
};

export const Toggle = ({ value, onChange }: ToggleProps) => {
  const handleClick = () => {
    onChange(!value);
  };
  return (
    <Container active={value} onClick={handleClick}>
      <Circle active={value} />
    </Container>
  );
};

const Container = styled.div<{ active: boolean }>`
  background-color: ${({ theme, active }) => (active ? theme.ios.color.green : theme.ios.color.gray4)};
  width: 60px;
  margin: 4px;
  padding: 1px;
  border-radius: 34px;
  transition: background-color 125ms ease-in-out;

`;

const Circle = styled.div<{ active: boolean }>`
  background-color: ${({ theme }) => theme.color.white};
  height: 32px;
  width: 32px;
  margin: 2px;
  border-radius: 50%;

  transition: transform 125ms ease-in-out;
  transform: ${({ active }) => (active ? "translateX(24px)" : "none")};
`;
