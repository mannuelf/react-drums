import * as React from 'react';
import { describe, expect, test } from '@jest/globals';
// import API mocking utilities from Mock Service Worker.
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';

import LoginForm from './LoginForm';
import { API_URL, AUTH_JWT } from '../../constants';

const fakeJwtToken = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' };
const server = setupServer(
  rest.post(API_URL, (req, res, ctx) => {
    return res(ctx.json(fakeJwtToken));
  }),
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  window.localStorage.removeItem(AUTH_JWT);
});
afterAll(() => server.close());

describe('Login Form', () => {
  test('loads form with no issue', () => {
    render(<LoginForm />);
  });

  test('allows user to register successfully', async () => {
    // fill out the form
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'manny' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'manny@email.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: '#pass123' },
    });

    // click the submit button
    fireEvent.click(screen.getByText(/submit/i));

    // Assert
    // instruct test to wait for the alert message to show up before continue with assertions
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(/welcome aboard/i);
    expect(window.localStorage.getItem(AUTH_JWT)).toEqual(fakeJwtToken.token);
  });
});
