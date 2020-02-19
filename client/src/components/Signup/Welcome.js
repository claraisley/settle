import React from "react";
import QuestionList from "./QuestionList"

export default function Welcome(props) {

  
console.log("here at welcome", props.signupQuestions)

  return (
    <main>
      <p>Thanks for signing up {props.user.name} {props.user.id}, we'd like to ask you a few questions to get to know you better. It'll help us loads!</p>
      <QuestionList signupQuestions={props.signupQuestions}/>
    </main>
  )
}