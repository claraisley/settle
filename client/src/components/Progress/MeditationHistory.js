import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

export default function MeditationHistory(props) {
  const [state, setState] = useState({
    meditations: [],
    baseDay: new Date()
  })

  // getting start of week for the graph...yes this is weird
  let dayOfWeek = state.baseDay.getDay()
  let startOfWeek = new Date(state.baseDay.setDate(state.baseDay.getDate() - dayOfWeek))

  // makes an array for the week, key is the actual date object, value is a string to put in the graph
  let weekObject = {}
  weekObject[startOfWeek] = startOfWeek.toDateString().substr(4, 6)
  for (let i = 0; i < 6; i++) {
    let weekday = new Date(startOfWeek.setDate(startOfWeek.getDate() + 1))
    weekObject[weekday] = weekday.toDateString().substr(4, 6)
  }
  console.log("objects values", Object.values(weekObject))

  const example = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: Object.values(weekObject)
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70]
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
  }, [props.user.id]);


  return (
    <main className="MeditationHistory">
      <h2>My Previous Meditations</h2>
      <p>Your meditations for the week of {startOfWeek.toDateString()}</p>
      <Chart
        type="bar"
        options={example.options}
        series={example.series}
        width="500" />
    </main>
  )
}
