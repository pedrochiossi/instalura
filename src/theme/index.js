import { typographyVariants } from './typographyVariants';

export const colors = {
  modes: {
    dark: {
      background: {
        color: '#030506'
      },
      borders: {
        color: '#181F22'
      },
      logo: {
        color: '#FFFFFF'
      },
      primary: {
        color: '#D7385E',
        contrastText: '#fff'
      },
      secondary: {
        color: '#FFA59A',
        contrastText: '#fff'
      },
      tertiary: {
        color: '#FFFFFF',
        main: {
          color: '#D5D5D5'
        } 
      }
    },
    light: {
      background: {
        color: '#F2F2F2',
      },
      primary: {
        color: '#D7385E',
        contrastText: '#fff'
      },
      secondary: {
        color: '#FB7B6B',
        contrastText: '#fff'
      },
      tertiary: {
        color: '#88989E',
        contrastText: '#fff',
        main: {
          color: '#070C0E',
          contrastText: '#fff'
        }
      },
      borders: {
        color: '#F2F2F2',
      },
      background: {
        color: '#FFFFFF'
      },
      logo: {
        color: '#070C0E' 
      }
    }
  },
};

export const defaults = {
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768,  // medium
    lg: 992, // large
    xl: 1200  //extra large
  }
}

export const lightTheme = {
  ...defaults,
  colors: colors.modes.light
}

export const darkTheme = {
  ...defaults,
  colors: colors.modes.dark
}

export { GlobalStyle } from './globalStyle';