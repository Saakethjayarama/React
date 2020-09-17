import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Menu from './Examples/Menu'
import Navigator from './Examples/Navigator'
import Time from './Examples/Time'
import OddEven from './Examples/OddEven';
import Details from './Examples/Details'
import Learn from './Learn/Learn';
import Props from './Learn/Props';
import TextField from './Learn/TextField';
import CheckBox from './Learn/CheckBox'
import Radio from './Learn/Radio';
import Select from './Learn/Select';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
            <Route path="/time">
                <Navigator />
                <h1>Time</h1>
                <Time />
            </Route>
            <Route path="/oddeven">
                <Navigator />
                <h1>Odd Even</h1>
                <OddEven />
            </Route>
            <Route path="/details">
                <Navigator />
                <h1>Details</h1>
                <Details />
            </Route>

            <Route path="/props">
                <Navigator />
                <Props />
            </Route>

            <Route path="/textInput">
                <Navigator /> <br />
                <TextField />
            </Route>

            <Route path="/checkBox" >
              <Navigator /><br />
              <CheckBox />
            </Route>

            <Route path="/radio">
              <Navigator /><br />
              <Radio />
            </Route>

            <Route path="/select">
              <Navigator />
              <Select />
            </Route>

            <Route path="/">
                <Navigator /> <br />
                <Menu />  <br />
                <Learn />
            </Route>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
