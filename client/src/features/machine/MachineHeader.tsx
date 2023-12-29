import React from 'react';
import { LOGO } from '../../constants';
import {
  machineColumn,
  machineHeader,
  machineHeaderLcd,
  machineHeaderLcdContainer,
  machineHeaderLogo,
  machineSubTitle,
  machineTitle,
} from './MachineHeader.css';

const MachineHeader: React.FC = () => {
  return (
    <>
      <header className={machineHeader}>
        <div className={machineColumn}>
          <img
            src={LOGO.light}
            className={machineHeaderLogo}
            alt='Machine Micro'
          />
        </div>
        <div className={machineColumn}>
          <div className={machineHeaderLcd}>
            <hgroup className={machineHeaderLcdContainer}>
              <h1 className={machineTitle}>Micro v1.0.0</h1>
              <h2 className={machineSubTitle}>
                <span>KIT</span> 808
              </h2>
            </hgroup>
          </div>
        </div>
      </header>
    </>
  );
};

export default MachineHeader;
