import { LoginForm } from 'components/forms/login/LoginForm';
import styled from 'styled-components';

export const Welcome = (): JSX.Element => {
  return (
    <Section>
      <div>
        <img
          width={'100%'}
          src='https://res.cloudinary.com/mannuel/image/upload/v1633788761/images/screenshot.png'
          alt='Maschine'
        />
      </div>
      <div>
        <h1 role='heading'>Maschine</h1>
        <p role='article'>Login to play, admin@admin.com, admin</p>
      </div>
      <LoginForm />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  max-width: 640px;
  margin: 1em auto;
  border-radius: 1em;
  padding: 1em;
`;
