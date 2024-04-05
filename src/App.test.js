import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Start from this component/i);
  expect(linkElement).toBeInTheDocument();
});
