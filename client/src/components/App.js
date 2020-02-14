import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './menu.js';
import Workthrough from './workthrough.js';
import Progress from './progress.js';
import Signup from './signup.js';
import Static from './static';

function App() {

  axios.request({
    url: 'http://localhost:3001/users',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials': true
    },
    withCredentials: true
  }).then(function (response) {
    console.log(response);
  })
    .catch(function (error) {
      console.log(error);
    });


  return (
    <div>
      <h1>settle</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/workthrough">Work Throughs</Link>
            </li>
            <li>
              <Link to="/progress">My Progress</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/static">Static</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/workthrough">
            <Workthrough />
          </Route>
          <Route path="/progress">
            <Progress />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/static">
            <Static />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
