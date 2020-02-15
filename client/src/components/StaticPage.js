import React from "react";
import StaticItem from "./StaticItem.js";

export default function StaticPage(props) {

  console.log("static page data", props.data)

  const meditations = [
    {"id": 1, "name": "One minute", "value": "www.google.ca"},
    {"id": 2, "name": "Two minutes", "value": "www.google.ca"},
    {"id": 3, "name": "Three minutes", "value": "www.google.ca"}
  ]

  const items = props.data.map(data => {
    return <StaticItem
    key={data.id}
    name={data.name}
    text={data.text} />
  })

  return (
    <main className="static">
      <h2>{props.title}</h2>
      {items}
    </main>
  )
}
