import React from "react";

export default function StaticItem(props) {
  return (
    <div className="staticItem">
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </div>
  )
}
