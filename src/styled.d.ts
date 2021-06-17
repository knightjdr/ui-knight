import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string
        white: string
      }
      alert: string
      primary: string
      success: string
      warning: string
    }
  }
}
