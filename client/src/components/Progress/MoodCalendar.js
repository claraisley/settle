import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from 'react-calendar';

export default function MoodCalendar(props) {
  const [state, setState] = useState({
    moods: []
  })
  console.log("STATE MOODS", state.moods)

  const emojiLookup = {
    1: "😢",
    2: "😟",
    3: "😐",
    4: "😃",
    5: "😄",
}

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
        setState(prev => ({ ...prev, moods: response.data })) // if no moods, then state.moods is just an empty array
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const tileContent = ({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>Sunday!</p> : null;
  // const tileContent = ({ date }) => console.log(date.toDateString())
  let tileContent = ""
  if (state.moods.length > 1) {
    tileContent = ({ date }) => {
      let content = ""
      state.moods.forEach(mood => {
        let calendarDate = date.toDateString()
        let moodDate = new Date(mood.created_at).toDateString()
        if (calendarDate == moodDate) {
          content = emojiLookup[mood.value]
        }
      })
      return content;
    }
  }

  return (
    <main className="mood-calendar">
      <h2>Mood Chart</h2>
      <Calendar tileContent={tileContent} />
    </main>
  )
}
