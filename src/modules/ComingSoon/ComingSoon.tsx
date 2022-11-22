import styled from "styled-components";
import { loadImage } from "module/Suspense/loadImage";
import { useAppManager } from "ios/AppManager";

type ComingSoonProps = {
  name: string;
  icon: string;
};

export const ComingSoon = ({ name, icon }: ComingSoonProps) => {
  loadImage(icon).read();
  const openApp = useAppManager((state) => state.openApp);
  return (
    <Container>
      <Image src={icon} />
      <Text>
        Sorry but <strong>{name}</strong> has not been built yet. Don't worry we are working hard and it should be done
        soon.
      </Text>
      <Button onClick={() => openApp("ios.launcher")}>Go Home</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 16px;
  align-items: center;
  gap: 32px;
`;

const Image = styled.img`
  height: 128px;
  width: 128px;
  
`;

const Text = styled.span``;

const Button = styled.button`
  padding: 12px 28px;
  border: none;
  border-radius: 18px;
  color: ${({ theme }) => theme.ios.color.blue};
  background-color: ${({ theme }) => theme.ios.color.gray5};
  font-weight: bold;
  font-size: 16px;
`;
