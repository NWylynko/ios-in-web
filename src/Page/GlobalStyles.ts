import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {

    --colorWhite: ${props => props.theme.color.white};
    --colorBlack: ${props => props.theme.color.black};

    --iosColorRed: ${props => props.theme.ios.color.red};
    --iosColorOrange: ${props => props.theme.ios.color.orange};
    --iosColorYellow: ${props => props.theme.ios.color.yellow};
    --iosColorGreen: ${props => props.theme.ios.color.green};
    --iosColorMint: ${props => props.theme.ios.color.mint};
    --iosColorTeal: ${props => props.theme.ios.color.teal};
    --iosColorCyan: ${props => props.theme.ios.color.cyan};
    --iosColorBlue: ${props => props.theme.ios.color.blue};
    --iosColorIndigo: ${props => props.theme.ios.color.indigo};
    --iosColorPurple: ${props => props.theme.ios.color.purple};
    --iosColorPink: ${props => props.theme.ios.color.pink};
    --iosColorBrown: ${props => props.theme.ios.color.brown};

    --iosColorGray: ${props => props.theme.ios.color.gray};
    --iosColorGray2: ${props => props.theme.ios.color.gray2};
    --iosColorGray3: ${props => props.theme.ios.color.gray3};
    --iosColorGray4: ${props => props.theme.ios.color.gray4};
    --iosColorGray5: ${props => props.theme.ios.color.gray5};
    --iosColorGray6: ${props => props.theme.ios.color.gray6};
  }
`;

export default GlobalStyles;