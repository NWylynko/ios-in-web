import React from "react"
import styled from "styled-components";
import format from 'date-fns/format'

import { BsReception4 } from "@react-icons/all-files/bs/BsReception4"
import { IoIosWifi } from "@react-icons/all-files/io/IoIosWifi"
import { BsBatteryFull } from "@react-icons/all-files/bs/BsBatteryFull"

type StatusBarProps = {
  color: string;
}

export const Statusbar = ({ color }: StatusBarProps) => {
  return (
    <Container>
      <Partitions>
        <span>{format(new Date(), "h:mm")}</span>
      </Partitions>
      <Partitions>
        {/* if possible by hooking in to the browsers apis it would be sick to animate these */}
        <BsReception4 size={18} />
        <IoIosWifi size={18} />
        <BsBatteryFull size={18} /> 
      </Partitions>
    </Container>
  )
}

const Container = styled.div`
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