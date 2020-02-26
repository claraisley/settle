import React from "react";
import styled from "styled-components";
import MoodCalendar from "./MoodCalendar";
import ThinkingTrap from "./ThinkingTrap";
import Button from "@material-ui/core/Button";
import MeditationHistory from "./MeditationHistory";
import useVisualMode from "../../hooks/useVisualMode";
import Paper from "@material-ui/core/Paper";
import { ButtonBase, Card, Typography } from "@material-ui/core";

const ProgressButton = styled(Button)``;
const ProgressImg = styled.img`
  width: 20vw;
`;
const ProgressPaper = styled(Paper)`
  margin-top: 10%;
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
const Buttons = styled(ButtonBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21vw;
  margin-top: 10%;
`;
const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CardProgress = styled(Card)`
  margin-left: 10%;
  margin-right: 10%;
  padding: 1em;
  flex-direction: column;
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
            <CardProgress>
              <Buttons
                onClick={() => {
                  goToProgressPage(TRAP);
                }}
              >
                <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394796/brain_thxely.svg" />
                <Typography>Thinking Trap Progress</Typography>
              </Buttons>
            </CardProgress>
            <Buttons>
              <ProgressButton
                onClick={() => {
                  goToProgressPage(MOOD);
                }}
              >
                <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394641/emoji_z9c9di.svg" />
              </ProgressButton>
              <ProgressButton
                onClick={() => {
                  goToProgressPage(MOOD);
                }}
              >
                <h1>Mood Tracker</h1>
              </ProgressButton>
            </Buttons>
            <ButtonBase>
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
            </ButtonBase>
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
