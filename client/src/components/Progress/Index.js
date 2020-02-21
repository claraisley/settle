import React from "react";
import MoodCalendar from "./MoodCalendar";
import ThinkingTrap from "./ThinkingTrap"
import MeditationHistory from "./MeditationHistory"

export default function Progress(props) {
  return (
    <main className="progress">
      <h2>Progress</h2>
      <MoodCalendar user={props.user} />
      <ThinkingTrap />
      <MeditationHistory user={props.user} />
    </main>
  )
}
