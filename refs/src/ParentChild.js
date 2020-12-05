import React, { Component } from "react";
import Child from "./Child";

export default class ParentChild extends Component {
  handleClick = () => {
    console.log({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value,
    });
  };

  handleKeyUp = (e, name) => {
    if (e.keyCode === 13) {
      switch (name) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };

  render() {
    return (
      <div className="App">
        <span>FirstName:</span>
        <input
          type="text"
          ref={(input) => (this.firstName = input)}
          onKeyUp={(e) => this.handleKeyUp(e, "firstName")}
        />
        <br />
        <Child context={this} />
        <br />
        <span>Age:</span>
        <input
          type="text"
          ref={(input) => (this.age = input)}
          onKeyUp={(e) => this.handleKeyUp(e, "age")}
        />
        <br />
        <input
          type="submit"
          value="submit"
          ref={(input) => (this.submit = input)}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
