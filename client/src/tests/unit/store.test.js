import { reducer, increment } from '../../store';

describe('reducer', () => {
  it('should increment value', () => {
    const state = { value: 0 };
    const newState = reducer(state, increment());
    expect(newState.value).toBe(1);
  });
});
