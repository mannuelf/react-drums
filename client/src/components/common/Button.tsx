import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

type ButtonProps = {
  /*
   * Align the button: left | right
   */
  btnAlign?: string | null;
  /*
   * Background colour: orange | #FF9900
   */
  btnBgColor?: string;
  /*
   * Padding customisation: 0 | 10
   */
  btnPadding?: string;
  /*
   * Round or square button: 0 | 10
   */
  btnRadius?: string;
  /*
   * Customise button width: 100px | 0.5rem
   */
  btnWidth?: string;
  /*
   * Shadow: frue | false
   */
  btnBoxShadow?: boolean;
  /*
   * ClassName customisation: string | null
   */
  className?: string;
  /*
   * Disabled: true | false | null
   */
  disabled?: boolean;
  /*
   * Type: button | submit | reset
   */
  type?: string;
  /*
   * Name: Submit | Reset
   */
  name?: string;
  /*
   * Text | React Component
   */
  children?: React.ReactNode | React.ReactNode[];
  /*
   * Click: Function
   */
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
