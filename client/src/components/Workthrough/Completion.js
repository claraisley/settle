import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
import { CardActions, ButtonBase } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    margin: "2em",
    backgroundColor: "#353c52"
  }
}));

const Papers = styled(Paper)`
  text-align: center;
  background-color: #353c52;
  color: white;
`;

const Paragraphs = styled(Typography)`
  font-size: large;
  font-weight: 400;
`;

const CardStart = styled(Card)`
  padding: 1em;
  flex-direction: column;
`;

const CardActionStart = styled(CardActions)`
  padding: 0;
  & > p {
    margin-top: 5%;
    margin-bottom: 5%;
    color: #deb559;
    text-align: center;
  }
`;

export default function Completion(props) {
  let history = useHistory();
  const classes = useStyles();
  return (
    <main className="completion">
      <h2>You're all finished!</h2>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Papers elevation={7} className={classes.paper}>
              <Paragraphs>
                We hope you're feeling ready for your test or quiz. If you have
                a little extra time, do you want to try a meditation or go
                through some tips and tricks?
              </Paragraphs>
              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => history.push("/meditations")}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>MEDITATIONS</Paragraphs>
                  </CardActionStart>
                </ButtonBase>
              </CardStart>
              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => history.push("/tips-tricks")}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>TIPS AND TRICKS</Paragraphs>
                  </CardActionStart>
                </ButtonBase>
              </CardStart>

              <Paragraphs>
                Or do you want to do another work-through?
              </Paragraphs>
              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => props.restartWorkthrough()}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>START NEW WORK-THROUGH</Paragraphs>
                  </CardActionStart>
                </ButtonBase>
              </CardStart>

              <Paragraphs>If not, have fun and do your best!</Paragraphs>
              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => history.push("/menu")}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>HOME</Paragraphs>
                  </CardActionStart>
                </ButtonBase>
              </CardStart>
            </Papers>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
