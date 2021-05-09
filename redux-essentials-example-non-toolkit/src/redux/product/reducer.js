import { ADD } from "./actionTypes";

export function reducer(state = { value: [] }, action) {
  switch (action.type) {
    case ADD:
      return {
          ...state,
          value: state.value.concat(action.payload)
      };
    default:
      return state;
  }
}
