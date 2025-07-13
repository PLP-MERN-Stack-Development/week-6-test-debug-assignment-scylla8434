// Minimal Redux-like store mock for demonstration
export function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    default:
      return state;
  }
}

export function increment() {
  return { type: 'INCREMENT' };
}
