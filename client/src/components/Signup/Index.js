import React from "react";
import SignUpForm from "./Form";
import useVisualMode from "../../hooks/useVisualMode"
import SignUpQuiz from "./SignUpQuiz";




export default function Signup(props) {

 
  const SIGNUPFORM = "SIGNUPFORM"
  const SIGNUPQUIZ = "SIGNUPQUIZ"

  const { mode, transition, back } = useVisualMode(SIGNUPFORM);


  
  


  const userCreated = () => {
    transition(SIGNUPQUIZ)
  }
  


  return (
    <article>
      {mode === SIGNUPFORM && <SignUpForm userCreated={userCreated} setUser={props.setUser} />}
      {mode === SIGNUPQUIZ && <SignUpQuiz user={props.user} signupQuestions={props.signupQuestions} />}
    </article>
  ) 
}
