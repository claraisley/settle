import React, { useState } from "react";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode"
import Followup from "./Followup.js";
import Completion from "./Completion.js";
import Start from "./Start.js";
import axios from "axios";

const MOOD = "MOOD";
const QUESTION = "QUESTION";
const FOLLOWUP = "FOLLOWUP";
const COMPLETION = "COMPLETION";
const START = "START"

export default function Workthrough() {

  const [state, setState] = useState({
    questions: [],
    currentQuestion: {},
    responsesChosen: [],
    currentFollowup: {}
  })
  console.log("STATE", state)

  const { mode, transition, back } = useVisualMode(START);

  const startNextQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestion: {}
    }))
    transition(QUESTION)
  }

  const unansweredQuestions = state.questions.filter(question => !question.answered)
  // sets a current questions if there's no current question and there's still unanswered questions
  if (!state.currentQuestion.id && unansweredQuestions.length) {
    const currentQuestion = unansweredQuestions.pop()
    setState(prev => ({
      ...prev,
      currentQuestion
    }))
    // transitions to mood when there's no unanswered questions left (and it's not start or completion)
    // this function is why the back button on mood doesn't work...to be fixed depending on how we want to allow users to go back
  } else if (!unansweredQuestions.length && mode !== START && mode !== MOOD && mode !== COMPLETION) {
    transition(MOOD)
  }

  // starts the workthrough when the user selects 4 or 6 questions. needs to be updated to pull real data
  const startWorkthrough = (numberOfQuestions) => {
    axios.request({
      url: 'http://localhost:3001/reflections',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      params: {
        number: numberOfQuestions
      },
      withCredentials: true
    }).then(function (response) {
      for (let question of response.data) {
        question.answered = false;
      }
      setState(prev => ({ ...prev, questions: response.data }));
      startNextQuestion();
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  // this function is triggered when a user responds to a question
  // sets the current question answered to true
  const respond = (responseID) => {
    const followup = state.currentQuestion.responses.find(response => response.id === responseID)
    setState(prev => ({
      ...prev,
      questions: [
        ...state.questions.filter(({ id }) => id !== state.currentQuestion.id),
        { ...state.currentQuestion, answered: true }
      ],
      // adds their response to an array in state (just the id)
      responsesChosen: [...prev.responsesChosen, responseID],
      currentFollowup: followup
    }))
    transition(FOLLOWUP)
  }

  // triggered when a user responds to the mood question. currently doesn't save their response anywhere
  const respondMood = () => {
    transition(COMPLETION)
  }

  // finds the followup to display to the user based on the response that they picked

  // progress is based on number of questions answered so doesn't go down if the user presses the back button
  const currentProgress = state.questions.filter(question => {
    return question.answered === false
  }).length

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === START && <Start startWorkthrough={startWorkthrough} />}
        {mode === MOOD && <Mood onResponse={respondMood} />}
        {mode === QUESTION && <Question question={state.currentQuestion} responses={state.currentQuestion.responses} onResponse={respond} />}
        {mode === FOLLOWUP && <Followup />}
        {mode === COMPLETION && <Completion />}
      </section>
      <section>
        <label htmlFor="workthrough-progress">Progress {state.questions.length - currentProgress}/{state.questions.length}</label>
        <progress id="workthrough-progress" max="100" ></progress>
        <button onClick={() => back()}>⬆</button>
        <button onClick={() => startNextQuestion()}>⬇</button>
      </section>
    </main>
  )
}
