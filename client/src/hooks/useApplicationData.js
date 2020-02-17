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
      })
    ])
      .then(response => {
        setState(prev => ({
          ...prev,
          pages: {
            ...prev.pages,
            thinkingTraps: response[0].data,
            tipsTricks: response[1].data
          }
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const links = [
    {
      name: "Signup",
      path: "/signup",
      requiresAuthentication: false,
      component: <Signup user={state.user} setUser={setUser} />
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
      component: <Menu user={state.user} />
    },
    {
      name: "Workthrough",
      path: "/workthrough",
      component: <Workthrough />
    },
    {
      name: "Progress",
      path: "/progress",
      component: <Progress />
    },
    {
      name: "What is test anxiety?",
      path: "/test-anxiety",
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
      component: (
        <StaticPage title={"Thinking Traps"} data={state.pages.thinkingTraps} />
      )
    },
    {
      name: "Tips/Tricks",
      path: "/tips-tricks",
      component: (
        <StaticPage title={"Tips and Tricks"} data={state.pages.tipsTricks} />
      )
    },
    {
      name: "Meditations",
      path: "/meditations",
      component: <Meditation />
    }
  ];

  return { state, links };
}
