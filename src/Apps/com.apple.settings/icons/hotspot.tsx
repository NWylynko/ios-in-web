import { GoLink } from "@react-icons/all-files/go/GoLink"
import styled from "styled-components"
import { icon } from "./_base";

export const HotSpot = () => <Icon size={24} />

const Icon = styled(GoLink)`
  ${icon};
  background-color: ${({ theme }) => theme.ios.color.green};

  padding: 4px;
`;