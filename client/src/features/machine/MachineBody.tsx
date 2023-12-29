import React from 'react';
import { machineBodyInner, machineBodyMain, machineLayoutColumn } from './MachineBody.css';

type Children = {
  children: React.ReactNode;
};

const MachineBody: React.FC<Children> = ({ children }) => {
  return (
    <section className={machineBodyMain}>
      <div className={machineLayoutColumn}>.</div>
      <div className={machineLayoutColumn}>
        <div className={machineBodyInner}>{children}</div>
      </div>
    </section>
  );
};

export default MachineBody;
