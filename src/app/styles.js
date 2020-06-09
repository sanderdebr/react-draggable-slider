import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: ${(props) => props.theme.fontStack};
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    border: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-weight: 300;
    line-height: 1.7rem;
    scroll-behavior: smooth;
    overflow-y: ${(props) => (props.pulled ? "visible" : "hidden")} ;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ::selection {
    background: ${(props) => props.theme.secondaryAccentColor}; 
  }
  ::-moz-selection {
    background: ${(props) => props.theme.secondaryAccentColor}; ;
  }
`;

export default GlobalStyles;
