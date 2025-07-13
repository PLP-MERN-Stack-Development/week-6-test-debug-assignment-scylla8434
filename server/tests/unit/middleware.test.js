// Example test for Express middleware
const middleware = require('../../middleware/auth');

describe('auth middleware', () => {
  it('should call next if user is authenticated', () => {
    const req = { user: { id: 1 } };
    const res = {};
    const next = jest.fn();
    middleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
