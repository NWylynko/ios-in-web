import styled from "styled-components";
import { IoIosWifi } from "@react-icons/all-files/io/IoIosWifi";
import { icon } from "./_base";

const WifiIcon = styled(IoIosWifi)`
  ${icon};
  background-color: ${({ theme }) => theme.ios.color.blue};

  padding: 4px;
`;

export const Wifi = () => <WifiIcon size={28} />;
