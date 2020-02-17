import React from "react";

export default function Question(props) {

  return (
    <main className="question">
      <h2>Question</h2>
      <h4>{props.question.text}</h4>
      <button onClick={() => props.onResponse()}>{props.responses[0].text}</button>
      <button onClick={() => props.onResponse()}>{props.responses[1].text}</button>
      <button onClick={() => props.onResponse()}>{props.responses[2].text}</button>
    </main>
  )
}
