import React from "react";
import Calendar from 'react-calendar';

export default function MoodCalendar() {
  // const tileContent = ({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>Sunday!</p> : null;
  const tileContent = ({date}) => `
  ${date.getUTCMonth()} / ${date.getUTCDate()} / ${date.getUTCFullYear()}`;

  return (
    <main className="mood-calendar">
      <h2>Mood Chart</h2>
      <Calendar tileContent={tileContent} />
    </main>
  )
}
