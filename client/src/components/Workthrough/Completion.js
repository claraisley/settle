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
    margin: "1em",
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
                Great job on completing that Work-Through! Good luck on your test, you've got this!
              </Paragraphs>

              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => props.restartWorkthrough()}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>Do another Work-Through</Paragraphs>
                  </CardActionStart>
                </ButtonBase>
              </CardStart>

              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => history.push("/meditations")}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>Explore Meditations</Paragraphs>
                  </CardActionStart>
                </ButtonBase>
              </CardStart>
             

              
              

              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => history.push("/menu")}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>Home</Paragraphs>
                  </CardActionStart>
                </ButtonBase>
              </CardStart>

              <CardStart elevation={4} className={classes.cards}>
                <ButtonBase onClick={() => history.push("/tips-tricks")}>
                  <CardActionStart>
                    <Paragraphs gutterBottom>Go to Dos and Don'ts</Paragraphs>
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
