import React from "react";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode"
import Followup from "./Followup.js";
import Completion from "./Completion.js";

const MOOD = "MOOD";
const QUESTION = "QUESTION";
const FOLLOWUP = "FOLLOWUP";
const COMPLETION = "COMPLETION";

export default function Workthrough() {

  const { mode, transition, back } = useVisualMode(MOOD);

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === MOOD && <Mood />}
        {mode === QUESTION && <Question />}
        {mode === FOLLOWUP && <Followup />}
        {mode === COMPLETION && <Completion />}
      </section>
      <section>
        <label htmlFor="workthrough-progress">Progress</label>
        <progress id="workthrough-progress"></progress>
      </section>
    </main>
  )
}
