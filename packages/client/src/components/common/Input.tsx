import React from 'react';
import { input } from './Input.css';
interface InputProps {
  id?: string;
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

export default Input;
