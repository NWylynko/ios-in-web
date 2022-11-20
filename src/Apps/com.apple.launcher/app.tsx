import styled from "styled-components"

import { useAppManager, userApps } from "../../IOS"

import { AppButton } from "./components/AppButton"
import { AppIcon } from "./components/AppIcon"
import { Dock } from "./components/Dock"
import { GridLayout } from "./components/GridLayout"
import { Background } from "./components/Background"

import { useAppLayout } from "./layout"
import { AppId } from ".."


const getApps = (apps: AppId[]) => {
  return apps.map((id) => {
    const app = userApps.find((app) => app.id === id)
    if (!app) {
      throw new Error(`app ${id} not found :/`)
    }
    return app
  })
}

const Launcher = () => {

  const openApp = useAppManager(state => state.openApp);
  const { dock, pages } = useAppLayout(({ dock, pages }) => ({ dock, pages}))

  const dockApps = getApps(dock)

  return (
    <>
      <Background />
      <Container>
        <Pages>
          {pages.map((page) => {
            const apps = getApps(page)
            return (
              <GridLayout>
                {apps.map(({ id, name, icon }) => (
                  <AppButton key={id} onClick={() => openApp(id)}>
                    {icon && <AppIcon image={icon} />}
                    <AppLabel>{name}</AppLabel>
                  </AppButton>
                ))}
              </GridLayout>
            )
          })}
        </Pages>
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

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: scroll;
  min-width: calc(var(--full-width) + 16px);
`;

const AppLabel = styled.span`
  text-shadow: 2px 2px 12px black;
`;