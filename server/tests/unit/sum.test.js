const { sum } = require('../../utils/sum');

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
