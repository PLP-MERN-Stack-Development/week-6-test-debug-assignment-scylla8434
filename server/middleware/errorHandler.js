// Global error handler for Express
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
}

module.exports = errorHandler;
