import { style } from '@vanilla-extract/css';
import React from 'react';

type Props = {
  htmlFor: string;
  label: string;
};

const Label: React.FC<Props> = ({ ...props }) => {
  return <label className={label}  htmlFor={props.htmlFor}>{props.label}</label>;
};

const label = style({
  width: '100%',
  marginBottom: '1rem',
  fontSize: '1em',
  color: '#ccc',
});

export default Label;
