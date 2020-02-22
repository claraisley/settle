import React from "react";
import { Backpack } from 'react-kawaii'

export default function StaticPage(props) {
  return (
    <main className="static-page">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <Backpack size={90} mood="excited" color="#FFD882" />
    </main>
  )
}
