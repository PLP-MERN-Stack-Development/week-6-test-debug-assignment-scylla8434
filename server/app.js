const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();

app.use(express.json());

// Mock route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Auth route for integration test
dummyUser = { email: 'test@example.com', password: 'password123' };
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === dummyUser.email && password === dummyUser.password) {
    return res.json({ token: 'mock-token' });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

app.use(errorHandler);

module.exports = app;
