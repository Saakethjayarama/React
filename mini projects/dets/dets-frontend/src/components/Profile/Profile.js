import React from "react";
import * as R from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import "./Profile.css";

function Profile() {
  return (
    <R.Col xs={12} md={7} className="Profile">
      <R.Alert variant={"dark"}>Profile</R.Alert>

      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group controlId="formBasicMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Mobile Number" />
        </Form.Group>
        <Form.Group controlId="formBasicRegistrationDate">
          <Form.Label>Registration Date</Form.Label>
          <Form.Control type="text" placeholder="Registration Date" disabled />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </R.Col>
  );
}

export default Profile;
