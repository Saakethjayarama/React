import React, { Component } from "react";

class FoodApp extends Component {
  state = {
    value: "",
    result: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ result: "Selected radio button " + this.state.value });
    console.log("result : " + this.state.result);
  };

  render() {
    const { value, result } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="radio"
            name="food"
            value="VG"
            checked={value === "VG"}
            onChange={this.handleChange}
          />
          Veg
          <input
            type="radio"
            name="food"
            value="NV"
            checked={value === "NV"}
            onChange={this.handleChange}
          />
          Non Veg
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

export default FoodApp;
