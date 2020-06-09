import React from "react";
import styled from "styled-components";
import { projectList } from "./data";
import DragSlider from "../components/DragSlider";
import ProjectItem from "../components/ProjectItem";

export default function App(props) {
  const amount = projectList.length;

  return (
    <Wrapper>
      <DragSlider amount={amount}>
        {projectList.map(({ title, description }, index) => (
          <ProjectItem
            status={status}
            title={title}
            description={description}
            index={index}
          />
        ))}
      </DragSlider>
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
