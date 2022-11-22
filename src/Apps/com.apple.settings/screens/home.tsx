import React, { useState } from "react";
import { Item } from "../components/Item";
import { List } from "../components/List";

import { Areoplane } from "../icons/Aeroplane";
import { Wifi } from "../icons/wifi";
import { BlueTooth } from "../icons/bluetooth";
import { Mobile } from "../icons/mobile";
import { HotSpot } from "../icons/hotspot";
import { Toggle } from "../components/Toggle";

export const HomeScreen = () => {
  const [value, setValue] = useState(false);
  return (
    <main>
      <h1>Settings</h1>
      <List>
        <Item icon={Areoplane} title="Aeroplane Mode">
          <Toggle value={value} onChange={setValue} />
        </Item>
        <Item icon={Wifi} title="Wi-Fi" status="" link={"/wifi"} />
        <Item icon={BlueTooth} title="Bluetooth" status="" link={"/bluetooth"} />
        <Item icon={Mobile} title="Mobile" status="" link={"/mobile"} />
        <Item icon={HotSpot} title="Personal Hotspot" status="" link={"/hotspot"} />
      </List>
    </main>
  );
};
