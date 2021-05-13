import React, { Component } from "react";

class DrinkApp extends Component {
  state = {
    value: "",
    result: "",
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ result: "Selected radio button " + this.state.value });
    console.log("result : " + this.state.result);
  }

  render() {
    const { value, result } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="radio"
            name="drink"
            value="C"
            checked={value === "C"}
            onChange={this.handleChange}
          />
          Coffee
          <input
            type="radio"
            name="drink"
            value="T"
            checked={value === "T"}
            onChange={this.handleChange}
          />
          Tea
          <input
            type="radio"
            name="drink"
            value="M"
            checked={value === "M"}
            onChange={this.handleChange}
          />
          Milk
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        {result}
      </div>
    );
  }
}

export default DrinkApp;
