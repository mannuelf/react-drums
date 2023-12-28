import { style } from '@vanilla-extract/css';
import React from 'react';

interface ButtonProps {
  btnBgColor?: string;
  btnRadius?: number;
  btnBoxShadow?: boolean;
  btnAlign?: string;
  btnPadding?: number;
  btnWidth?: number;
  onClick?: () => void;
  children?: React.ReactNode; // Add the children property
}

const buttonStyle = (props: ButtonProps) =>
  style({
    backgroundColor: props.btnBgColor ? props.btnBgColor : '#10ace4',
    borderRadius: props.btnRadius ? `${props.btnRadius}px` : '4px',
    border: 'none',
    boxShadow: props.btnBoxShadow ? '2px 2px 3px rgba(0, 0, 0, 0.6)' : 'none',
    color: '#fff',
    cursor: 'pointer',
    float: 'none',
    height: 'auto',
    marginRight: '0.5em',
    padding: props.btnPadding ? `${props.btnPadding}rem` : '0.5rem',
    width: props.btnWidth ? `${props.btnWidth}px` : 'auto',
  });

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={buttonStyle(props)} onClick={props.onClick}>
      {props.children} {/* Use the children property */}
    </button>
  );
};

export default Button;
