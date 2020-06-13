import React, { Fragment } from "react";
import styled from "styled-components";

const ButtonContent = ({ children }) => {
  return <Fragment>{children && <ButtonText>{children}</ButtonText>}</Fragment>;
};

export const LinkButton = (props) => {
  const { className, style, href, rel, target, ...rest } = props;

  return (
    <ButtonContainer
      as="a"
      className={className}
      style={style}
      href={href}
      rel={rel || target === "_blank" ? "noopener noreferrer" : null}
      target={target}
    >
      <ButtonContent {...rest} />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background: none;
  height: 46px;
  padding: "0 19px";
  border: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ${(props) => props.theme.curveFastoutSlowin};
  display: flex;
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.backgroundColor};
  text-decoration: none;
  font-family: inherit;
  position: relative;
  z-index: 1;

  &::-moz-focus-inner {
    border: 0;
  }

  &:active {
    transform: scale(1);
    transition-duration: 0.1s;
  }

  background: none;
  position: relative;
  transition: transform 0.8s ease;

  &:before {
    content: "";
    position: absolute;
    width: 46px;
    height: 46px;
    background-color: ${(props) => props.theme.accentColor};
    border-radius: 40px;
    left: 0px;
    z-index: -1;
    transition: width 250ms ease;
  }

  &:hover {
    &:before {
      width: 100%;
    }
    svg {
      transform: translateX(5px);
    }
  }
`;

const ButtonText = styled.span`
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 400;
  position: relative;
  line-height: 1;
  flex: 1 1 auto;
  text-transform: uppercase;
  letter-spacing: ${(props) => props.theme.letterSpacing};
  opacity: 0.85;
  padding: 0 19px;
  color: ${(props) => props.theme.textColor};
`;

export default LinkButton;
