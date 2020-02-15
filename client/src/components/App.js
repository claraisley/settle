import React from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav';
import { createGlobalStyle } from 'styled-components'


    const GlobalStyle = 
    createGlobalStyle`
    body {
      background-color: #3c445c
    }`;
function App() {

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

    // CSS STYLING


  

  return (
    <GlobalStyle>
       <div>
      <h1>settle</h1>
      <Nav />
    </div>   
    </GlobalStyle>

  );
}

export default App;
