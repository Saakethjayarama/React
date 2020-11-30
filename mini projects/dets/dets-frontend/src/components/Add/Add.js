import "./Add.css";

import React from "react";

function Add() {
  return (
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
            <input type="submit" value="Add" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
