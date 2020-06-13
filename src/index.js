import React from "react";
import styled from "styled-components";

import Slider from "./components/Slider";

export const App = ({ sliderSettings }) => (
  <Wrapper id="projects">
    <Slider sliderSettings={sliderSettings} />
  </Wrapper>
);

const Wrapper = styled.section`
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

export default App;
