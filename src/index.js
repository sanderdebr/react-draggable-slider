import React from "react";
import styled from "styled-components";

import Slider from "./components/Slider";

export const App = (props) => {
  const { data, speed, easing, bgColor } = props;
  return (
    <Wrapper id="projects">
      <Slider data={data} speed={speed} easing={easing} bgColor={bgColor} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;

export default App;
