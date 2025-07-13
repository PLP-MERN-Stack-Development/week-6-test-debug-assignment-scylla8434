import { reducer, increment } from '../../store';

describe('Integration: reducer and actions', () => {
  it('should increment value via action', () => {
    let state = { value: 0 };
    state = reducer(state, increment());
    expect(state.value).toBe(1);
  });
});
