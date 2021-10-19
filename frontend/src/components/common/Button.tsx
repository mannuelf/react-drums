import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

interface ButtonProps {
  btnAlign?: string;
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
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.btnBgColor ? props.btnBgColor : '#10ace4'};
  border-radius: ${(props) =>
    props.btnRadius ? `${props.btnRadius}rem` : '1.5rem'};
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

Button.propTypes = {
  /**
   * Align the button in one of three ways.
   */
  btnAlign: t.oneOf(['center', 'left', 'right']),
  /**
   * Disable the button
   */
  disabled: t.oneOf([true, false]),
  /**
   * Change the background color of button
   */
  btnBgColor: t.oneOf(['yellowgreen', 'FFF9900']),
  /**
   * Change the padding and size of button
   */
  btnPadding: t.oneOf(['0.5', '1']),
  /**
   * Round or square button?
   */
  btnRadius: t.oneOf(['0.5', '1']),
  /**
   * Short or wide button?
   */
  btnWidth: t.oneOf(['100', '220']),
  /**
   * Add box-shadow
   */
  btnBoxShadow: t.oneOf([true, false]),
  /**
   * Add a custom class
   */
  className: t.oneOf(['some-class', undefined]),
};

export default Button;
