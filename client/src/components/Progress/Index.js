import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import MoodCalendar from "./MoodCalendar";
import ThinkingTrap from "./ThinkingTrap";
import Button from "@material-ui/core/Button";
import MeditationHistory from "./MeditationHistory";
import useVisualMode from "../../hooks/useVisualMode";
import Paper from "@material-ui/core/Paper";

const ProgressButton = styled(Button)`
  width: 20vw;
  margin-top: 10%;
`;
const ProgressImg = styled.img`
  width: 18vw;
`;
const ProgressPaper = styled(Paper)`
  margin-top: 10%;
  margin-bottom: 5%;
  margin-left: 2%;
  margin-right: 2%;
  background-color: #353c52;
  padding: 3% 0 5% 0;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 4vw;
  margin-right: 4vw;
`;
const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  }
}));

export default function Progress(props) {
  const HOME = "HOME";
  const MOOD = "MOOD";
  const TRAP = "TRAP";
  const MEDITATION = "MEDITATION";
  const classes = useStyles();

  const { mode, transition } = useVisualMode(HOME);

  const goToProgressPage = mode => {
    transition(mode);
  };

  return (
    <main className="progress">
      {mode === HOME && (
        <div className={classes.root}>
          <ProgressPaper elevation={12}>
            <StyledSection>
              <StyledDiv>
                <ProgressButton onClick={() => { goToProgressPage(TRAP) }}>
                  <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394796/brain_thxely.svg" />
                </ProgressButton>
                <ProgressButton onClick={() => { goToProgressPage(TRAP) }}>
                  <h1>Thinking Trap Progress</h1>
                </ProgressButton>
              </StyledDiv>
              <StyledDiv>
                <ProgressButton onClick={() => { goToProgressPage(MOOD) }}>
                  <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394641/emoji_z9c9di.svg" />
                </ProgressButton>
                <ProgressButton onClick={() => { goToProgressPage(MOOD) }}>
                  <h1>Mood Tracker</h1>
                </ProgressButton>
              </StyledDiv>
              <StyledDiv>
                <ProgressButton onClick={() => { goToProgressPage(MEDITATION) }}>
                  <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394724/clock_cz4ub4.svg" />
                </ProgressButton>
                <ProgressButton onClick={() => { goToProgressPage(MEDITATION) }}>
                  <h1>Meditation Tracker</h1>
                </ProgressButton>
              </StyledDiv>
            </StyledSection>
          </ProgressPaper>
        </div>
      )}
      {mode === TRAP && (<ThinkingTrap user={props.user} goToProgressPage={goToProgressPage} />)}
      {mode === MOOD && (<MoodCalendar user={props.user} goToProgressPage={goToProgressPage} />)}
      {mode === MEDITATION && (<MeditationHistory user={props.user} goToProgressPage={goToProgressPage} />)}
    </main>
  );
}
