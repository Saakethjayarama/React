import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";

import { compose } from "recompose";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    {/* <Firebase.Consumer>
        {firebase => <SignUpForm firebase={firebase} />}
    </Firebase.Consumer> */}
    <SignUpForm />
    {SignUpLink()}
  </div>
);

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        console.log(authUser);
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          password: passwordOne,
        });
      })
      .then((authUser) => {
        console.log(authUser);
        this.setState({
          username: "",
          email: "",
          passwordOne: "",
          passwordTwo: "",
          error: null,
        });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({ error });
      });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      passwordTwo === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="full name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="email"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit" disabled={isInvalid}>
          Sign Up
        </button>
        {error && error.message ? <p>{error.message}</p> : ""}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Have an acc already? <Link to={ROUTES.SIGN_IN}>sign in</Link>
  </p>
);

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));
const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
