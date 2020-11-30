import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header";
import Menu from "../Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Router>
        <Switch>
          <Route path="/change">{/*/change => changepassword */}</Route>
          <Route path="/profile">{/*/ => Profile */}</Route>
          <Route path="/year">{/*/Year => expenses by year */}</Route>
          <Route path="/month">{/*/month => expenses by month */}</Route>
          <Route path="/day">{/*/day => expenses by day */}</Route>
          <Route path="/manage">{/*/manage => manage expenses */}</Route>
          <Route path="/add">{/*/add => add expenses */}</Route>
          <Route path="/dashboard">{/*/dashboard => dashboard */}</Route>
          <Route path="/year">{/*/year => year */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
