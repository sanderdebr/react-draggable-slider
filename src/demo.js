import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

import Slider from "./components/Slider";
import Cursor from "./components/Cursor";
import { theme } from "./app/theme";
import { GlobalStyles } from "./app/styles";
import isEdge from "./utils/isEdge";

import { projectList } from "./app/data";

const sliderSettings = {
  data: projectList,
  speed: 1200,
  easing: "expo",
  bgColor: "rgba(255, 255, 255, 0.05)",
  buttonHref: "https://www.google.com",
  buttonTarget: "_self",
  buttonText: "View project",
  showButton: true,
};

const Wrapper = styled.section`
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {!isEdge && <Cursor />}
      <Wrapper id="projects">
        <Slider sliderSettings={sliderSettings} />
      </Wrapper>
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
