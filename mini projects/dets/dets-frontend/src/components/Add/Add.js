import React from "react";
import * as R from "react-bootstrap";
import "./Add.css";

function Add() {
  return (
    <R.Col xs={12} md={7} className="Add">
      <div className="Add">
        <div className="content">
          <div className="heading">Expenses</div>
          <div className="form-content">
            <label htmlFor="dateOfExpense">Date of expense</label>
            <input type="date" name="" id="dateOfExpense" />
            <label htmlFor="item">Item</label>
            <input type="text" id="item" />
            <label htmlFor="cost">Cost of item</label>
            <input type="text" id="cost" />
            <div className="btns">
              <R.Button variant="primary">Submit</R.Button>
            </div>
          </div>
        </div>
      </div>
    </R.Col>
  );
}

export default Add;
