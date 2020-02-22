import React from "react";
import QuestionItem from "./QuestionItem";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useSignUpQuiz from "../../hooks/useSignUpQuiz";
import Card from "@material-ui/core/Card";

const ListCard = styled(Card)``;

export default function QuestionList(props) {
  const questionList = props.signupQuestions.map(question => {
    return (
      <body>
        <QuestionItem
          key={question.id}
          id={question.id}
          question={question.question}
          field={question.question_field}
          value={props.questionState[question.id]}
          changeQuestion={props.changeQuestion}
        />
      </body>
    );
  });

  return questionList;
}
