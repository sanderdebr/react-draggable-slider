import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import App from "./app/";
import { theme } from "./app/theme";
import { GlobalStyles } from "./app/styles";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
