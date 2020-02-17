import React from "react";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode"
import Followup from "./Followup.js";
import Completion from "./Completion.js";
import Start from "./Start.js";

const MOOD = "MOOD";
const QUESTION = "QUESTION";
const FOLLOWUP = "FOLLOWUP";
const COMPLETION = "COMPLETION";
const START = "START"

const sampleThoughtData = [
  {
    "id": 1,
    "interest_id": "NIL",
    "text": "If I mess this test up, will [pet name] be there for me when I get home?",
  },
  {
    "id": 2,
    "interest_id": "NIL",
    "text": "People can tell when I am feeling anxious.",
  },
  {
    "id": 3,
    "interest_id": "NIL",
    "text": "Text for example thought numero 3.",
  },
  {
    "id": 4,
    "interest_id": "NIL",
    "text": "Text for example thought numero 4.",
  },
  {
    "id": 5,
    "interest_id": "NIL",
    "text": "Text for example thought numero 5.",
  },
  {
    "id": 6,
    "interest_id": "NIL",
    "text": "Text for example thought numero 6.",
  }]

export default function Workthrough() {

  const { mode, transition, back } = useVisualMode(START);

  const startWorkthrough = (numberOfQuestions) => {
    const shuffled = sampleThoughtData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, numberOfQuestions)
    console.log(selected)
  }

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === START && <Start
        startWorkthrough={startWorkthrough} />}
        {mode === MOOD && <Mood />}
        {mode === QUESTION && <Question />}
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
