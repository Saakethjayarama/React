import React, { useState, useEffect } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import * as R from "react-bootstrap";
import { Link } from "react-router-dom";

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

  const handleLoginSubmit = (event) => {
    console.log("Login submit entered");
  };

  const handleSignUpSubmit = (event) => {
    console.log("Signup submit entered");
  };

  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      handleLoginSubmit();
    } else {
      handleSignUpSubmit();
    }
  };

  const [message, setMessage] = useState("");

  return (
    <div className="Login">
      <R.Col md={5}>
        {isLogin ? <h2>Login</h2> : <h2>Signup</h2>}
        {message === "" ? null : <R.Alert variant="danger">Danger</R.Alert>}
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
          <div className="float-right">
            <Link onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Have an Account? Login"}
            </Link>
          </div>
        </Form>
      </R.Col>
    </div>
  );
}

export default Login;
