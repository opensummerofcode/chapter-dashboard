import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { colors } from './constants';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #fff;
    color: ${colors.black};
    font-size: 1.6rem;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    line-height: 1.6;
  }
`;

export default GlobalStyle;
