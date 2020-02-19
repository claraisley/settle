import React from "react";
import QuestionItem from "./QuestionItem";


export default function QuestionList(props) {
  console.log("now in question list", props.signupQuestions)

  const questionList = props.signupQuestions.map(question => {

    return (
      <QuestionItem
      key={question.id}
      question={question.question}
      field={question.question_field}
      />
    )

  });
  
  
  

  return questionList;
}