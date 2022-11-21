import styled from "styled-components"

import { useAppManager, findApp } from "ios/AppManager"

import { AppButton } from "./components/AppButton"
import { AppIcon } from "./components/AppIcon"
import { Dock } from "./components/Dock"
import { GridLayout } from "./components/GridLayout"
import { Background } from "./components/Background"

import { useAppLayout } from "./layout"
import { AppId } from ".."
import { Statusbar } from "module/StatusBar"


const getApps = (appsWanted: AppId[]) => {
  return appsWanted.map(findApp)
}

const Launcher = () => {

  const { openApp, installing } = useAppManager(({ openApp, installing }) => ({ openApp, installing }));
  const { dock, pages } = useAppLayout(({ dock, pages }) => ({ dock, pages }))

  const dockApps = getApps(dock)

  const isInstalling = (appId: AppId) => {
    return installing.includes(appId)
  }

  return (
    <>
      <Background />
      <Statusbar color="transparent" />
      <Container>
        <Pages>
          {pages.map((page, i) => {
            const apps = getApps(page)
            return (
              <GridLayout key={i}>
                {apps.map(({ id, name, icon }) => (
                  <AppButton key={id} onClick={() => openApp(id)} disabled={isInstalling(id)}>
                    {icon && <AppIcon image={icon} loading={isInstalling(id)} />}
                    <AppLabel>{name}</AppLabel>
                  </AppButton>
                ))}
              </GridLayout>
            )
          })}
        </Pages>
        <Dock>
          {dockApps.map(({ id, icon }) => (
            <AppButton key={id} onClick={() => openApp(id)} disabled={isInstalling(id)}>
              {icon && <AppIcon image={icon} loading={isInstalling(id)} />}
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