import React from "react";

export default function StaticPage(props) {
  return (
    <main className="static-page">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </main>
  );
}
