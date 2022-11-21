import styled, { keyframes } from "styled-components";
import { loadImage } from "../../../../modules/Suspense/loadImage";

import { AiOutlineLoading } from "@react-icons/all-files/ai/AiOutlineLoading"

interface AppIconProps {
  image: string;
  loading: boolean;
}

export const AppIcon = ({ image, loading }: AppIconProps) => {
  loadImage(image).read();
  return (
    <AppIconContainer>
      <Icon src={image} />
      {loading && 
        <LoadingContainer>
          <LoadingIndicator size={28} color="white" />
        </LoadingContainer>
      }
    </AppIconContainer>
  )
}

const AppIconContainer = styled.div`
  width: 64px;
  min-height: 64px;
  height: 64px;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
`;

const Icon = styled.img`
  position: absolute;
  inset: 0;
`;

const LoadingContainer = styled.div`
  background-color: #00000058;
  position: absolute;
  inset: 0;
  width: 64px;
  height: 64px;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIndicator = styled(AiOutlineLoading)`
  animation: ${rotate} 1s linear infinite;
`;