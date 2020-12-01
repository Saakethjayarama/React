import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header";
import Menu from "../Menu";
import Add from "../Add";
import Manage from "../Manage";
import Profile from "../Profile";
import Password from "../ChangePassword";
import Login from "../Login";

import * as R from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <R.Row>
          <Switch>
            <Route path="/change">
              {/*/change => changepassword */}
              <Header />
              <Menu />
              <Password />
            </Route>
            <Route path="/profile">
              {/*/ => Profile */}
              <Header />
              <Menu />
              <Profile />
            </Route>
            <Route path="/year">{/*/Year => expenses by year */}</Route>
            <Route path="/month">{/*/month => expenses by month */}</Route>
            <Route path="/day">{/*/day => expenses by day */}</Route>
            <Route path="/manage">
              {/*/manage => manage expenses */}
              <Header />
              <Menu />
              <Manage />
            </Route>
            <Route path="/add">
              {/*/add => add expenses */}
              <Header />
              <Menu />
              <Add />
            </Route>
            <Route path="/dashboard">{/*/dashboard => dashboard */}</Route>
            <Route path="/year">{/*/year => year */}</Route>
            <Route path="/">
              {/*/login => login */}
              <Login />
            </Route>
          </Switch>
        </R.Row>
      </Router>
    </div>
  );
}

export default App;
