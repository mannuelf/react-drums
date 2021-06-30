import { FC } from 'react';

const Welcome: FC = (): JSX.Element => {
  return (
    <>
      <h1 role='heading'>Welcome to the sound machines</h1>
      <p role='article'>
        Login to play, don&apos;t worry this is test application I have already
        created a user for you. admin, admin@email.com,
      </p>
      <a href='/login' role='link'>
        Login
      </a>
    </>
  );
};

export default Welcome;
