import React from 'react';
import './App.css';
import axios from 'axios';

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


  return (
    <div>
      <h1>settle</h1>
    </div>
  );
}

export default App;
