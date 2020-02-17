import React from "react";

export default function Welcome(props) {
  return (
    <main className="Question">
      <h2>Question</h2>
      <p>Thanks for signing up {props.user.email} {props.user.id}, we'd like to ask you a few questions to get to know you better.</p>
      <form>
        <button type="submit">Okay</button>
      </form>
    </main>
  )
}