import React from "react";
import { connect } from "react-redux";

function Count(props) {
  return (
    <div>
      <h1>{props.IncrementDecrementReducer.count}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Count);
