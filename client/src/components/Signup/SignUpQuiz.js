import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import QuestionList from "./QuestionList";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useSignUpQuiz from "../../hooks/useSignUpQuiz";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Paper } from "@material-ui/core";
import { Planet } from "react-kawaii";
const axios = require("axios").default;

const PaperQuiz = styled(Paper)`
  margin-top: 2em;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 3em;
  background-color: #353c52;
`;
const CardQuizList = styled(Card)`
  padding: 2em;
  margin-top: 2em;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2em;
  align-items: center;
  height: 100%;
  background-color: #353c52;
`;
const CardContentQuiz = styled(CardContent)`
  padding: 10px;
  margin-top: 2rem;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
`;
const StyledPlanet = styled(Planet)`
  margin-top: 3%;
`;
const Title = styled.h1`
  text-align: center;
  margin: 20px auto;
`;
const StyledButton = styled(Button)`
  margin-top: 5%;
  font-size: 1.25rem;
`;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  responseList: {
    justifyContent: "center",
    textAlign: "center",
    margin: theme.spacing(2)
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#353c52",
    color: "white"
  }
}));
export default function SignUpQuiz(props) {
  const classes = useStyles();
  const history = useHistory();

  const assignUserInterest = () => {
    const userId = props.user.id;
    const interests = Object.entries(questionState);

    let axiosArr = [];
    for (let interest of interests) {
      const postData = {
        interest_id: interest[0],
        value: interest[1],
        user_id: userId
      };
      const newPromise = axios({
        method: "post",
        url: "/user_interests",
        data: postData
      });
      axiosArr.push(newPromise);
    }

    return axios
      .all(axiosArr)
      .then(
        axios.spread((...responses) => {
          responses.forEach(res => console.log("Success"));
          localStorage.removeItem("mode");
          history.push("/menu");
        })
      )
      .catch(error => {
        console.log(error);
      });
  };

  const { handleSubmit, changeQuestion, questionState } = useSignUpQuiz(
    assignUserInterest
  );

  return (
    <main>
      <PaperQuiz className={classes.root} elevation={11}>
        <CardContentQuiz elevation={11}>
          <Title>Please fill out this short survey to get started. </Title>
          <StyledPlanet size={100} mood="happy" color="#FCCB7E" />
        </CardContentQuiz>
        <CardQuizList className={classes.responseList} elevation={12}>
          <form onSubmit={handleSubmit}>
            <QuestionList
              signupQuestions={props.signupQuestions}
              questionState={questionState}
              changeQuestion={changeQuestion}
            />
            <StyledButton type="submit" fullWidth variant="contained" color="primary">
              Submit
            </StyledButton>
          </form>
        </CardQuizList>
      </PaperQuiz>
    </main>
  );
}
