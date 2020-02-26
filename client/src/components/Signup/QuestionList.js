import React from "react";
import QuestionItem from "./QuestionItem";

export default function QuestionList(props) {
  const questionList = props.signupQuestions.map((question, index) => {
    return (
      <QuestionItem
        key={index}
        id={question.id}
        question={question.question}
        field={question.question_field}
        value={props.questionState[question.id]}
        changeQuestion={props.changeQuestion}
      />
    );
  });

  return questionList;
}
