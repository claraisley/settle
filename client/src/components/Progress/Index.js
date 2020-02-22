import React from "react";
import styled from "styled-components";
import MoodCalendar from "./MoodCalendar";
import ThinkingTrap from "./ThinkingTrap"
import Button from "@material-ui/core/Button";
import MeditationHistory from "./MeditationHistory"
import useVisualMode from "../../hooks/useVisualMode"
import Paper from "@material-ui/core/Paper";

const ProgressButton = styled(Button)`
height: 300px;
width: 300px;
`;

const ProgressImg = styled.img`
height: 200px;
width: 200px;

`;

const ProgressPaper = styled(Paper)`
 
  margin: 12%;
  width: 75%;
  justify-content: center;
  align-items: center;
  background-color: #353c52;
`;

export default function Progress(props) {

  const HOME = "HOME"
  const MOOD = "MOOD"
  const TRAP = "TRAP"
  const MEDITATION = "MEDITATION"

  const { mode, transition } = useVisualMode(HOME);

  return (
    <main className="progress">
      <h2>Progress</h2>
      {mode === HOME && 
      <ProgressPaper elevation={10}>
  
      <ProgressButton>
      <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394796/brain_thxely.svg"/>
      </ProgressButton> 
      
      <ProgressButton>
      <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394641/emoji_z9c9di.svg"/>
      </ProgressButton> 
     
      <ProgressButton>
      <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394724/clock_cz4ub4.svg"/>
      </ProgressButton>
     
      </ProgressPaper>
      }
      {mode === MOOD && <MoodCalendar user={props.user}/>}
      {mode === TRAP && <ThinkingTrap user={props.user}/>}
      {mode === MEDITATION && <MeditationHistory user={props.user}/>}
    </main>
  )
}
