import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MeditationHistory(props) {
  const [state, setState] = useState({
    meditations: []
  })

  console.log("MEDITATIONS IN STATE", state.meditations)


  useEffect(() => {
    axios.request({
      url: "http://localhost:3001/meditations",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true
      },
      params: {
        user_id: props.user.id
      },
      withCredentials: true
    })
      .then(response => {
        setState(prev => ({ ...prev, meditations: response.data })) // if no moods, then state.moods is just an empty array
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return (
    <main className="MeditationHistory">
      <h2>My Previous Meditations</h2>
    </main>
  )
}
