import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import regularFont from './assets/fonts/OpenSans-Regular.ttf';
import lightFont from './assets/fonts/OpenSans-Light.ttf';
import boldFont from './assets/fonts/OpenSans-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'OpenSans';
    src: url(${regularFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${lightFont}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${boldFont}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'OpenSans';
    font-weight: 400;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    list-style-type: none;
  }

  button {
    background-color: transparent;
    padding: 0;
    border: none;
  }
`;

export const Main = styled.main`
  max-width: 980px;
  margin: 0 auto;
`;
