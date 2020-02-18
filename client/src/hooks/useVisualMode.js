import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial])

  function transition(newMode, replace = false) {
    if (replace) {
      setHistory(history => (history.slice(0, history.length-1).concat(newMode)))
    } else {
      setHistory(history => [...history, newMode])
    };
  };

  function back() {
    if (history.length > 1) {
      setHistory(history => history.slice(0, history.length - 1))
    };
  };
  console.log("what's history", history)

  return { mode: history[history.length-1], transition, back };
};