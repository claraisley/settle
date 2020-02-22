import React, { useState, useEffect} from "react";
import TrapItems from "./ThinkTrapItems"

import { OneBackPack, TwoBackPack, ThreeBackPack } from './backpacks'

const axios = require("axios").default;

export default function ThinkingTrap(props) {

  const [trapData, setTrapData] = useState({});

  useEffect(() => {
    axios.request({
      url: "http://localhost:3001/trap_data",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true
      },
      params: {
        id: props.user.id
      },
      withCredentials: true
    })
      .then(response => {
        let results = response.data
        setTrapData(results) // if no relfections done, then trapData is empty object
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.user.id])
  


const emptyMessage = "Go through some Work-Throughs to see which thinking traps you are falling into!"


  return (
    <main className="ThinkingTrap">
      <h2>Thinking Traps</h2>
      <article> 
        {!(Object.entries(trapData).length) ? <p>{emptyMessage}</p> : <TrapItems trapData={trapData}/>}
      </article>
      
    </main>
  )
}
