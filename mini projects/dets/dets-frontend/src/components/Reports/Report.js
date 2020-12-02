import React from "react";
import * as R from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./Report.css";

function Report(props) {
  const { total, data } = props;

  return (
    <R.Col xs={12} md={12} className="Report">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Expense Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{value.date}</td>
                <td>{value.amount}</td>
              </tr>
            );
          })}

          <tr>
            <td colSpan="2">Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </Table>
    </R.Col>
  );
}

export default Report;
