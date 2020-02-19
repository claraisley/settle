import React from "react";

export default function Followup(props) {

  return (
    <main className="followup">
      <h2>Followup</h2>
      <p>{props.followup[0].text}</p>
    </main>
  )
}
