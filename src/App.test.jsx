import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio navigation', async () => {
  render(<App />);

  expect(
    await screen.findByRole('navigation', { name: /main navigation/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/bmelki/i)).toBeInTheDocument();
});
