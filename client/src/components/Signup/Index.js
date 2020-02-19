import React from "react";
import SignUpForm from "./Form";
import useVisualMode from "../../hooks/useVisualMode"
import SignUpQuiz from "./SignUpQuiz";




export default function Signup(props) {

 
  const FORM = "SIGNUPFORM"
  const QUIZ = "SIGNUPQUIZ"

  const { mode, transition, back } = useVisualMode(FORM);

  // if (props.user.name) {
  //   transition(QUIZ)
  // } 
  
  


  const userCreated = () => {
    transition(QUIZ)
  }
  


  return (
    <article>
      {mode === FORM && <SignUpForm userCreated={userCreated} setUser={props.setUser} />}
      {mode === QUIZ && <SignUpQuiz user={props.user} signupQuestions={props.signupQuestions} />}
    </article>
  ) 
}
