import { useState } from 'react';
import { useHistory } from 'react-router';
import { gql, useMutation } from '@apollo/client';
import { AUTH_JWT } from '../../../constants';

const LoginForm = (): JSX.Element => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    login: true,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
      $email: String!
      $password: String!
      $firstName: String!
      $lastName: String!
    ) {
      signup(
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      ) {
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
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      console.log('useMutation >', signup);
      localStorage.setItem(AUTH_JWT, signup.token);
      history.push('/machine');
    },
  });

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='form'>
        <h3>{formState.login ? 'Login' : 'Sign Up'}</h3>
        {!formState.login && (
          <div>
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
            <div>
              <label htmlFor='lastName'>Last Name</label>
              <input
                value={formState.lastName}
                onChange={(e) =>
                  setFormState({ ...formState, lastName: e.target.value })
                }
                name='firstName'
                id='firstName'
                type='text'
                placeholder='Enter first name'
              />
            </div>
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
            onClick={() => (formState.login ? login() : signup())}
            type='submit'
          >
            {formState.login ? 'Login' : 'Sign Up'}
          </button>
          <button
            className='pointer button'
            onClick={() =>
              setFormState({
                ...formState,
                login: !formState.login,
              })
            }
          >
            {formState.login
              ? 'Create an account?'
              : 'Already have an account?'}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
