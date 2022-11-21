import { FiRadio } from "@react-icons/all-files/fi/FiRadio"
import styled from "styled-components"
import { icon } from "./_base";

export const Mobile = () => <MobileIcon size={24} />

const MobileIcon = styled(FiRadio)`
  ${icon};
  background-color: ${({ theme }) => theme.ios.color.green};

  padding: 4px;
`;