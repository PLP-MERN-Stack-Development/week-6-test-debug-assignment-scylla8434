import React, { useState } from 'react';
import Button from './components/Button';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [count, setCount] = useState(0);
  return (
    <ErrorBoundary>
      <div>
        <h1>Demo App</h1>
        <p>Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </ErrorBoundary>
  );
}

export default App;
