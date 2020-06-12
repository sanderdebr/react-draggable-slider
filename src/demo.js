import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import App from "./";
import Cursor from "./components/Cursor";
import { theme } from "./app/theme";
import { GlobalStyles } from "./app/styles";
import isEdge from "./utils/isEdge";

import { projectList } from "./app/data";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {!isEdge && <Cursor />}
      <App data={projectList} />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
