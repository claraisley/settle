import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Nav from './Nav';
import useApplicationData from "../hooks/useApplicationData.js";

function App() {

  const {
    pages, links
  } = useApplicationData();

  // getPages
  // getUsers

  useEffect(() => {
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
      })
  }, []);

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
        <Nav 
        links={links} />
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
