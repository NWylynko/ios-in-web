import { IoAirplaneSharp } from "@react-icons/all-files/io5/IoAirplaneSharp"
import styled from "styled-components"
import { icon } from "./_base";

export const Areoplane = () => <Icon size={24} />

const Icon = styled(IoAirplaneSharp)`
  ${icon};
  background-color: ${({ theme }) => theme.ios.color.orange};

  padding: 4px;
`;