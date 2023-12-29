import { style } from '@vanilla-extract/css';
import React from 'react';
import { machineBodyMain, machineLayoutColumn } from './MachineBody.css';

type Children = {
  children: React.ReactNode;
};

const MachineBody: React.FC<Children> = ({ children }) => {
  return (
    <section className={machineBodyMain}>
      <div className={machineLayoutColumn}>.</div>
      <div className={machineLayoutColumn}>
        <div className={machineBodyMain}>{children}</div>
      </div>
    </section>
  );
};

export default MachineBody;
