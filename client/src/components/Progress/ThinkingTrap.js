import React, { useState, useEffect } from "react";
import TrapItems from "./ThinkTrapItems";
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
<<<<<<< HEAD
const Title = styled.h1`
  text-align: center;
  margin-left: 30%;
`;
const StyledDiv = styled.div`
display: flex;
margin-bottom: 3%;
margin-top: 3%;
`

=======
>>>>>>> master

export default function ThinkingTrap(props) {
  const [trapData, setTrapData] = useState({});

  useEffect(() => {
    axios
      .request({
        url: "/trap_data",
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
        setTrapData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props.user.id]);

  const emptyMessage =
    "Go through some Work-Throughs to see which thinking traps you are falling into!";

  return (
<<<<<<< HEAD
    <main>
      <StyledDiv>
      
      <BackButton onClick={()=>{props.goToProgressPage("HOME")}}>
      <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg"/>
      </BackButton> 
      <Title>Thinking Traps Progress</Title>
      </StyledDiv>
      
      <article> 
        {!(Object.entries(trapData).length) ? <p>{emptyMessage}</p> : <TrapItems trapData={trapData}/>}
=======
    <main className="ThinkingTrap">
      <h2>Thinking Traps</h2>
      <BackButton
        onClick={() => {
          props.goToProgressPage("HOME");
        }}
      >
        <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg" />
      </BackButton>
      <article>
        {!Object.entries(trapData).length ? (
          <p>{emptyMessage}</p>
        ) : (
          <TrapItems trapData={trapData} />
        )}
>>>>>>> master
      </article>
    </main>
  );
}
