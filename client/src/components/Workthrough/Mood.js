import React from "react";

export default function Mood(props) {

  const moods = [
    { emoji: "😟", value: 1, label: "sad" }, 
    { emoji: "😐", value: 2, label: "neutral" }, 
    { emoji: "😃", value: 3, label: "happy" }
  ]
  const moodList = moods.map(mood => {
    return <button onClick={() => props.onResponse(mood.value)} key={mood.value}><span role="img" aria-label={mood.label}>{mood.emoji}</span></button>
  })

  return (
    <main className="Mood">
      <h2>Mood</h2>
      <h4>How are you feeling right now?</h4>
      {moodList}
    </main>
  )
}
