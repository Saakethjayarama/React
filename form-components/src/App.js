import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Text from'./FormComponents/Text'
import Radio from './FormComponents/Radio'
import Select from './FormComponents/Select'
import Check from './FormComponents/Check';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/textBox">
              <Text />
            </Route>
            <Route path="/radioBtn">
              <Radio />
            </Route>
            <Route path="/select">
              <Select />
            </Route>
            <Route path="/check">
              <Check />
            </Route>
            <Route path="/">
              Hello
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
