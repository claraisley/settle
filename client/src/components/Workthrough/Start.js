import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import "./question.css";

const ButtonDiv = styled.div`
  justify-content: center;
  text-align: center;
`;
const CardStart = styled(Card)`
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
  padding: 1em;
  flex-direction: column;
`;

const CardContentStart = styled(CardContent)`
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
      height: theme.spacing(64),
      backgroundColor: "#353c52",
      backgroundImage: `url(http://www.transparenttextures.com/patterns/cubes.png)`
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
            <CardContentStart>
              <TypographyStart gutterBottom>
                The test I'm preparing for is today
              </TypographyStart>
            </CardContentStart>
            <ButtonDiv>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => props.startWorkthrough(3)}
              >
                Today
              </Button>
            </ButtonDiv>
          </CardStart>
          <CardStart className={classes.cards}>
            <CardContentStart>
              <TypographyStart gutterBottom>
                The test I'm preparing for is tomorrow
              </TypographyStart>
            </CardContentStart>
            <ButtonDiv>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => props.startWorkthrough(5)}
              >
                Tomorrow
              </Button>
            </ButtonDiv>
          </CardStart>
        </Paper>
      </div>
    </main>
  );
}
