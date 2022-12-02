import React from "react";
import styled from "styled-components";
import format from "date-fns/format";

import { BsReception4 } from "@react-icons/all-files/bs/BsReception4";
import { IoIosWifi } from "@react-icons/all-files/io/IoIosWifi";
import { BsBatteryFull } from "@react-icons/all-files/bs/BsBatteryFull";

type StatusBarProps = {
  color?: string;
  invert?: boolean;
};

export const Statusbar = ({ color = "transparent", invert = false }: StatusBarProps) => {
  const textColor = invert ? "var(--colorWhite)" : "var(--colorBlack)";
  return (
    <Container bgColor={color}>
      <Partitions>
        <Time style={{ color: textColor }}>{format(new Date(), "h:mm")}</Time>
      </Partitions>
      <Partitions>
        {/* if possible by hooking in to the browsers apis it would be sick to animate these */}
        <BsReception4 size={16} color={textColor} />
        <IoIosWifi size={18} color={textColor} />
        <BsBatteryFull size={20} color={textColor} />
      </Partitions>
    </Container>
  );
};

const Container = styled.div<{ bgColor: string }>`

  background-color: ${(props) => props.bgColor};

  min-height: 40px;
  height: 40px;
  max-height: 40px;

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
`;
