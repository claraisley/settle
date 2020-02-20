import React from "react";
import SignUpForm from "./Form";
import useVisualMode from "../../hooks/useVisualMode"
import SignUpQuiz from "./SignUpQuiz";





export default function Signup(props) {

 
  const FORM = "SIGNUPFORM"
  const QUIZ = "SIGNUPQUIZ"

  const storedMode = localStorage.getItem('mode');

  const { mode, transition } = useVisualMode(storedMode? storedMode : FORM);

 
  


  const userCreated = () => {
    transition(QUIZ)
  }
  


  return (
    <article>
      {mode === FORM && <SignUpForm userCreated={userCreated} setUser={props.setUser} user={props.user}/>}
      {mode === QUIZ && <SignUpQuiz user={props.user} signupQuestions={props.signupQuestions} />}
    </article>
  ) 
}
