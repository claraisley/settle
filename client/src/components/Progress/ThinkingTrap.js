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
const Title = styled.h1`
text-align: center;
margin-bottom: 5%;
`;
const StyledDiv = styled.div`
display: flex;
margin-top: 3%;
`
const StyledTitle = styled.h1`
  color: #ffd882;
`;

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
    
  const checkEmpty = Object.entries(trapData).length
  return (
    <main>
      <StyledDiv>
      
      <BackButton onClick={()=>{props.goToProgressPage("HOME")}}>
      <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg"/>
      </BackButton> 
      
      </StyledDiv>
      <Title>Thinking Traps Progress</Title>
      <article> 
        {checkEmpty ? <TrapItems trapData={trapData}/> : <StyledTitle>{emptyMessage}</StyledTitle> }
      </article>
    </main>
  );
}
