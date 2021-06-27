import { render } from '@testing-library/react';
import App from './App';

test('renders without issues', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
