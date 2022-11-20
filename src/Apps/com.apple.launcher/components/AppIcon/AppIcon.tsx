import styled from "styled-components"
import { loadImage } from "../../../../IOS/Suspense/loadImage";

interface AppIconProps {
  image: string;
}

export const AppIcon = ({ image }: AppIconProps) => {
  loadImage(image).read();
  return (
    <AppIconContainer>
      <img src={image} />
    </AppIconContainer>
  )
}

export const AppIconContainer = styled.div`
  width: 64px;
  height: 64px;
  /* margin-bottom: 8px; */

  /* background-color: grey; */

  border-radius: 12px;
`;
