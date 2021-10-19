import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('loads with welcome message', () => {
  render(<Welcome />);
  expect(screen.getByRole('heading')).toHaveTextContent(
    'Welcome to the sound machines',
  );
  expect(screen.getByRole('paragraph')).toHaveTextContent(
    'Login to play, don&apos;t worry this is test application I have already created a user for you. admin, admin@email.com ',
  );
  expect(screen.getByRole('link')).toBeInTheDocument();
});
