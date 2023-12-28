import { style } from '@vanilla-extract/css';
import React from 'react';
interface InputProps {
  id?: string;
  /*
   * Name:  string
   * */
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  onChange?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <input className={input} {...props} />;
};

const input = style({
  width: '100%',
  marginBottom: '1em',
  padding: '.5em',
  border: '1px solid #FFF',
  fontSize: '1rem',
  borderRadius: '1.5rem',
  outline: 'none',
});

export default Input;
