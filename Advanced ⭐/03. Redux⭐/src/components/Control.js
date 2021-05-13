import React from "react";
import { connect } from "react-redux";
import {
  IncrementAction,
  DecrementAction,
} from "../redux/actions/IncrementDecrementAction";

function Control(props) {
  return (
    <div>
      <button onClick={() => props.increment()}>Increment</button>
      <button onClick={() => props.decrement()}>Decrement</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(IncrementAction());
  },

  decrement: () => {
    dispatch(DecrementAction());
  },
});

export default connect(null, mapDispatchToProps)(Control);
