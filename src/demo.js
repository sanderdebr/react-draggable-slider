import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./";
import Cursor from "./components/Cursor";
import { theme } from "./app/theme";
import { GlobalStyles } from "./app/styles";
import isEdge from "./utils/isEdge";

import { projectList } from "./app/data";

const sliderSettings = {
  data: projectList,
  speed: 3000,
  easing: "elastic",
  bgColor: "rgba(255, 255, 255, 0.05)",
  buttonHref: "https://www.google.com",
  buttonTarget: "_self",
  buttonText: "View project",
  showButton: true,
};

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {!isEdge && <Cursor />}
      <App sliderSettings={sliderSettings} />
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
