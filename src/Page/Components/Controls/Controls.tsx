import styled from "styled-components";

import { CgHomeScreen as HomeScreen } from "@react-icons/all-files/cg/CgHomeScreen";
import { ImSun as Sun } from "@react-icons/all-files/im/ImSun";
import { HiMoon as Moon } from "@react-icons/all-files/hi/HiMoon";

import { useAppManager } from "ios/AppManager";
import { useTheme } from "@/Page/Theme";

export const Controls = () => {
  const openApp = useAppManager((state) => state.openApp);
  const { theme, setTheme } = useTheme(({ theme, setTheme }) => ({ theme, setTheme }));
  return (
    <Container>
      <HomeScreen size={48} onClick={() => openApp("ios.launcher")} color="var(--colorBlack)" />
      {theme === "light" && <Moon size={48} onClick={() => setTheme("dark")} color="var(--colorBlack)" />}
      {theme === "dark" && <Sun size={48} onClick={() => setTheme("light")} color="var(--colorBlack)" />}
    </Container>
  );
};

const Container = styled.div`

  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    flex-direction: row;
  }

  svg {

    margin: 16px;
    padding: 4px;
    border: 3px solid var(--colorBlack);
    border-radius: 8px;
    cursor: pointer;

  }

`;
