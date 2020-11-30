import React from "react";
import "./ChangePassword.css";
import * as R from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
function ChangePassword() {
  return (
    <R.Col xs={12} md={7} className="Password">
      <R.Alert variant={"dark"}>Change Password</R.Alert>

      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group controlId="formBasicMobileNumber">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Change Password
        </Button>
      </Form>
    </R.Col>
  );
}

export default ChangePassword;
