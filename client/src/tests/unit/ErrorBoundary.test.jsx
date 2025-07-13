// Example test for React error boundary
import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../../components/ErrorBoundary';

function ProblemChild() {
  throw new Error('Error thrown from problem child!');
}

test('ErrorBoundary catches errors', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );
  expect(getByText(/something went wrong/i)).toBeInTheDocument();
});
