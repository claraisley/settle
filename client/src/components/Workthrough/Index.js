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
    responses: []
  })

  const { mode, transition, back } = useVisualMode(START);

  const startWorkthrough = (numberOfQuestions) => {
    const shuffled = sampleData.sampleThoughtData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, numberOfQuestions)
    for (let question of selected) {
      question.answered = false;
    }
    setState(prev => ({ ...prev, questions: selected, responses: sampleData.sampleResponseData }))
    startNextQuestion();
  }

  const currentQuestion = state.questions.find(question => {
    return question.answered === false;
  })

  const currentResponses = state.responses.filter(response => {
    return response.thought === currentQuestion.id;
  })

  const startNextQuestion = () => {
    transition(QUESTION)
  }

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === START && <Start
          startWorkthrough={startWorkthrough} />}
        {mode === MOOD && <Mood />}
        {mode === QUESTION && <Question question={currentQuestion} responses={currentResponses} />}
        {mode === FOLLOWUP && <Followup />}
        {mode === COMPLETION && <Completion />}
      </section>
      <section>
        <label htmlFor="workthrough-progress">Progress</label>
        <progress id="workthrough-progress"></progress>
        <span role="img" aria-label="up-arrow">⬆</span>
        <span role="img" aria-label="down-arrow">⬇</span>
      </section>
    </main>
  )
}
