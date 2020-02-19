import React from "react";

export default function Followup(props) {

  return (
    <main className="followup">
      <p>{props.followup[0].text}</p>
      <h4>Related thinking trap: {props.thinkingTrap.name}</h4>
      <p>{props.thinkingTrap.definition}</p>
    </main>
  )
}
