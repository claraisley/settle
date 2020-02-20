import React, { useState } from "react";
import QuestionItem from "./QuestionItem";


export default function QuestionList(props) {
  

 console.log(props.signupQuestions)
  const questionList = props.signupQuestions.map(question => {
    
    return (
      <article>
        <QuestionItem
          key={question.id}
          id={question.id}
          question={question.question}
          field={question.question_field}
          value={props.questionState[question.id]}
          changeQuestion={props.changeQuestion}
        />
       
      </article>
    );
  });

  return questionList;
}
