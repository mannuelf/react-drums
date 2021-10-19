import { render } from '@testing-library/react';
import App from './Machine';

test('renders without issues', () => {
  const { getByText } = render(<App />);
  const headElement = getByText(/Micro v0.0.2/i);
  expect(headElement).toBeInTheDocument();
});
