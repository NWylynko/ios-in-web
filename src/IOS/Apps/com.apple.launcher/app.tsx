import styled from "styled-components"
import { loadImage } from "../../Suspense/loadImage"
// import { apps, dockApps } from "./apps"
import { backgrounds } from "./backgrounds"

// import { icons } from "../../icons"
import { AppButton } from "./components/AppButton"
import { AppIcon } from "./components/AppIcon"
import { Dock } from "./components/Dock"
import { GridLayout } from "./components/GridLayout"
import { useState, useEffect } from "react"
import { App } from "../../Types/App"
import { useAppManager } from "../../AppManager"
// import { getApps, App } from ".."

const theme = "default"
const backgroundImage = backgrounds["ios15"]



export const Launcher = () => {
  loadImage(backgroundImage).read();

  const { userApps, setId } = useAppManager();

  const apps = userApps.slice(3)
  const dockApps = userApps.slice(0, 3)

  return (
    <>
      <Image src={backgroundImage} />
      <Container>
        <GridLayout>
          {apps.map(({ id, name, icon }) => (
            <AppButton key={id} onClick={() => setId(id)}>
              {icon && <AppIcon image={icon} />}
              <span>{name}</span>
            </AppButton>
          ))}
        </GridLayout>
        <Dock>
          {dockApps.map(({ id, name, icon }) => (
            <AppButton key={id} onClick={() => setId(id)}>
              {icon && <AppIcon image={icon} />}
            </AppButton>
          ))}
        </Dock>
      </Container>
    </>)
}

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