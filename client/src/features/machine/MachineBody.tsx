import React from 'react';

type Children = {
  children: React.ReactNode;
};

const MachineBody: React.FC<Children> = ({ children }) => {
  return (
    <section className='app-panel'>
      <div className='app-panel__controls'>.</div>
      <div className='app-panel__controls'>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default MachineBody;
