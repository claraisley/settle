import React from "react";

export default function Mood(props) {
  return (
    <main className="Mood">
      <h2>Mood</h2>
      <h4>How are you feeling right now?</h4>
      <button onClick={props.onResponse}><span role="img" aria-label="sad">😟</span></button>
      <button onClick={props.onResponse}><span role="img" aria-label="neutral">😐</span></button>
      <button onClick={props.onResponse}><span role="img" aria-label="happy">😃</span></button>
    </main>
  )
}
