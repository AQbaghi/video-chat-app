import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/Navbar.js';
import Signup from './Components/Signup-and-Login/Signup.js';
import Login from './Components/Signup-and-Login/login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
