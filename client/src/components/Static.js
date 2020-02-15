import React from "react";
import StaticItem from "./StaticItem.js";

export default function Static(props) {

  const meditations = [
    {"id": 1, "name": "One minute", "value": "www.google.ca"},
    {"id": 2, "name": "Two minutes", "value": "www.google.ca"},
    {"id": 3, "name": "Three minutes", "value": "www.google.ca"}
  ]

  const items = meditations.map(meditation => {
    return <StaticItem
    key={meditation.id}
    name={meditation.name}
    value={meditation.value} />
  })

  console.log(items)

  return (
    <main className="static">
      <h2>Static</h2>
      {items}
    </main>
  )
}
