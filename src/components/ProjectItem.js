import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
// import { RouterButton } from "../components/Button";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectItem = ({ status, title, description, index }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Container
      status={status}
      index={index}
      className="project-item"
      data-id={index}
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      <Content>
        <Left>
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          />
        </Left>
        <Right>
          <NumberWrapper>
            <Number>{index > 10 ? (index += 1) : `0${(index += 1)}`}</Number>
            <NumberTitle>PROJECT</NumberTitle>
          </NumberWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Button left secondary icon="rightArrow" to="/contact">
            View case study
          </Button>
        </Right>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  opacity: 1;
  height: 100vh;
  max-height: 600px;
  width: 80vw;
  border: 1px solid purple;
  padding-left: 140px;
  transition: opacity ease 0.8s 0.8s;
  user-select: none;
`;

const Content = styled.div`
  padding-left: 4em;
  height: 100%;
  border: 1px solid purple;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 300px;
    height: 80%;
    background: grey;
    border-radius: 5px;
    background-image: url(https://insights.digitalpresent.io/wp-content/uploads/2020/03/profile-1.jpg);
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    border: none;

    @media (min-width: ${(props) => props.theme.desktop}px) {
      width: 400px;
      height: 100%;
    }
  }
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  padding: 6rem 2rem;
`;

const Title = styled.h2`
  font-size: 44px;
  margin: 3rem 0;
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  line-height: ${(props) => props.theme.lineHeight};
`;

const NumberWrapper = styled.div`
  position: relative;
  height: 90px;
`;

const Number = styled.h1`
  position: absolute;
  font-size: 190px;
  margin: 0;
  left: 0;
  top: 0;
  opacity: 0.2;
`;

const NumberTitle = styled.div`
  position: absolute;
  left: 0;
  top: 7px;
  letter-spacing: 0.5em;
  opacity: 0.4;
`;

const Button = styled.button`
  margin-top: 1em;
`;

export default ProjectItem;
