import React from 'react';
import { LOGO } from '../../constants';
import { column, machineHeader, machineHeaderLcd, machineHeaderLcdContainer, machineHeaderLogo, machineSubTitle, machineTitle } from './MachineHeader.css';

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
            <hgroup className={machineHeaderLcdContainer}>
              <h1 className={machineTitle}>Micro v1.0.0</h1>
              <h2 className={machineSubTitle}>KIT: 808</h2>
            </hgroup>
          </div>
        </div>
      </header>
    </>
  );
};

export default MachineHeader;
