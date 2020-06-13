import React, { useRef, useEffect, useCallback } from "react";
import { getTransformX } from "../utils/getTransformX";
import styled from "styled-components";
import { TweenMax, Power1, Back, Elastic, Expo } from "gsap";
import PropTypes from "prop-types";

import ProjectItem from "./ProjectItem";

const Slider = ({
  sliderSettings: {
    data = [],
    speed = 500,
    easing = null,
    bgColor = "rgba(255, 255, 255, 0.05)",
    showButton = true,
    buttonHref = "#",
    buttonTarget = "_blank",
    buttonText = "View case study",
  },
}) => {
  // Check for exceptions
  if (!data.length) {
    console.warn(
      "DRAGSLIDER - Please add a valid data array of objects with title, image and description"
    );
    return;
  }

  // Determine easings
  if (easing) {
    switch (easing) {
      case "power":
        easing = Power1.easeOut;
        break;
      case "back":
        easing = Back.easeOut;
        break;
      case "elastic":
        easing = Elastic.easeOut;
        break;
      case "expo":
        easing = Expo.easeOut;
        break;
      default:
        console.warn(
          "DRAGSLIDER - Please set a valid easing e.g. Power1.easeIn"
        );
        easing = null;
    }
  }

  let wrapper = useRef();
  let start = { x: 0, y: 0 };
  let dragging = false;
  let curItem = 0;
  let windowWidth = window.innerWidth;
  let items;
  let amount = data.length;

  // List all project items when component is ready
  useEffect(() => {
    amount--;
    items = Array.from(document.querySelectorAll(".project-item"));
  }, []);

  // Handle resize
  const handleResize = () => {
    windowWidth = window.innerWidth;
  };

  // Tween with gsap
  const slide = useCallback((durationMilliseconds, newX, direction) => {
    let nextOffset;
    let nextItem;
    // Slide to next item
    if (items.length) {
      nextItem = items.filter(
        (item) => parseInt(item.dataset.id) === curItem
      )[0];
      nextOffset = nextItem.offsetLeft;
    }

    if (direction) {
      if (direction === "right") {
        if (curItem < amount) curItem++;
      } else if (direction === "left") {
        if (curItem > 0) curItem--;
      }
      newX = nextOffset * -1;
    }

    // Set boundries
    if (newX > 500) newX = 0;
    if (newX < -windowWidth * amount) newX = getTransformX(wrapper.current);

    const durationSeconds = durationMilliseconds / 1000;

    TweenMax.to(wrapper.current, durationSeconds, {
      x: newX,
      ease: easing,
    });
  }, []);

  const handleDown = useCallback((e) => {
    // Determine touch or click
    let x, y;
    if (e.type == "touchstart") {
      const touch = e.touches[0] || e.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
    } else {
      x = e.pageX;
      y = e.pageY;
    }
    start.x = x;
    start.y = y;
    dragging = true;
  }, []);

  const handleMove = useCallback((e) => {
    // Determine touch or click
    let x, y;
    if (e.type == "touchmove") {
      const touch = e.touches[0] || e.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
    } else {
      x = e.pageX;
      y = e.pageY;
    }
    // Slide on mouse down and move
    if (dragging) {
      // Get current x value
      const curX = getTransformX(wrapper.current);
      // Determine dragged distance
      const distance = start.x - x;
      const newX = curX - distance;
      slide(speed, newX, null);
    }
  }, []);

  const handleUp = useCallback((e) => {
    // Determine touch or click
    let x, y;
    if (e.type == "touchend") {
      const touch = e.touches[0] || e.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
    } else {
      x = e.pageX;
      y = e.pageY;
    }
    dragging = false;
    // On mouse up, slide to next project item
    // Determine direction
    let direction = start.x > x ? "right" : "left";
    slide(speed, null, direction);
  }, []);

  // Startup
  useEffect(() => {
    slide();

    if (windowWidth > 768) {
      window.addEventListener("resize", handleResize);
      wrapper.current.addEventListener("mousedown", handleDown);
      wrapper.current.addEventListener("mousemove", handleMove);
      wrapper.current.addEventListener("mouseup", handleUp);
    } else {
      // Mobile touch support
      wrapper.current.addEventListener("touchstart", handleDown);
      wrapper.current.addEventListener("touchmove", handleMove);
      wrapper.current.addEventListener("touchend", handleUp);
    }

    // Cleanup
    return () => {
      if (windowWidth > 768) {
        window.removeEventListener("resize", handleResize);
        wrapper.current.removeEventListener("mousedown", handleDown);
        wrapper.current.removeEventListener("mousemove", handleMove);
        wrapper.current.removeEventListener("mouseup", handleUp);
      } else {
        wrapper.current.removeEventListener("touchstart", handleDown);
        wrapper.current.removeEventListener("touchmove", handleMove);
        wrapper.current.removeEventListener("touchend", handleUp);
      }
    };
  }, [handleDown, handleMove, handleUp, slide]);

  return (
    <Wrapper
      style={{ transform: "translate3d(0, 0, 0)" }}
      ref={wrapper}
      bgColor={bgColor}
    >
      {data.map(({ ...props }, index) => {
        return (
          <ProjectItem
            {...props}
            showButton={showButton}
            buttonHref={buttonHref}
            buttonTarget={buttonTarget}
            buttonText={buttonText}
            index={index}
            key={index}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background: ${(props) => props.bgColor};
`;

Slider.propTypes = {
  data: PropTypes.array,
};

export default Slider;
