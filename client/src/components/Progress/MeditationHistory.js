import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

export default function MeditationHistory(props) {
  const [state, setState] = useState({
    meditations: []
  })

  console.log("MEDITATIONS IN STATE", state.meditations)

  const example = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

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
      setState(prev => ({ ...prev, meditations: response.data })) // if no meditations, then state.meditations is just an empty array
    })
    .catch(function (error) {
      console.log(error);
    });
}, []);


return (
  <main className="MeditationHistory">
    <h2>My Previous Meditations</h2>
    <Chart type="bar" options={example.options} series={example.series} width="500" />
  </main>
)
}
