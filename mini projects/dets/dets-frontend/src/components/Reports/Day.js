import React from "react";
import * as R from "react-bootstrap";
import Period from "../Reports/Period";
import Report from "../Reports/Report";

function Day() {
  const total = 8000;
  const data = [
    { date: "12-08-2000", amount: "2000" },
    { date: "28-08-2000", amount: "4000" },
    { date: "01-12-2020", amount: "2000" },
  ];
  return (
    <R.Col xs={12} md={7} className="Manage">
      <Period override />
      <Report data={data} total={total} />
    </R.Col>
  );
}

export default Day;
