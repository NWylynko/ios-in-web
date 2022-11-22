import { FiBluetooth } from "@react-icons/all-files/fi/FiBluetooth";
import styled from "styled-components";
import { icon } from "./_base";

export const BlueTooth = () => <Icon size={24} />;

const Icon = styled(FiBluetooth)`
  ${icon};
  background-color: ${({ theme }) => theme.ios.color.blue};

  padding: 4px;
`;
