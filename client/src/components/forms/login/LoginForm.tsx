import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { gql, useMutation } from '@apollo/client';
import { AUTH_JWT } from '../../../constants';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $firstName: String!
  ) {
    signup(email: $email, password: $password, firstName: $firstName) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const LoginForm = (): JSX.Element => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    firstName: '',
    email: '',
    password: '',
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_JWT, login.token);
      history.push('/');
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.firstName,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_JWT, signup.token);
      history.push('/');
    },
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('submitting', e.timeStamp);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <h3>{formState.login ? 'Login' : 'Sign Up'}</h3>
        {!formState.login && (
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input
              value={formState.firstName}
              onChange={(e) =>
                setFormState({ ...formState, firstName: e.target.value })
              }
              name='firstName'
              id='firstName'
              type='text'
              placeholder='Enter first name'
            />
          </div>
        )}
        <div>
          <label htmlFor='email'>Email</label>
          <input
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            name='email'
            id='email'
            type='text'
            placeholder='Enter valid email address'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
            name='password'
            id='password'
            type='password'
            placeholder='Enter safe password'
          />
        </div>
        <div>
          <button
            onClick={() => (formState.login ? login : signup)}
            type='submit'
          >
            {formState.login ? 'Login' : 'Sign Up'}
          </button>
          <button
            className='pointer button'
            onClick={(e) =>
              setFormState({
                ...formState,
                login: !formState.login,
              })
            }
          >
            {formState.login
              ? 'need to create an account?'
              : 'already have an account?'}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
