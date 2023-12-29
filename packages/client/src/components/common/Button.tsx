import React from 'react';
import { buttonStyle } from './Button.css';

export interface ButtonProps {
  btnBgColor?: string;
  btnRadius?: number;
  btnBoxShadow?: boolean;
  btnAlign?: string;
  btnPadding?: number;
  btnWidth?: number;
  onClick?: () => void;
  children?: React.ReactNode; // Add the children property
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={buttonStyle(props)} onClick={props.onClick}>
      {props.children} {/* Use the children property */}
    </button>
  );
};

export default Button;
