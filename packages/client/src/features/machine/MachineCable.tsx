import React from 'react';
import { machineCable, machineCableBase } from './MachineCable.css';

const MachineCable: React.FC = () => {
  return (
    <div className={machineCableBase}>
      <div className={machineCable} />
    </div>
  );
};

export default MachineCable;
