import React, { useState } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";

function AddDepartmentModal(props) {
  const { show, onHide, onSubmit } = props;

  const [deptName, setDeptName] = useState("");

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Department
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <TextField
            id="outlined-basic"
            label="Department Name"
            variant="outlined"
            value={deptName}
            onChange={(event) => setDeptName(event.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          variant="warning"
          onClick={() => {
            onSubmit(deptName);
          }}
        >
          Add
        </Button>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddDepartmentModal;
