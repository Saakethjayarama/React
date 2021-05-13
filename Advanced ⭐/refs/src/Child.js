import React, { Component } from "react";

export default class Child extends Component {
  render() {
    const { context } = this.props;

    return (
      <div>
        <span>LastName:</span>
        <input
          type="text"
          ref={(input) => (context.lastName = input)}
          onKeyUp={(e) => context.handleKeyUp(e, "lastName")}
        />
      </div>
    );
  }
}
