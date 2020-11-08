import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      firstMain: string;
      secondMain: string;
      secondary: string;
    };
    textColors: {
      main: string;
      secondary: string;
    };
  }
}
