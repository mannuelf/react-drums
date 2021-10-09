import React from 'react';

type Props = {
  keyChar: string;
};

export const MachineKey = ({ keyChar }: Props): JSX.Element => {
  return <span className='pad-button-char'>{keyChar}</span>;
};
