import React from "react";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode"

const MOOD = "MOOD";
const QUESTION = "QUESTION";

export default function Workthrough() {

  const { mode, transition, back } = useVisualMode(MOOD);

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === MOOD && <Mood />}
        {mode === QUESTION && <Question />}
      </section>
    </main>
  )
}
