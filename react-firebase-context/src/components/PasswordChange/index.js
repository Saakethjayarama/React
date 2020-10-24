import React, { Component } from "react";
import { withFirebase } from "../Firebase";

export default function () {
  return (
    <div>
      <h3>Password Reset</h3>
      <PasswordChangeForm />
    </div>
  );
}

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordChangeBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.onchange = this.onchange.bind(this);
    this.onclick = this.onclick.bind(this);
  }

  onchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onclick = (event) => {
    event.preventDefault();
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(...INITIAL_STATE);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <form>
        <input
          type="password"
          name="passwordOne"
          value={passwordOne}
          placeholder="Password"
          onChange={this.onchange}
        />
        <input
          type="password"
          name="passwordTwo"
          value={passwordTwo}
          placeholder="Password"
          onChange={this.onchange}
        />
        <button onClick={this.onclick} type="submit" disabled={isInvalid}>
          Change
        </button>
        {error && error.message ? <p>{error.message}</p> : ""}
      </form>
    );
  }
}

const PasswordChangeForm = withFirebase(PasswordChangeBase);
