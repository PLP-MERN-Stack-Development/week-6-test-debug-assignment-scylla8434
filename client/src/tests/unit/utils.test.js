// Example unit test for a client utility function
import { capitalize } from '../../utils/capitalize';

test('capitalize capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});
