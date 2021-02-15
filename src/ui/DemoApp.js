// vendor modules
import styled, { createGlobalStyle } from 'styled-components';
// ui
import { backgroundColor, textColor } from 'ui/colors';
import { device } from 'ui/devices';

export const GlobalStyle = createGlobalStyle`
  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-display: swap;
  }
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  html {
    /* Убираем выделение элементов */
    user-select: none;
    /* Убираем выделение элементов на тач устройствах */
    -webkit-tap-highlight-color: transparent;
    cursor: default; 
  }

  /* Убираем дефолтное браузерное выделение активного элемента  */
  :not(div):focus, :not(div):hover, :not(div):active {
    outline: none;
    box-shadow: none; }

  /* Apply base styles */
  #root, body, html {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${backgroundColor.main};
  }

  div, input {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${textColor.dark};
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Немного стилей для скролл бара */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: ${backgroundColor.greylight};
    -webkit-box-shadow: none;
  }

  ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: ${backgroundColor.greylight};
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: ${backgroundColor.grey};
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
      border: 1px solid ${backgroundColor.greylight};
  }

  *:hover::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: rgba(0,0,0,.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DemoFrame = styled(StyledDiv)`
  height: 100%;

  @media ${device.mobileXXXS} {
    padding: 0;
  }
  @media ${device.laptopS} {
    padding: 100px;
  }
`;

export const AppBody = styled(StyledDiv)`
  height: 100%;

  flex-direction: column;

  background-color: ${backgroundColor.light};

  overflow: hidden;
`;

export const Head = styled(StyledDiv)`
  height: 80px;
  padding: 12px;

  background-color: ${backgroundColor.dark};

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
