import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavItem from './NavItem.js';

export default function Nav(props) {

  const navList = props.links.map(link => {
    return (
      <li>
      <Link to={link.path}>{link.name}</Link>
    </li>
    )
  })

  return (
    <main className="nav">
      <h2>Nav</h2>
      <nav>
        <ul>
          {navList}
        </ul>
      </nav>
    </main>
  )
}
