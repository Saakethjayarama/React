import React, { useState } from "react";
import "./Dashboard.css";
import * as R from "react-bootstrap";
import Progress from "../Progress";

function Dashboard() {
  const INITIAL_STATE = [
    {
      price: "25",
      percent: 25,
      tag: "Today's Expense",
      color: "rgb(48,165,255)",
    },
    {
      price: "25",
      percent: 25,
      tag: "Yesterday's Expense",
      color: "rgb(255,181,62)",
    },
    { price: "25", percent: 25, tag: "Last 7 Days", color: "rgb(30,191,174)" },
    { price: "25", percent: 25, tag: "Last 30 Days", color: "rgb(249,36,63)" },
    { price: "25", percent: 25, tag: "Current Year", color: "rgb(153,211,98)" },
    { price: "30", percent: 90, tag: "Total", color: "rgb(204,168,71)" },
  ];
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <R.Col xs={12} md={7} className="Manage">
      <R.Row className="progress-row">
        {state.map((val, index) => {
          if (index <= 2) {
            return (
              <Progress
                color={val.color}
                percent={val.percent}
                tag={val.tag}
                price={val.price}
              />
            );
          }
        })}
      </R.Row>
      <br />
      <br />
      <R.Row className="progress-row">
        {state.map((val, index) => {
          if (index > 2) {
            return (
              <Progress
                color={val.color}
                percent={val.percent}
                tag={val.tag}
                price={val.price}
              />
            );
          }
        })}
      </R.Row>
    </R.Col>
  );
}

export default Dashboard;
