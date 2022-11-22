import styled from "styled-components";

type IFrameProps = {
  url: string;
};

export const IFrame = ({ url }: IFrameProps) => {
  return <Frame src={url} />;
};

const Frame = styled.iframe`
  border: none;
  width: var(--full-width);
  height: 100%;
`;
