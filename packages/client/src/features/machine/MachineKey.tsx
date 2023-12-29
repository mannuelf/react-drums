import React from 'react';
import { machineKeyStyle } from './MachineKey.css';

type Props = {
  keyChar: string;
};

const MachineKey: React.FC<Props> = ({ keyChar }) => {
  return <span className={machineKeyStyle}>{keyChar}</span>;
};

export default MachineKey;
