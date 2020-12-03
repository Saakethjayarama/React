import React, { useState } from "react";
import * as R from "react-bootstrap";
import Period from "../Reports/Period";
import Report from "../Reports/Report";

function Month() {
  // const total = 8000;
  // const data = [
  //   { date: "12-08-2000", amount: "2000" },
  //   { date: "28-08-2000", amount: "4000" },
  //   { date: "01-12-2020", amount: "2000" },
  // ];

  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const [periods, setPeriods] = useState({ startDate: "", endDate: "" });

  const handleClick = () => {
    fetch(
      `http://localhost/ExpenseOverPeriod.php?id=11&startDate=${periods.startDate}&endDate=${periods.endDate}`
    )
      .then((res) => res.json())
      .then((datum) => {
        const expenses = [];
        let ttl = 0;
        datum.forEach((expense) => {
          ttl += parseInt(expense.expenseCost);
          expenses.push({
            date: expense.expenseDate,
            item: expense.expenseItem,
            amount: expense.expenseCost,
          });
        });
        setData(expenses);
        setTotal(ttl);
      });
  };

  return (
    <R.Col xs={12} md={7} className="Manage">
      <Period
        periods={periods}
        setPeriods={setPeriods}
        handleClick={handleClick}
      />
      <Report data={data} total={total} />
    </R.Col>
  );
}

export default Month;
