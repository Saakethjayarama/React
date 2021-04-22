import * as actions from "./cakeActionTypes";

const initialState = {
  noOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
