import React from "react";
import styled from "styled-components";
// import DragSlider from "../components/DragSlider";
// import ProjectItem from "../components/ProjectItem";

export const projectList = [
  {
    title: "Eriden Al Global",
    description:
      "Eriden Global is a complete, cohesive and established group of Al focused software executives and developers with an impressive track record of success in applying AI and Machine Learning to solve incredibly complex business problems.",
  },
  {
    title: "UnBatch.com",
    description:
      "UnBatch is an image and video sharing and discovery platform. As a simple new social networking site, we decided to follow the K.I.S.S philosophy. Keep Internet Sharing Simple. You share and we showcase to help you find cohorts cut from the same cloth.",
  },
  {
    title: "BCC",
    description:
      "BCC is an image and video sharing and discovery platform. As a simple new social networking site, we decided to follow the K.I.S.S philosophy. Keep Internet Sharing Simple. You share and we showcase to help you find cohorts cut from the same cloth.",
  },
];

export default function Projects(props) {
  const amount = projectList.length;

  return (
    <ProjectSection>
      {/* <DragSlider amount={amount}>
        <Transition in={visible} timeout={0}>
          {projectList.map(({ title, description }, index) => (
            <ProjectItem
              status={status}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </Transition>
      </DragSlider> */}
    </ProjectSection>
  );
}

const ProjectSection = styled.section`
  width: auto;
  height: 100vh;
  border: 1px solid green;
  overflow: visible;
  position: relative;
  background: purple;
`;
