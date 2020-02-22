import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

//styling
const BackButton = styled(Button)`
height: 100px;
width: 100px;
`;
const BackImg = styled.img`
height: 100px;
width: 100px;
`;




export default function MoodCalendar(props) {
  const [state, setState] = useState({
    moods: []
  });

  const emojiLookup = {
    1: "😢",
    2: "😟",
    3: "😐",
    4: "😃",
    5: "😄"
  };

  useEffect(() => {
    axios
      .request({
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
        setState(prev => ({ ...prev, moods: response.data })); // if no moods, then state.moods is just an empty array
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props.user.id]);

  let tileContent = "";
  if (state.moods.length > 0) {
    tileContent = ({ date }) => {
      let content = "";
      state.moods.forEach(mood => {
<<<<<<< HEAD
        let calendarDate = date.toDateString();
        let moodDate = new Date(mood.created_at); // changes it to a date object
        moodDate.setDate(moodDate.getDate() + 1); // adds a day because it shows up on the day before, don't know why
        let compareMoodDate = moodDate.toDateString(); // changes it to a date string so it can be compared
=======
        let calendarDate = date.toDateString()
        let moodDate = new Date(mood.created_at) // changes it to a date object
        let compareMoodDate = moodDate.toDateString() // changes it to a date string so it can be compared
>>>>>>> master
        if (calendarDate === compareMoodDate) {
          content = emojiLookup[mood.value];
        }
      });
      return content;
    };
  }

  return (
    <main className="mood-calendar">
      <BackButton
        onClick={() => {
          props.goToProgressPage("HOME");
        }}
      >
        <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg" />
      </BackButton>
      <h2>Mood Chart</h2>
      {state.moods.length > 0 ? (
        <Calendar tileContent={tileContent} calendarType={"US"} />
      ) : (
        <p>Start a reflection to start tracking your moods!</p>
      )}
    </main>
  );
}
