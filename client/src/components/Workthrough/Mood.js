import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const RestartButton = styled(Button)`
  margin-top: 3rem;
`;
const MoodButton = styled(Button)`
  width: 11vw;
`;
const MoodImg = styled.img`
  width: 10vw;
`;
const MoodPaper = styled(Paper)`
  padding: 8%;
  margin: 5% auto 5% auto;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #353c52;
`;
const Header = styled.h1`
  margin-bottom: 2rem;
`;
const MoodEmojis = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function Mood(props) {
  const moods = [
    {
      emoji:
        "https://res.cloudinary.com/dpfixnpii/image/upload/v1582394968/sad_reind9.svg",
      value: 1,
      label: "vsad"
    },
    {
      emoji:
        "https://res.cloudinary.com/dpfixnpii/image/upload/v1582395123/sad_2_veplqu.svg",
      value: 2,
      label: "sad"
    },
    {
      emoji:
        "https://res.cloudinary.com/dpfixnpii/image/upload/v1582395025/emoji_1_nvdlfb.svg",
      value: 3,
      label: "happy"
    },
    {
      emoji:
        "https://res.cloudinary.com/dpfixnpii/image/upload/v1582395207/smile_rocahu.svg",
      value: 4,
      label: "vhappy"
    },
    {
      emoji:
        "https://res.cloudinary.com/dpfixnpii/image/upload/v1582394641/emoji_z9c9di.svg",
      value: 5,
      label: "neutral"
    }
  ];
  const moodList = moods.map(mood => {
    return (
      <MoodButton key={mood.value} onClick={() => props.onResponse(mood.value)}>
        <MoodImg src={mood.emoji} />
      </MoodButton>
    );
  });

  return (
    <main className="Mood">
      <MoodPaper elevation={10}>
        <Header>How are you feeling right now?</Header>
        <MoodEmojis>{moodList}</MoodEmojis>
        <RestartButton
          variant="contained"
          color="primary"
          onClick={() => props.restartWorkthrough()}
        >
          Quit without saving
        </RestartButton>
      </MoodPaper>
    </main>
  );
}
