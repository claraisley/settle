import React from "react";
import MenuItem from "./MenuItem.js";
import "./menu.css";

export default function Menu(props) {
  return (
    <main>
      <div id="triangle-topleft"></div>
      <div id="triangle-bottomright"></div>
      <h2>Hi {props.user.name} </h2>
      <MenuItem />
    </main>
  );
}
