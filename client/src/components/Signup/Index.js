import React from "react";
import SignUpForm from "./Form";
import Welcome from "./Welcome"
import useVisualMode from "../../hooks/useVisualMode"




export default function Signup(props) {

 
  const SIGNUPFORM = "FORM"
  const WELCOME = "WELCOME"

  const { mode, transition, back } = useVisualMode(WELCOME);


  
  


  const userCreated = () => {
    transition(WELCOME)
  }


  return (
    <article>
      {mode === SIGNUPFORM && <SignUpForm userCreated={userCreated} setUser={props.setUser} />}
      {mode === WELCOME && <Welcome user={props.user} signupQuestions={props.signupQuestions} />}
    </article>
  ) 
}
