import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from 'react-calendar';


export default function MoodCalendar(props) {
  const [state, setState] = useState({
    moods: []
  })
  console.log("STATE", state.moods)

  const emojiLookup = [
    { emoji: "😢", value: 1, label: "vsad" },
    { emoji: "😟", value: 2, label: "sad" },
    { emoji: "😐", value: 3, label: "neutral" },
    { emoji: "😃", value: 4, label: "happy" },
    { emoji: "😄", value: 5, label: "vhappy" },
  ]

  useEffect(() => {
      axios.request({
        url: "http://localhost:3001/mood-calendar",
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
        setState(prev => ({ ...prev, moods: response.data }))
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  // const tileContent = ({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>Sunday!</p> : null;
  const tileContent = ({date}) => `
  ${date.getUTCMonth()} / ${date.getUTCDate()} / ${date.getUTCFullYear()}`;

  return (
    <main className="mood-calendar">
      <h2>Mood Chart</h2>
      <Calendar tileContent={tileContent} />
    </main>
  )
}
