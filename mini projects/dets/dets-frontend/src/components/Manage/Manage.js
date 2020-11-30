import React, { useState } from "react";
import * as R from "react-bootstrap";
import "./Manage.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "./Modal";

function Manage() {
  const [expenses, setExpenses] = useState([
    {
      id: "20",
      item: "Pencil",
      cost: "20",
      date: "2020-12-12",
    },
    {
      id: "21",
      item: "Eraser",
      cost: "20",
      date: "2020-12-12",
    },
    {
      id: "22",
      item: "Sharpner",
      cost: "20",
      date: "2020-12-12",
    },
    {
      id: "23",
      item: "Ruler",
      cost: "20",
      date: "2020-12-12",
    },
  ]);

  const handleDelete = (id) => {
    console.log(`${id} deleted`);

    // async req to server goes here

    const x = expenses.filter((expense) => expense.id != id);
    setExpenses([...x]);
  };

  const [modalShow, setModalShow] = useState();

  // modal states
  const [modalState, setModalState] = useState({
    id: "",
    item: "",
    cost: "",
    date: "",
  });
  const handleEdit = (id) => {
    let selected = expenses.filter((expense) => expense.id === id);
    if (selected.length > 0) {
      selected = selected[0];
      setModalState(selected);
    }
    setModalShow(true);
  };

  const modalHandleChange = (event) => {
    setModalState({
      ...modalState,
      [event.target.name]: event.target.value,
    });
  };
  const modalHandleSubmit = () => {
    setModalShow(false);
    let rest = expenses.filter((expense) => expense.id !== modalState.id);
    rest.push(modalState);
    setExpenses(rest);

    // async req to update goes here
  };

  return (
    <R.Col xs={12} md={7} className="Manage">
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalState={modalState}
        modalHandleChange={modalHandleChange}
        modalHandleSubmit={modalHandleSubmit}
      />
      <R.Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Expense Item</th>
            <th>Expense Cost</th>
            <th>Expense Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.item}</td>
                <td>{value.cost}</td>
                <td>{value.date}</td>
                <td className="actions">
                  <div
                    className="edit action"
                    onClick={() => handleEdit(value.id)}
                  >
                    <CreateIcon />
                  </div>
                  <div
                    className="delete action"
                    onClick={() => handleDelete(value.id)}
                  >
                    <DeleteForeverIcon />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </R.Table>
    </R.Col>
  );
}

export default Manage;
