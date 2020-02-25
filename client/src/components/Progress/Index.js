import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import MoodCalendar from "./MoodCalendar";
import ThinkingTrap from "./ThinkingTrap";
import Button from "@material-ui/core/Button";
import MeditationHistory from "./MeditationHistory";
import useVisualMode from "../../hooks/useVisualMode";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ProgressButton = styled(Button)`
  height: 300px;
  width: 300px;
`;
const ProgressImg = styled.img`
  height: 200px;
  width: 200px;
`;
const ProgressPaper = styled(Paper)`
  margin-top: 10%;
  margin-bottom: 5%;
  background-color: #353c52;
`;
const StyledDiv = styled.div`
  margin-left: 5%;
`;
const StyledTitle = styled.h2`
  margin-left: 14%;
  margin-bottom: 5%;
`;
const StyledTitle2 = styled.h2`
  margin-left: 22%;
`;
const StyledTitle3 = styled.h2`
  margin-left: 17%;
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <ProgressPaper elevation={12}>
                <StyledDiv>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <ProgressButton onClick={() => {goToProgressPage(TRAP)}}>
                      <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394796/brain_thxely.svg" />
                    </ProgressButton>
                    <StyledTitle>Thinking Trap Progress</StyledTitle>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <ProgressButton onClick={() => {goToProgressPage(MOOD)}}>
                      <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394641/emoji_z9c9di.svg" />
                    </ProgressButton>
                    <StyledTitle2>Mood Tracker</StyledTitle2>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <ProgressButton onClick={() => {goToProgressPage(MEDITATION)}}>
                      <ProgressImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582394724/clock_cz4ub4.svg" />
                    </ProgressButton>
                    <StyledTitle3>Meditation Tracker</StyledTitle3>
                  </Grid>
                </Grid>
                </StyledDiv>
              </ProgressPaper>
            </Grid>
          </Grid>
        </div>
      )}
      {mode === TRAP && (<ThinkingTrap user={props.user} goToProgressPage={goToProgressPage} />)}
      {mode === MOOD && (<MoodCalendar user={props.user} goToProgressPage={goToProgressPage} />)}
      {mode === MEDITATION && (<MeditationHistory user={props.user} goToProgressPage={goToProgressPage}/>)}
    </main>
  );
}
