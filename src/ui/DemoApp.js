// vendor modules
import styled, { createGlobalStyle } from 'styled-components';
// ui
import { backgroundColor, textColor } from 'ui/colors';
import { device } from 'ui/devices';

export const GlobalStyle = createGlobalStyle`
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
