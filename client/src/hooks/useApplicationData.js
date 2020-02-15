import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../components/Menu.js';
import Workthrough from '../components/Workthrough/Index.js';
import Progress from '../components/Progress/Index.js';
import Signup from '../components/Signup/Index.js';
import StaticPage from '../components/StaticPage';
import Login from '../components/Login.js';

export default function useApplicationData() {

  //pages state
  const [pages, setPages] = useState([])

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

  return { pages, links }
};