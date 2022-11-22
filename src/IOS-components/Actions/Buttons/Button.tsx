import React from "react";
import styled, { css, DefaultTheme, StyledComponent } from "styled-components";

const base = css`
  background-color: transparent;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;

const small = css`
  padding: 4px 8px;
`;

const medium = css`
  font-size: 16px;
  padding: 6px 12px;
`;

const large = css`
  font-size: 16px;
  padding: 16px 24px;
`;

const plain = css`
  color: ${({ theme }) => theme.ios.color.blue};
  background-color: transparent;
`;

const gray = css`
  color: ${({ theme }) => theme.ios.color.blue};
  background-color: ${({ theme }) => theme.ios.color.gray5};
`;

const tinted = css`
  color: ${({ theme }) => theme.ios.color.blue};
  background-color: #d9ebff;
`;

const filled = css`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.ios.color.blue};
`;

const SmallPlain = styled.button`${base}${small}${plain}`;
const SmallGray = styled.button`${base}${small}${gray}`;
const SmallTinted = styled.button`${base}${small}${tinted}`;
const SmallFilled = styled.button`${base}${small}${filled}`;

const MediumPlain = styled.button`${base}${medium}${plain}`;
const MediumGray = styled.button`${base}${medium}${gray}`;
const MediumTinted = styled.button`${base}${medium}${tinted}`;
const MediumFilled = styled.button`${base}${medium}${filled}`;

const LargePlain = styled.button`${base}${large}${plain}`;
const LargeGray = styled.button`${base}${large}${gray}`;
const LargeTinted = styled.button`${base}${large}${tinted}`;
const LargeFilled = styled.button`${base}${large}${filled}`;

const buttons = {
  small: {
    plain: SmallPlain,
    gray: SmallGray,
    tinted: SmallTinted,
    filled: SmallFilled,
  },
  medium: {
    plain: MediumPlain,
    gray: MediumGray,
    tinted: MediumTinted,
    filled: MediumFilled,
  },
  large: {
    plain: LargePlain,
    gray: LargeGray,
    tinted: LargeTinted,
    filled: LargeFilled,
  },
} as const;

type Buttons = typeof buttons;
type Size = keyof Buttons;
type Variant = keyof Buttons[Size];

type DefaultButtonProps = React.ComponentProps<StyledComponent<"button", DefaultTheme, {}, never>>;

type ButtonProps = {
  size: Size;
  variant: Variant;
} & DefaultButtonProps;

export const Button = ({ size, variant, ...props }: ButtonProps) => {
  const SelectedButton = buttons[size][variant];
  return <SelectedButton {...props} />;
};
