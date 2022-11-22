import { Button } from "ios/Buttons";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
import styled from "styled-components";

type ActionProps = {
  title?: string;
  expanded: boolean;
  onClick: () => void;
};

export const Action = ({ title = "Show All", expanded, onClick }: ActionProps) => {
  return (
    <ActionButton size="small" variant="plain" onClick={onClick}>
      {title} <Arrow size={16} active={expanded} />
    </ActionButton>
  );
};

const ActionButton = styled(Button)`
  display: flex;
  align-items: center;
`;

const Arrow = styled(RiArrowRightSLine)<{ active: boolean }>`
  transition: transform 125ms ease-in-out;
  transform: rotate(${({ active }) => (active ? "90deg" : "0deg")});
`;
