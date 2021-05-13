import React, { Component, useContext } from "react";
import Context from "./Context";

function StatusF() {
  return (
    <Context.Consumer>
      {(value) => {
        return <>{value}</>;
      }}
    </Context.Consumer>
  );
}

export class StatusC extends Component {
  render() {
    return <Context.Consumer>{(value) => <>{value}</>}</Context.Consumer>;
  }
}

export class StatusCTwo extends Component {
  render() {
    return <>{this.context}</>;
  }
}

StatusCTwo.contextType = Context;

export default StatusCTwo;
