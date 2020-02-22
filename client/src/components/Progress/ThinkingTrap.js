import React, { useState, useEffect} from "react";
import TrapItems from "./ThinkTrapItems"
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const axios = require("axios").default;


const BackButton = styled(Button)`
height: 100px;
width: 100px;
`;
const BackImg = styled.img`
height: 100px;
width: 100px;
`;



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
      <BackButton onClick={()=>{props.goToProgressPage("HOME")}}>
      <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg"/>
      </BackButton> 
      <article> 
        {!(Object.entries(trapData).length) ? <p>{emptyMessage}</p> : <TrapItems trapData={trapData}/>}
      </article>
    </main>
  )
}
