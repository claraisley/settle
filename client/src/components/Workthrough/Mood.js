import React from "react";

export default function Mood(props) {
  return (
    <main className="Mood">
      <h2>Mood</h2>
      <h4>How are you feeling right now?</h4>
      <button onClick={props.onResponse}>😟</button>
      <button onClick={props.onResponse}>😐</button>
      <button onClick={props.onResponse}>😃</button>
    </main>
  )
}
