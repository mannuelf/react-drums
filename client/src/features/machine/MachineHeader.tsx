import React from 'react';
import { LOGO } from '../../constants';
import { column, machineHeader, machineHeaderLcd, machineHeaderLogo, machineSubTitle, machineTitle } from './MachineHeader.css';

const MachineHeader: React.FC = () => {
  return (
    <>
      <header className={machineHeader}>
        <div className={column}>
          <img
            src={LOGO.light}
            className={machineHeaderLogo}
            alt='Machine Micro'
          />
        </div>
        <div className={column}>
          <div className={machineHeaderLcd}>
            <h1 className={machineTitle}>
              Micro v1.0.0
              <span className={machineSubTitle}>KIT: 808</span>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default MachineHeader;
