import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Input from '../../components/common/Input';
import Label from '../../components/common/Label';
import { AUTH_JWT } from '../../constants';

const LoginForm: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const error = useSelector((state: any) => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loggedIn: false,
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
      dispatch({ type: 'store/LOGIN' });
      formState.loggedIn = true;
      navigate('/machine');
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
      localStorage.setItem(AUTH_JWT, signup.token);
      navigate('/machine');
    },
  });

  if (error && !user) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='form'>
        <h3>{formState.loggedIn ? 'Login' : 'Sign Up'}</h3>
        {!formState.loggedIn && (
          <div>
            <div>
              <Label htmlFor='firstName' label='First Name *' />
              <Input
                id='firstName'
                name='firstName'
                type='text'
                value={formState.firstName}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    firstName: e.target.value,
                  })
                }
              />
              {error ? 'First name required' : ''}
            </div>
            <div>
              <Label htmlFor='lastName' label='Last Name' />
              <Input
                id='lastName'
                name='lastName'
                type='text'
                value={formState.lastName}
                onChange={(e) =>
                  setFormState({ ...formState, lastName: e.target.value })
                }
              />
            </div>
          </div>
        )}
        <div>
          <Label htmlFor='email' label='Email *' />
          <Input
            id='email'
            name='email'
            type='text'
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor='password' label='Password *' />
          <Input
            id='password'
            name='password'
            type='password'
            value={formState.password}
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
          />
        </div>
        <div>
          <button onClick={() => (formState.loggedIn ? login() : signup())}>
            {formState.loggedIn ? 'Login' : 'Sign Up'}
          </button>
          <button
            onClick={() =>
              setFormState({
                ...formState,
                loggedIn: !formState.loggedIn,
              })
            }
          >
            {formState.loggedIn
              ? 'Create an account?'
              : 'Already have an account?'}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
