import styled from "styled-components";
import { openApp } from "../../IOS";
import { loadImage } from "../Suspense/loadImage";

type ComingSoonProps = {
  name: string;
  icon: string;
}

export const ComingSoon = ({ name, icon }: ComingSoonProps) => {
  loadImage(icon).read();
  return (
    <Container>
      <Image src={icon} />
      <Text>Sorry but <strong>{name}</strong> has not been built yet. Don't worry we are working hard and it should be done soon.</Text>
      <Button onClick={() => openApp("com.apple.launcher")}>Go Home</Button>
    </Container>
  )
}

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
  font-weight: bold;
  font-size: 16px;
`;