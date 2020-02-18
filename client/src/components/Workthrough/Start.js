import React from "react";

export default function Start(props) {
  return (
    <main className="start">
      <h2>When is the test that you're preparing for?</h2>
      <button onClick={() => props.startWorkthrough(4)}>Today</button>
      <button onClick={() => props.startWorkthrough(6)}>Tomorrow</button>
    </main>
  )
}
