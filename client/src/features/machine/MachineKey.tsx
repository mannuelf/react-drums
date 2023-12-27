import React from 'react';

type Props = {
  keyChar?: string;
};

const MachineKey: React.FC = ({ keyChar }: Props) => {
  return <span className='pad-button-char'>{keyChar}</span>;
};

export default MachineKey;
