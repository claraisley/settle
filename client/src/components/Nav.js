import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './Menu.js';
import Workthrough from './Workthrough.js';
import Progress from './Progress.js';
import Signup from './Signup.js';
import Static from './Static';
import Login from './Login.js';

export default function Nav() {
  return (
    <main className="nav">
      <h2>Nav</h2>
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
              <Link to="/login">Login</Link>
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
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}
