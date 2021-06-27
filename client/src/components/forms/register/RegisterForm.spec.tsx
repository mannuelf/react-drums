import * as React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import RegisterForm from './RegisterForm';

test('loads Register form with no issue', () => {
  render(<RegisterForm />);
});
