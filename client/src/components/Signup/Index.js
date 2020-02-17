import React from "react";
import SignUpForm from "./Form";



export default function Signup() {

  const SIGNUPFORM = "FORM"
  const WELCOME = "WELCOME"

  const userCreated = () => {
    console.log('okay')
  }


  return <SignUpForm userCreated={userCreated}/>;
}
