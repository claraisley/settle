import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import useApplicationData from "../hooks/useApplicationData.js";

function App() {

  
  const {
    state, links
  } = useApplicationData();

  // getPages
  // getUsers

  // const filteredLinks = links.filter(l => l.isProtected && state.user || l.isProtected === false)
  // const routes = filteredLinks.map((link, index) => {
    const routes = links.map((link, index) => {
    return (
      <Route
        key={index}
        path={link.path} >
        {link.component}
      </Route>
    )
  })
  
 

  return (
    <div>
      <h1>settle</h1>
      <Router>
        <Nav links={links} user={state.user} />
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div >
  );
}

export default App;
