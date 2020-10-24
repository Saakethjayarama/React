import React, { Component } from "react";
import { compose } from "recompose";
import { withRouter, Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { PasswordForgotLink } from "../PasswordForget";

export default function signInPage() {
  return (
    <div>
      Signin
      <SignInForm />
      {SignUpLink()}
    </div>
  );
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onClick = (event) => {
    const { username, password } = this.state;
    event.preventDefault();
    this.props.firebase
      .doSignInWithEmailAndPassword(username, password)
      .then((authUser) => {
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={this.onChange}
          autoFocus
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>Submit</button>
        <PasswordForgotLink />
        <p>{error && error.message ? error.message : ""}</p>
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Dont have an acc? <Link to={ROUTES.SIGN_UP}>Sign UP </Link>
  </p>
);

export const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);
