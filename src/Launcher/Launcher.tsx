import styled from "styled-components"
import { AppIcon, Dock, GridLayout, AppButton } from "../Components/Launcher"
import { loadImage } from "../Suspense/loadImage"
import { apps, dockApps } from "./apps"
import { backgrounds } from "./backgrounds"

import { icons } from "./icons"

const theme = "default"
const backgroundImage = backgrounds[theme]["ios15"]

export const Launcher = () => {
  loadImage(backgroundImage).read();
  return (
    <Container image={backgroundImage}>
      <GridLayout>
        {apps.map(({ id, name }) => (
          <AppButton key={id}>
            <AppIcon image={icons[theme][name]} />
            <span>{name}</span>
          </AppButton>
        ))}
      </GridLayout>
      <Dock>
        {dockApps.map(({ id, name }) => (
          <AppButton key={id}>
            <AppIcon image={icons[theme][name]} />
          </AppButton>
        ))}
      </Dock>
    </Container>
  )
}

interface ContainerProps {
  image: string;
}

const Container = styled.div`
  background-image: url(${({ image }: ContainerProps) => image});
  background-size: cover;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;