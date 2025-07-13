// Example Express middleware for demonstration
function auth(req, res, next) {
  if (req.user) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

module.exports = auth;
