// styled.d.ts
import 'styled-components';

interface SystemColors {
  red: string;
  orange: string;
  yellow: string;
  green: string;
  mint: string;
  teal: string;
  cyan: string;
  blue: string;
  indigo: string;
  purple: string;
  pink: string;
  brown: string;

  gray: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    ios: {
      color: SystemColors
    }
  }
}