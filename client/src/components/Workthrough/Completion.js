import React from "react";
import { useHistory } from "react-router-dom";

export default function Completion(props) {
  let history = useHistory()

  return (
    <main className="completion">
      <h2>You're all finished!</h2>
      <p>We hope you're feeling ready for your test or quiz. If you have a little extra time, do you want to try a meditation or go through some tips and tricks?</p>
      <button onClick={() => history.push("/meditations")}>Meditations</button>
      <button onClick={() => history.push("/tips-tricks")}>Tips and Tricks</button>
      <p>Or do you want to do another work-through?</p>
      <button onClick={() => props.restartWorkthrough()}>Start New Workthrough</button>
      <p>If not, have fun and do your best!</p>
      <button onClick={() => history.push("/menu")}>Home</button>
    </main>
  )
}
