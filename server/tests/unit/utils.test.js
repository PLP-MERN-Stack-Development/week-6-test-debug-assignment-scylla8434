// Example unit test for a server utility function
const { sum } = require('../../utils/sum');

test('sum adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
