import React from "react";
import StaticItem from "./StaticItem.js";

export default function StaticPage(props) {

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
