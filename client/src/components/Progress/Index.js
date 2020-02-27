import React from "react";
import styled from "styled-components";
import MoodCalendar from "./MoodCalendar";
import ThinkingTrap from "./ThinkingTrap";
import Button from "@material-ui/core/Button";
import MeditationHistory from "./MeditationHistory";
import useVisualMode from "../../hooks/useVisualMode";
import Paper from "@material-ui/core/Paper";

const ProgressButton = styled(Button)`
  width: 21vw;
  margin-top: 10%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const ProgressImg = styled.img`
  width: 20vw;
`;
const ProgressPaper = styled(Paper)`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 90vw;
  background-color: #353c52;
  padding: 3% 0 5% 0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Progress(props) {
  const HOME = "HOME";
  const MOOD = "MOOD";
  const TRAP = "TRAP";
  const MEDITATION = "MEDITATION";

  const { mode, transition } = useVisualMode(HOME);

  const goToProgressPage = mode => {
    transition(mode);
  };

  return (
    <main className="progress">
      {mode === HOME && (
        <OuterDiv>
          <ProgressPaper elevation={12}>
            <StyledDiv>
              <ProgressButton
                onClick={() => {
                  goToProgressPage(TRAP);
                }}
              >
                <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394796/brain_thxely.svg" />
              </ProgressButton>
              <ProgressButton
                onClick={() => {
                  goToProgressPage(TRAP);
                }}
              >
                <h1>Thinking Traps</h1>
              </ProgressButton>
            </StyledDiv>
            <StyledDiv>
              <ProgressButton
                onClick={() => {
                  goToProgressPage(MOOD);
                }}
              >
                <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394641/emoji_z9c9di.svg" />
              </ProgressButton>
              <ProgressButton onClick={() => { goToProgressPage(MOOD) }}>
                <h1>Mood Calendar</h1>
              </ProgressButton>
            </StyledDiv>
            <StyledDiv>
              <ProgressButton
                onClick={() => {
                  goToProgressPage(MEDITATION);
                }}
              >
                <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394724/clock_cz4ub4.svg" />
              </ProgressButton>
              <ProgressButton
                onClick={() => {
                  goToProgressPage(MEDITATION);
                }}
              >
                <h1>Meditation Tracker</h1>
              </ProgressButton>
            </StyledDiv>
          </ProgressPaper>
        </OuterDiv>
      )}
      {mode === TRAP && (
        <ThinkingTrap user={props.user} goToProgressPage={goToProgressPage} />
      )}
      {mode === MOOD && (
        <MoodCalendar user={props.user} goToProgressPage={goToProgressPage} />
      )}
      {mode === MEDITATION && (
        <MeditationHistory
          user={props.user}
          goToProgressPage={goToProgressPage}
        />
      )}
    </main>
  );
}
