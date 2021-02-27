import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box
  }

  body {
    background: ${({ theme }) => theme.colors.background.color};
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily}
  }

  ${normalize}
`;