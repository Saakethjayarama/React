import React, { Component } from "react";
import Parent from "./Parent";
import ParentChild from "./ParentChild";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentChild />
      </div>
    );
  }
}
