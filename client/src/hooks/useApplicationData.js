import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../components/Menu.js";
import Workthrough from "../components/Workthrough/Index.js";
import Progress from "../components/Progress/Index.js";
import Signup from "../components/Signup/Index.js";
import StaticPage from "../components/StaticPage";
import Meditation from "../components/Meditation";
import Login from "../components/Login.js";

export default function useApplicationData() {
  //pages state
  const [state, setState] = useState({
    pages: {
      thinkingTraps: [],
      tipsTricks: [],
      testAnxiety: [],
      meditations: [],
      signupQuestions: []
    },
    user: {
      email: "",
      name: "",
      id: ""
    }
  });
  //sets user
  const setUser = user => {
    setState(prev => ({
      ...prev,
      user
    }));
  };
  
    if (!state.user.name && localStorage.getItem('currentUser')) {
      const { data } = JSON.parse(localStorage.getItem('currentUser'));
      console.log(data)
      setUser({email: data.email, name: data.name, id: data.id })
    } 

  
  

  useEffect(() => {
    Promise.all([
      axios.request({
        url: "http://localhost:3001/thinking_traps",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        withCredentials: true
      }),
      axios.request({
        url: "http://localhost:3001/tips",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        withCredentials: true
      }),
      axios.request({
        url: "http://localhost:3001/interests",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        withCredentials: true
      })
    ])
      .then(response => {
        setState(prev => ({
          ...prev,
          pages: {
            ...prev.pages,
            thinkingTraps: response[0].data,
            tipsTricks: response[1].data,
            signupQuestions: response[2].data
          }
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);


  const authenticatetUser = function() {
    // const currentUserSubject = JSON.parse(localStorage.getItem('currentUser'))
    if (state.user.name) {
      return true
    } else {
      return false
    }
  }

  const links = [
    {
      name: "Signup",
      path: "/signup",
      requiresAuthentication: false,
      component: <Signup user={state.user} setUser={setUser} signupQuestions={state.pages.signupQuestions} />
    },
    {
      name: "Login",
      path: "/login",
      requiresAuthentication: false,
      component: <Login user={state.user} setUser={setUser} />
    },
    {
      name: "Menu",
      path: "/menu",
      requiresAuthentication: true,
      component: <Menu user={state.user} />
    },
    {
      name: "What is test anxiety?",
      path: "/test-anxiety",
      requiresAuthentication: true,
      component: (
        <StaticPage
          title={"What is test anxiety?"}
          data={state.pages.testAnxiety}
        />
      )
    },
    {
      name: "Thinking Traps",
      path: "/thinking-traps",
      requiresAuthentication: true,
      component: (
        <StaticPage title={"Thinking Traps"} data={state.pages.thinkingTraps} />
      )
    },
    {
      name: "Meditations",
      path: "/meditations",
      requiresAuthentication: true,
      component: <Meditation />
    },
    {
      name: "Work-Throughs",
      path: "/workthrough",
      requiresAuthentication: true,
      component: <Workthrough />
    },
    {
      name: "My Progress",
      path: "/progress",
      requiresAuthentication: true,
      component: <Progress />
    },
    {
      name: "Tips for Test Success",
      path: "/tips-tricks",
      requiresAuthentication: true,
      component: (
        <StaticPage title={"Tips and Tricks"} data={state.pages.tipsTricks} />
      )
    },
  ];

  return { state, setUser, links, authenticatetUser };
}
