import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import DashboardMenu from './components/DashboardMenu'
import Employees from './components/Employees'
import EmployeesById from './components/EmployeeByID'
import EmployeesByGender from './components/EmployeeByGender'
import EmployeesByDepartment from './components/EmployeesByDepartment'
import EmployeesByDepartments from './components/EmployeesByDepartments'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class  App extends Component {

  br() {
    return <br/>
  }
  render() {
    return <Router>
      <Switch>
            <Route path="/id">
              <Header />
              <div className="body">
                <DashboardMenu />
                <EmployeesById />
              </div>
            </Route>
            <Route path="/gender">
              <Header />
              <div className="body">
                <DashboardMenu />
                <EmployeesByGender />
              </div>
            </Route>
            <Route path="/dept">
              <Header />
              <div className="body">
                <DashboardMenu />
                <EmployeesByDepartment />
              </div>
            </Route>
            <Route path="/depts">
              <Header />
              <div className="body">
                <DashboardMenu />
                <EmployeesByDepartments />
              </div>
            </Route>
            <Route path="/">
              <Header />
              <div className="body">
                <DashboardMenu />
                <Employees />
              </div>
            </Route>
            
      </Switch>
    </Router>
  }
}

export default App;
