import { createGlobalStyle } from 'styled-components';

export const theme = {
  // Colors
  white: '#fff',
  dark: '#0b2d47',
  green: '#00e0a0',
  lightGreen: '#92efe7',
  pink: '#c149b3',
  purple: '#25164d',

  // Fifty shades of gray
  darkGray: '#666',
  lightGray: '#f2f2f2',

  // Layout
  headerHeight: '60px',
  defaultFontSize: '10px',

  // Typography
  primaryFont: 'Montserrat, sans-serif',
  secondaryFont: '"Slabo 27px", serif',

  // Easing presets
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

  // Breakpoints
  mobileWidth: '480px',
  largeMobileWidth: '600px',
  tabletWidth: '768px',
  desktopWidth: '992px',
  largeDesktopWidth: '1280px',
  xlargeDesktopWidth: '1600px',
};

export const GlobalStyle = createGlobalStyle`
  @-webkit-viewport {
    width: device-width;
  }
  @-moz-viewport {
    width: device-width;
  }
  @-ms-viewport {
    width: device-width;
  }
  @-o-viewport {
    width: device-width;
  }
  @viewport {
    width: device-width;
  }

  html {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-kerning: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    min-height: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${props => props.theme.white};
    color: ${props => props.theme.dark};
    font-family: ${props => props.theme.secondaryFont};
    font-size: ${props => props.theme.defaultFontSize};
  }

  .grid-container {
    width: 98vw;
    max-width: ${props => props.theme.largeDesktopWidth};
    margin: 0 auto;
  }
`;
