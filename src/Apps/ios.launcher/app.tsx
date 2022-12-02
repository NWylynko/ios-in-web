import styled from "styled-components";

import { useAppManager, findApp } from "ios/AppManager";
import { Statusbar } from "ios/StatusBars";

import { AppButton, AppLabel } from "./components/AppButton";
import { AppIcon } from "./components/AppIcon";
import { Dock } from "./components/Dock";
import { GridLayout } from "./components/GridLayout";
import { Background } from "./components/Background";
import { Pages } from "./components/Pages";

import { useAppLayout } from "./layout";
import { AppId } from "..";

const getApps = (appsWanted: AppId[]) => {
  return appsWanted.map(findApp);
};

const Launcher = () => {
  const { openApp, installing } = useAppManager(({ openApp, installing }) => ({ openApp, installing }));
  const { dock, pages } = useAppLayout(({ dock, pages }) => ({ dock, pages }));

  const dockApps = getApps(dock);

  const isInstalling = (appId: AppId) => {
    return installing.includes(appId);
  };

  return (
    <>
      <Background />
      <Statusbar invert={true} color="transparent" />
      <Container>
        <Pages>
          {pages.map((page, i) => {
            const apps = getApps(page);
            return (
              <GridLayout key={i}>
                {apps.map(({ id, name, icon }) => (
                  <AppButton key={id} onClick={() => openApp(id)} disabled={isInstalling(id)}>
                    {icon && <AppIcon image={icon} loading={isInstalling(id)} />}
                    <AppLabel>{name}</AppLabel>
                  </AppButton>
                ))}
              </GridLayout>
            );
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
    </>
  );
};

export default Launcher;

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

