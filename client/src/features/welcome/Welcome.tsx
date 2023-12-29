import { style } from '@vanilla-extract/css';
import React from 'react';
import { LOGO } from '../../constants';
import LoginForm from '../../features/login/LoginForm';

const sectionStyle = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  maxWidth: '620px',
  margin: '2em auto',
  borderRadius: '0.5em',
  padding: '1em',
  selectors: {
    '& > div': {
      margin: '0 1em',
    },
  },
});

const Welcome: React.FC = () => {
  return (
    <section className={sectionStyle}>
      <div>
        <h1 role='heading'>
          <img
            src={LOGO.light}
            className='logo'
            alt='Machine Micro'
            width='220'
          />
        </h1>
        <p>
          Welcome to Machine Micro. A drum machine inspired by Native
          Instruments MASCHINE MIKRO.
        </p>
        <LoginForm />
      </div>
    </section>
  );
};

export default Welcome;
