import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Nav from './Nav';
import Menu from './Menu.js';
import Workthrough from './Workthrough/Index.js';
import Progress from './Progress/Index.js';
import Signup from './Signup/Index.js';
import StaticPage from './Static';
import Login from './Login.js';

function App() {

  // pages state
  const [pages, setPages] = useState([])
  // useEffect


  // getPages
  // getUsers


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

  const links = [
    { name: "Signup", 
      path: "/signup",
      component: <Signup /> },
    { name: "Login", 
      path: "/login", 
     component: <Login /> },
    { name: "Menu", 
      path: "/menu", 
     component: <Menu />  },
    { name: "Workthrough", 
      path: "/workthrough", 
     component: <Workthrough />  },
    { name: "Progress", 
      path: "/progress", 
     component: <Progress />  },
    { name: "What is test anxiety?",
      path: "/test-anxiety",
      component: <StaticPage data={pages.testAnxiety}  />  },
    { name: "Thinking Traps",
      path: "/thinking-traps",
      component: <StaticPage data={pages.thinkingTraps} /> },
    { name: "Tips/Tricks",
      path: "/tips-tricks",
      component: <StaticPage data={pages.tipsTricks} /> },
    { name: "Meditations",
      path: "/meditations",
      component: <StaticPage data={pages.meditations} /> }
  ]

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
