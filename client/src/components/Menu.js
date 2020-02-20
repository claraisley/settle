import React from "react";
import MenuItem from "./MenuItem.js";

export default function Menu(props) {
  return (
    <main>
      <h2>Hi {props.user.name} </h2>
      <MenuItem />
    </main>
  );
}
