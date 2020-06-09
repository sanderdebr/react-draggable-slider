import React, { useRef, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { isDescendant } from "../utils/isDescendant";

const Cursor = () => {
  const cursorFollow = useRef();
  const cursorSmall = useRef();
  const cursorText = useRef();
  const theme = useTheme();

  const cursorFollowGrow = () => {
    cursorFollow.current.style.width = `${theme.cursorFollowSize}px`;
    cursorFollow.current.style.height = `${theme.cursorFollowSize}px`;
    cursorFollow.current.style.top = `-${theme.cursorFollowSize / 2}px`;
    cursorFollow.current.style.left = `-${theme.cursorFollowSize / 2}px`;
    cursorText.current.style.opacity = 1;
    cursorText.current.style.left = "0";
    cursorText.current.style.top = "20px";
  };

  const cursowFollowShrink = (size) => {
    cursorFollow.current.style.width = `${size}px`;
    cursorFollow.current.style.height = `${size}px`;
    cursorFollow.current.style.top = `-${size / 2}px`;
    cursorFollow.current.style.left = `-${size / 2}px`;
    cursorText.current.style.opacity = 0;
    cursorText.current.style.left = "0px";
    cursorText.current.style.top = "0px";
  };

  const onMouseMove = (event) => {
    const {
      pageX: x,
      pageY: y,
      target: { tagName },
    } = event;

    // Default
    document.body.style.cursor = "default";
    cursorSmall.current.style.display = "block";
    cursorSmall.current.style.backgroundColor = "rgb(6, 170, 245)";
    cursorSmall.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    cursorFollow.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    cursorText.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    cursowFollowShrink(30);

    // Hovering projects section
    if (isDescendant("projects", event.target, true)) {
      cursorFollowGrow();
      document.body.style.cursor = "grab";
    }

    // Hovering A tags
    if (
      isDescendant("A", event.target) ||
      tagName === "A" ||
      tagName === "circle" ||
      tagName === "svg"
    ) {
      cursorFollowGrow();
      cursorText.current.style.opacity = 0;
      cursorSmall.current.style.backgroundColor = theme.secondaryAccentColor;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <CursorFollow ref={cursorFollow}></CursorFollow>
      <CursorText ref={cursorText}>DRAG</CursorText>
      <CursorSmall ref={cursorSmall}></CursorSmall>
    </>
  );
};

const CursorSmall = styled.div`
  position: absolute;
  pointer-events: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 2;
  margin-top: -3px;
  margin-left: -3px;
  background-color: ${(props) => props.theme.accentColor};
  transition: background-color ${(props) => props.theme.easeFlowFast};
  transition-duration: 400ms;
  transition-delay: 0;
`;

const CursorFollow = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -15px;
  left: -15px;
  pointer-events: none;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.headingColor};
  z-index: 2;
  background: transparent;
  transition: all ${(props) => props.theme.easeFlowFast};
  transition-duration: 300ms;
  transition-delay: 0;
`;

const CursorText = styled.div`
  position: absolute;
  z-index: 2;
  background: transparent;
  pointer-events: none;
  letter-spacing: ${(props) => props.theme.letterSpacing};
  font-size: 1rem;
  opacity: 0;
  transition: all ${(props) => props.theme.easeFlowFast};
  transition-duration: 600ms;
  transition-delay: 0;
  margin-left: -21px;
  margin-top: -12px;
`;

export default Cursor;
