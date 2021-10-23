import React from 'react';
import { LOGO } from '../../constants';

const MachineHeader: React.FC = (): JSX.Element => {
  return (
    <>
      <header className='app-header'>
        <div className='column'>
          <img src={LOGO.light} className='logo' alt='Machine Micro' />
        </div>
        <div className='column'>
          <div className='app-header-lcd'>
            <h1>
              Micro v.0.0.3
              <div>KIT: 808</div>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default MachineHeader;
