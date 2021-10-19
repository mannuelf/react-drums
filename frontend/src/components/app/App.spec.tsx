import { render } from '@testing-library/react';
import App from './App';

test('renders without issues', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Micro v0.0.2/i);
  expect(linkElement).toBeInTheDocument();
});
