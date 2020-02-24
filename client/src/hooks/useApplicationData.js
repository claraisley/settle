import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../components/Menu.js";
import Workthrough from "../components/Workthrough/Index.js";
import Progress from "../components/Progress/Index.js";
import Signup from "../components/Signup/Index.js";
import Tips from "../components/Tips";
import About from "../components/About";
import Meditation from "../components/Meditation";
import Login from "../components/Login.js";
import WhatIs from "../components/Whatis";
import ThinkingTraps from "../components/ThinkingTrap";
// import { useLocation } from "react-router-dom";

export default function useApplicationData() {
  //pages state
  const [state, setState] = useState({
    pages: {
      thinkingTraps: [],
      tipsTricks: [],
      signupQuestions: [],
      meditations: []
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

  if (!state.user.name && localStorage.getItem("currentUser")) {
    const { data } = JSON.parse(localStorage.getItem("currentUser"));
    setUser({ email: data.email, name: data.name, id: data.id });
  }

  useEffect(() => {
    Promise.all([
      axios.request({
        url: "/thinking_traps",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        withCredentials: true
      }),
      axios.request({
        url: "/tips",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        withCredentials: true
      }),
      axios.request({
        url: "/interests",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        withCredentials: true
      }),
      axios.request({
        url: "/meditations",
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
        console.log(response);
        setState(prev => ({
          ...prev,
          pages: {
            ...prev.pages,
            thinkingTraps: response[0].data,
            tipsTricks: response[1].data,
            signupQuestions: response[2].data,
            meditations: response[3].data
          }
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const authenticatetUser = function() {
    if (state.user.name) {
      return true;
    } else {
      return false;
    }
  };

  const links = [
    {
      name: "Signup",
      path: "/signup",
      requiresAuthentication: false,
      component: (
        <Signup
          user={state.user}
          setUser={setUser}
          signupQuestions={state.pages.signupQuestions}
        />
      )
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
      name: "What is Test Anxiety?",
      path: "/test-anxiety",
      requiresAuthentication: true,
      component: <WhatIs />
    },
    {
      name: "Thinking Traps",
      path: "/thinking-traps",
      requiresAuthentication: true,
      component: <ThinkingTraps data={state.pages.thinkingTraps} />
    },
    {
      name: "Meditations",
      path: "/meditations",
      requiresAuthentication: true,
      component: (
        <Meditation user={state.user} meditations={state.pages.meditations} />
      )
    },
    {
      name: "Work-Throughs",
      path: "/workthrough",
      requiresAuthentication: true,
      component: <Workthrough user={state.user} />
    },
    {
      name: "My Progress",
      path: "/progress",
      requiresAuthentication: true,
      component: <Progress user={state.user} />
    },
    {
      name: "Dos and Don'ts For Test Success",
      path: "/tips-tricks",
      requiresAuthentication: true,
      component: <Tips data={state.pages.tipsTricks} />
    },
    {
      name: "About",
      path: "/about",
      requiresAuthentication: false,
      component: <About />
    }
  ];

  return { state, setUser, links, authenticatetUser };
}
