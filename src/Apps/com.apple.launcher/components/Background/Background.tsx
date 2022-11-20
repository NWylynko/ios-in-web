import React from "react"
import styled from "styled-components"

import { loadImage } from "../../../../Suspense/loadImage"

import { backgrounds } from "./images"

const backgroundImage = backgrounds["ios15"]

export const Background = () => {

  loadImage(backgroundImage).read();

  return (
    <>
      <Image src={backgroundImage} />
    </>
  )
}

const Image = styled.img`
  height: var(--full-height);
  width: var(--full-width);
  position: absolute;
  inset: 0;
`;