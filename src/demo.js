import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./";
import Cursor from "./components/Cursor";
import { theme } from "./app/theme";
import { GlobalStyles } from "./app/styles";
import isEdge from "./utils/isEdge";

import { projectList } from "./app/data";

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {!isEdge && <Cursor />}
      <App data={projectList} />
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
