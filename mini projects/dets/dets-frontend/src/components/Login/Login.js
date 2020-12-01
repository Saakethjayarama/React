import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import * as R from "react-bootstrap";

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <h1>Daily Expenses Tracking System</h1>
      <R.Col md={5}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={state.username}
              onChange={handleChange}
              name="username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </R.Col>
    </div>
  );
}

export default Login;
