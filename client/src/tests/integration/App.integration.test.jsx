// Example integration test for a React component that fetches data
import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';

jest.mock('../../api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ data: 'Hello' }))
}));

test('App fetches and displays data', async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText('Hello')).toBeInTheDocument());
});
