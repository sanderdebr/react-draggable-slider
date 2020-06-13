const fontStack = [
  "Inria",
  "Heebo",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "San Francisco",
  "Roboto",
  "Segoe UI",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Helvetica Neue",
  "sans-serif",
];

const responsive = {
  desktop: 1600,
  tablet: 1024,
};

const fonts = {
  fontSize: "17px",
  letterSpacing: "0.01em",
  lineHeight: "28px",
  fontStack: fontStack.join(", "),
};

const colors = {
  backgroundColor: "#09091f",
  textColor: "#fff",
  accentColor: "#06aaf5",
};

export const theme = {
  ...responsive,
  ...fonts,
  ...colors,
  cursorFollowSize: 100,
};

export default theme;
