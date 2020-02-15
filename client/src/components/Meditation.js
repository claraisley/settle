import React from "react";

export default function Meditation(props) {

  const meditationData = [
    { "id": 1, "name": "One minute", "value": "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" },
    { "id": 2, "name": "Two minutes", "value": "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" },
    { "id": 3, "name": "Three minutes", "value": "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav" }
  ]

  const meditations = meditationData.map(meditation => {
    return (
      <div key={meditation.id}>
        <h3>{meditation.name}</h3>
        <audio controls src={meditation.value}></audio>
      </div>
    )
  })

  return (
    <main className="meditations">
      <h2>Meditations</h2>
      {meditations}
    </main>
  )
}
