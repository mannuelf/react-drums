import { style } from '@vanilla-extract/css';
import React from 'react';

type Children = {
  children: React.ReactNode;
};

const MachineBody: React.FC<Children> = ({ children }) => {
  return (
    <section className={panelStyle}>
      <div className={panelControlsStyle}>.</div>
      <div className={panelControlsStyle}>
        <div className={controlsStyle}>{children}</div>
      </div>
    </section>
  );
};

const controlsStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(64px, 1fr))',
  gridGap: '16px',
  padding: '1.5em 0 0 0',
  height: 'auto',
  width: '100%',
  borderTop: '1px solid #222',
  zIndex: 5,
});

const panelStyle = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  zIndex: 5,
});

const panelControlsStyle = style({
  flexGrow: 1,
  color: '#333',
  selectors: {
    '&:first-child': {
      display: 'none',
      '@media': {
        '(min-width: 767px)': {
          display: 'block',
        },
      },
    },
  },
});

export default MachineBody;
