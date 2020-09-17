import React from "react";
import PasswordChange from "../PasswordChange";
import PasswordForget from "../PasswordForget";
import { withAuthorization } from "../Session";

const AccountPage = () => {
  return (
    <div>
      <PasswordForget />
      <PasswordChange />
    </div>
  );
};
const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
