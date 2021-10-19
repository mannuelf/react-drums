import React from 'react';
import styled from 'styled-components';
import { LOGO } from '../../constants';
import LoginForm from '../../features/login/LoginForm';

const Welcome = (): JSX.Element => {
  return (
    <Section>
      <div>
        <h1 role='heading'>
          <img src={LOGO} className='logo' alt='Machine Micro' width='220' />
        </h1>
        <p>
          Welcome to Machine Micro. A drum machine inspired by Native
          Instruments MASCHINE MIKRO.
        </p>
        <LoginForm />
      </div>
    </Section>
  );
};

const Section = styled('section')({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  maxWidth: '620px',
  margin: '2em auto',
  borderRadius: '0.5em',
  padding: '1em',
  '& > div': {
    margin: '0 1em',
  },
});

export default Welcome;
