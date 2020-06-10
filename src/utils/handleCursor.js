import { useTheme } from "styled-components";

export const cursorFollowGrow = (cursorFollow, cursorText, size) => {
  cursorFollow.style.width = `${size}px`;
  cursorFollow.style.height = `${size}px`;
  cursorFollow.style.top = `-${size / 2}px`;
  cursorFollow.style.left = `-${size / 2}px`;
  cursorText.style.opacity = 1;
  cursorText.style.left = "0";
  cursorText.style.top = "20px";
};

export const cursorFollowShrink = (cursorFollow, cursorText, size) => {
  cursorFollow.style.width = `${size}px`;
  cursorFollow.style.height = `${size}px`;
  cursorFollow.style.top = `-${size / 2}px`;
  cursorFollow.style.left = `-${size / 2}px`;
  cursorText.style.opacity = 0;
  cursorText.style.left = "0px";
  cursorText.style.top = "0px";
};

export default cursorFollowGrow;
