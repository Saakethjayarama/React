import Home from '../Home';
import Nav from '../Nav/Nav';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import SingIn from '../SignIn';
import SignUp from '../SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin">
            <Nav />
            <SingIn />
          </Route>
          <Route exact path="/signup">
            <Nav />
            <SignUp />
          </Route>
          <Route exact path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
