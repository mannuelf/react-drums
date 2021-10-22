import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  /*
   * Align the button centered | left | right
   * */
  btnAlign?: string | null;
  /*
   * Background colour
   * */
  btnBgColor?: string;
  btnPadding?: string;
  btnRadius?: string;
  btnWidth?: string;
  btnBoxShadow?: boolean;
  className?: string;
  disabled?: boolean;
  type?: string;
  children?: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
};

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.btnBgColor ? props.btnBgColor : '#10ace4'};
  border-radius: ${(props) =>
    props.btnRadius ? `${props.btnRadius}px` : '4px'};
  border: none;
  box-shadow: ${(props) =>
    props.btnBoxShadow ? '2px 2px 3px rgba(0, 0, 0, 0.6)' : 'none'};
  color: #fff;
  cursor: pointer;
  float: ${(props) => (props.btnAlign ? props.btnAlign : 'none')};
  height: auto;
  margin-right: 0.5em;
  padding: ${(props) =>
    props.btnPadding ? `${props.btnPadding}rem` : '0.5rem'};
  width: ${(props) => (props.btnWidth ? `${props.btnWidth}px` : 'auto')};
`;

export default Button;
