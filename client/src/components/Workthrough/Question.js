import React from "react";

export default function Question(props) {

  const responseList = props.responses.map(response => {
    return <button onClick={() => props.onResponse(response.id)} key={response.id} >{response.text}</button> })

  return (
    <main className="question">
      <h4>{props.question.text}</h4>
      {responseList}
    </main>
  )
}
