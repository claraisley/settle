import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavItem from './NavItem.js';

export default function Nav() {
  return (
    <main className="nav">
      <h2>Nav</h2>
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
    </main>
  )
}
