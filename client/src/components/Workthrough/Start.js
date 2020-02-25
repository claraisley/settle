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


const StaticPaper2 = styled(Paper)`
  width: 90%;
  margin: 10px auto;
  background-color: #353c52;
  justify-content: center;
  align-items: center;
  padding: 1%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px auto;
  marfin-top: 5%;
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5em;
  font-weight: normal;
  margin: 15px;
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
      <Title>Work-Throughs</Title>
      <StaticPaper2 elevation={10}>
        <Text>
          Thoughts are the things that we say to ourselves without speaking out
          loud (self-talk). Each of us have our own way of thinking about
          things, but it's important to recognize that our self-talk has a big
          effect on how we feel. As a test approaches and you feel anxious, use
          these Work-Throughs to identify which Thinking Traps you are falling
          into, and to help you challenge anxious thoughts as they arise.{" "}
        </Text>
      </StaticPaper2>
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
