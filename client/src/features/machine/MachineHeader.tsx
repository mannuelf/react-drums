import { style } from '@vanilla-extract/css';
import React from 'react';
import { LOGO } from '../../constants';

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

const machineHeader = style({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  flexWrap: 'nowrap',
  alignContent: 'flex-start',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  width: '100%',
  height: '48px',
  borderBottom: '1px solid #555',
  zIndex: 5,
});

const machineTitle = style({
  color: '#ccc',
  fontFamily: 'Press Start 2P, Arial, Helvetica, sans-serif',
  lineHeight: '1.4',
  fontSize: '8px',
  fontWeight: 'normal',
  textTransform: 'uppercase',
});

const machineSubTitle = style({
  color: 'yellow',
  fontSize: 12,
});

const machineHeaderLcd = style({
  backgroundColor: '#222',
  border: '1px solid #464646',
  margin: '-10px 0',
  padding: '0.4em 1em',
  borderRadius: '3px',
  boxShadow: 'inset 0 0 5px #111111',
  borderBottom: '1px solid #666',
});

const column = style({
  flexGrow: 1,
  selectors: {
    '&:nth-child(2)': {
      textAlign: 'left',
    },
    '&:nth-child(2) div': {
      color: 'yellow',
    },
  },
  '@media': {
    'screen (min-width: 767px)': {
      width: '336px',
      float: 'right',
    },
  },
});

const machineHeaderLogo = style({
  width: '140px',
  height: 'auto',
});

export default MachineHeader;
