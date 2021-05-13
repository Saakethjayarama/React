import * as actionTypes from "./actionTypes";

const IncrementAction = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};
const DecrementAction = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export { IncrementAction, DecrementAction };
