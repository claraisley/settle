import React from "react";

export default function Mood() {
  return (
    <main className="Mood">
      <h2>Mood</h2>
      <h4>How are you feeling right now?</h4>
      <span role="img" aria-label="sad">😟</span>
      <span role="img" aria-label="neutral">😐</span>
      <span role="img" aria-label="happy">😃</span>
    </main>
  )
}
