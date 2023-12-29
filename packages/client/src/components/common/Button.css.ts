import { style } from '@vanilla-extract/css';
import { ButtonProps } from './Button';

export const buttonStyle = (props: ButtonProps) =>
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
