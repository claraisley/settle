import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Nav from './Nav';
import Menu from './Menu.js';
import Workthrough from './Workthrough/Index.js';
import Progress from './Progress.js';
import Signup from './Signup/Index.js';
import Static from './Static';
import Login from './Login.js';

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
      <Nav />
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
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
