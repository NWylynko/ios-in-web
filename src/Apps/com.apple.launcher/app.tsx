import styled from "styled-components"

import { loadImage } from "../../Suspense/loadImage"
import { useAppManager, userApps } from "../../IOS"

import { AppButton } from "./components/AppButton"
import { AppIcon } from "./components/AppIcon"
import { Dock } from "./components/Dock"
import { GridLayout } from "./components/GridLayout"

import { backgrounds } from "./backgrounds"

const backgroundImage = backgrounds["ios15"]

const Launcher = () => {
  loadImage(backgroundImage).read();

  const openApp = useAppManager(state => state.openApp);

  const dockApps = userApps.slice(0, 4)
  const apps = userApps.slice(4, 20) // need state and stuff to manage app layout

  console.log(apps)

  return (
    <>
      <Image src={backgroundImage} />
      <Container>
        <GridLayout>
          {apps.map(({ id, name, icon }) => (
            <AppButton key={id} onClick={() => openApp(id)}>
              {icon && <AppIcon image={icon} />}
              <AppLabel>{name}</AppLabel>
            </AppButton>
          ))}
        </GridLayout>
        <Dock>
          {dockApps.map(({ id, name, icon }) => (
            <AppButton key={id} onClick={() => openApp(id)}>
              {icon && <AppIcon image={icon} />}
            </AppButton>
          ))}
        </Dock>
      </Container>
    </>)
}

export default Launcher

const Image = styled.img`
  height: var(--full-height);
  width: var(--full-width);
  position: absolute;
  inset: 0;
`;

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AppLabel = styled.span`
  text-shadow: 2px 2px 12px black;
`;