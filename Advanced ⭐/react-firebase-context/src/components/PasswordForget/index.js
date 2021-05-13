import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default function index() {
  return (
    <form>
      <h3>Forgot Password</h3>
      <PasswordForgetForm />
    </form>
  );
}

const INITIAL_STATE = {
  email: "",
  error: null,
};

class ForgotPasswordFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === "";
    return (
      <div>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={this.onChange}
          value={this.state.email}
        />
        {error && error.message ? <p>{error.message}</p> : ""}
        <button disabled={isInvalid} type="submit" onClick={this.onSubmit}>
          Reset Password
        </button>
      </div>
    );
  }
}

const PasswordForgotLink = () => {
  return (
    <p>
      <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
  );
};

const PasswordForgetForm = withFirebase(ForgotPasswordFormBase);

export { PasswordForgetForm, PasswordForgotLink };
