import React, { useState } from "react";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode"
import Followup from "./Followup.js";
import Completion from "./Completion.js";
import Start from "./Start.js";
import sampleData from "./sampleData.js"

const MOOD = "MOOD";
const QUESTION = "QUESTION";
const FOLLOWUP = "FOLLOWUP";
const COMPLETION = "COMPLETION";
const START = "START"

export default function Workthrough() {

  const [state, setState] = useState({
    questions: [],
    responses: [],
    currentQuestion: {}
  })

  const { mode, transition, back } = useVisualMode(START);

  const startNextQuestion = () => {
    transition(QUESTION)
  }

  const unansweredQuestions = state.questions.filter(question => !question.answered)
  if (!state.currentQuestion.id && unansweredQuestions.length) {
    const currentQuestion = unansweredQuestions.pop()
    setState(prev => ({
      ...prev,
      currentQuestion
    }))
  } else if (!unansweredQuestions.length && state.questions.length && mode !== COMPLETION) {
    transition(COMPLETION)
  }

  const responses = state.responses.filter(response => {
    return response.thought === state.currentQuestion.id;
  })

  const startWorkthrough = (numberOfQuestions) => {
    const shuffled = sampleData.sampleThoughtData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, numberOfQuestions)
    for (let question of selected) {
      question.answered = false;
    }
    setState(prev => ({ ...prev, questions: selected, responses: sampleData.sampleResponseData }));
    startNextQuestion();
  }

  const respond = () => {
    setState(prev => ({
      ...prev,
      questions: [
        ...state.questions.filter(({ id }) => id !== state.currentQuestion.id),
        { ...state.currentQuestion, answered: true }
      ],
      currentQuestion: {}
    }))
  }

  const currentProgress = state.questions.filter(question => {
    return question.answered === false
  }).length

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === START && <Start
          startWorkthrough={startWorkthrough} />}
        {mode === MOOD && <Mood />}
        {mode === QUESTION && <Question question={state.currentQuestion} responses={responses} onResponse={respond} />}
        {mode === FOLLOWUP && <Followup />}
        {mode === COMPLETION && <Completion />}
      </section>
      <section>
        <label htmlFor="workthrough-progress">Progress {state.questions.length - currentProgress}/{state.questions.length}</label>
        <progress id="workthrough-progress" max="100" ></progress>
        <span role="img" aria-label="up-arrow">⬆</span>
        <span role="img" aria-label="down-arrow">⬇</span>
      </section>
    </main>
  )
}
