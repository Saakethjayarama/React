import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  count: 0,
};

const IncrementDecrementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const incVal = state.count + 1;
      return {
        ...state,
        count: incVal,
      };
    case actionTypes.DECREMENT:
      const decVal = state.count - 1;
      return {
        ...state,
        count: decVal,
      };
    default:
      return state;
  }
};

export default IncrementDecrementReducer;
