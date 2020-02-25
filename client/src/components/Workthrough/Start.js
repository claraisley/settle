import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./question.css";
import FormLabel from "@material-ui/core/FormLabel";
import { CardActions, ButtonBase } from "@material-ui/core";

const CardStart = styled(Card)`
  margin-left: 10%;
  margin-right: 10%;
  padding: 1em;
  flex-direction: column;
`;
const CardActionStart = styled(CardActions)`
  padding: 0;
  & > p {
    margin-top: 5%;
    margin-bottom: 5%;
    color: white;
    text-align: center;
  }
`;
const TypographyStart = styled(Typography)`
  font-size: x-large;
  font-weight: 600;
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      backgroundColor: "#353c52",
    }
  },
  button: {
    justifyContent: "center",
    textAlign: "center",
    margin: theme.spacing(2)
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    margin: "10%",
    backgroundColor: "#353c52",
    color: "white"
  }
}));

export default function Start(props) {
  const classes = useStyles();

  return (
    <main className="start">
      <div className={classes.root}>
        <Paper elevation={10}>
          <CardStart className={classes.cards}>
            <ButtonBase onClick={() => props.startWorkthrough(3)}>
              <CardActionStart>
                <TypographyStart gutterBottom>
                  The test I'm preparing for is today
                </TypographyStart>
              </CardActionStart>
            </ButtonBase>
          </CardStart>
          <CardStart className={classes.cards}>
            <ButtonBase onClick={() => props.startWorkthrough(5)}>
              <CardActionStart>
                <TypographyStart gutterBottom>
                  The test I'm preparing for is tomorrow
                </TypographyStart>
              </CardActionStart>
            </ButtonBase>
          </CardStart>
        </Paper>
      </div>
    </main>
  );
}
