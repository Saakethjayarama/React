import React, { useState } from "react";
import * as R from "react-bootstrap";
import "./Add.css";

function Add() {
  const [state, setState] = useState({
    date: "",
    item: "",
    cost: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    console.log(state);
  };

  return (
    <R.Col xs={12} md={7} className="Add">
      <div className="Add">
        <div className="content">
          <div className="heading">Expenses</div>
          <div className="form-content">
            <label htmlFor="dateOfExpense">Date of expense</label>
            <input
              type="date"
              name="date"
              id="dateOfExpense"
              value={state.date}
              onChange={handleChange}
            />
            <label htmlFor="item">Item</label>
            <input
              type="text"
              name="item"
              value={state.item}
              onChange={handleChange}
            />
            <label htmlFor="cost">Cost of item</label>
            <input
              type="text"
              name="cost"
              value={state.cost}
              onChange={handleChange}
            />
            <div className="btns">
              <R.Button variant="primary" onClick={handleClick}>
                Submit
              </R.Button>
            </div>
          </div>
        </div>
      </div>
    </R.Col>
  );
}

export default Add;
