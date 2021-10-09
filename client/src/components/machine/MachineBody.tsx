import React from 'react';

type Children = {
  children: React.ReactNode;
};

export const MachineBody = ({ children }: Children): JSX.Element => {
  return (
    <section className='app-panel'>
      <div className='app-panel__controls'>.</div>
      <div className='app-panel__controls'>
        <div>{children}</div>
      </div>
    </section>
  );
};
