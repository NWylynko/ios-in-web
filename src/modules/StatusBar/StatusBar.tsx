import React from "react";
import styled from "styled-components";
import format from "date-fns/format";

import { BsReception4 } from "@react-icons/all-files/bs/BsReception4";
import { IoIosWifi } from "@react-icons/all-files/io/IoIosWifi";
import { BsBatteryFull } from "@react-icons/all-files/bs/BsBatteryFull";

type StatusBarProps = {
  color: string;
};

export const Statusbar = ({ color }: StatusBarProps) => {
  return (
    <Container bgColor={color}>
      <Partitions>
        <Time>{format(new Date(), "h:mm")}</Time>
      </Partitions>
      <Partitions>
        {/* if possible by hooking in to the browsers apis it would be sick to animate these */}
        <BsReception4 size={16} color="var(--colorWhite)" />
        <IoIosWifi size={18} color="var(--colorWhite)" />
        <BsBatteryFull size={20} color="var(--colorWhite)" />
      </Partitions>
    </Container>
  );
};

const Container = styled.div<{ bgColor: string }>`

  background-color: ${(props) => props.bgColor};

  min-height: 35px;
  height: 35px;
  max-height: 35px;

  width: 100%;

  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Partitions = styled.div`
  display: flex;
  gap: 4px;
  width: 110px;
  justify-content: center;
  align-items: center;
`;

const Time = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;
