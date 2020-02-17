import React from "react";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode"
import Followup from "./Followup.js";
import Completion from "./Completion.js";
import LengthPicker from "./LengthPicker.js";

const MOOD = "MOOD";
const QUESTION = "QUESTION";
const FOLLOWUP = "FOLLOWUP";
const COMPLETION = "COMPLETION";
const LENGTHPICKER = "LENGTHPICKER"

export default function Workthrough() {

  const { mode, transition, back } = useVisualMode(LENGTHPICKER);

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === LENGTHPICKER && <LengthPicker />}
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
