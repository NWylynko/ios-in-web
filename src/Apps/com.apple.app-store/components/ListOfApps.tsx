import React from "react"
import styled from "styled-components"
import { apps, useAppManager, type App } from "ios/AppManager"
import { useInstallApp } from "../installApp"

const installableApps = apps.filter((app) => !app["built-in"])

export const ListOfApps = () => {
  return (
    <List>
      {installableApps.map(app => (
        <AppItem key={app.id} {...app} />
      ))}
    </List>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  gap: 8px;
`;

const AppItem = (props: App) => {

  const { installApp, installing, installed } = useInstallApp(props.id)
  const openApp = useAppManager(state => state.openApp)

  const handleClick = () => {
    if (installed) {
      openApp(props.id)
    } else {
      installApp()
    }
  }

  return (
    <Item key={props.id}>
      <Image src={props.icon} height="64px" width="64px" />
      <h3>{props.name}</h3>
      <InstallButton onClick={handleClick} disabled={installing}>{installing ? "Installing" : installed ? "Open" : "Get"}</InstallButton>
    </Item>
  )
}

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  margin: 0 16px;
  gap: 8px;
`;

const Image = styled.img`
  height: 64px;
  width: 64px;
`;

const InstallButton = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 16px;
  color: ${({ theme }) => theme.ios.color.blue};
  font-weight: bold;
  font-size: 14px;

  &:disabled {
    color: grey;
  }
`;