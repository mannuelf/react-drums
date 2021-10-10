import { LoginForm } from 'components/forms/login/LoginForm';
import styled from 'styled-components';

export const Welcome = (): JSX.Element => {
  return (
    <Section>
      <div>
        <h1 role='heading'>Machine</h1>
        <p role='article'>email: admin@admin.com password: admin</p>
      </div>
      <LoginForm />
    </Section>
  );
};

const Section = styled('section')({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  maxWidth: '680px',
  margin: '2em auto',
  borderRadius: '0.5em',
  padding: '1em',
  '& > div': {
    margin: '0 1em',
  },
});
