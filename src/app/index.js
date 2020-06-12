import React from "react";
import styled from "styled-components";
import { projectList } from "./data";

import DragSlider from "../components/DragSlider";

export default function App(props) {
  const berend = {};
  return (
    <Wrapper id="projects">
      <DragSlider
        data={projectList}
        speed={1200}
        easing={"back"}
        bgColor="rgba(255, 255, 255, 0.05)"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
`;
