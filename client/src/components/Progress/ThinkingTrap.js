import React, { useState, useEffect } from "react";
import TrapItems from "./ThinkTrapItems";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
const axios = require("axios").default;

const CenterDiv = styled.div`
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackButton = styled(Button)`
  height: 50px;
  width: 50px;
`;
const BackImg = styled.img`
  height: 50px;
  width: 50px;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 5%;
  margin-left: 30%;
`;
const StyledDiv = styled.div`
  display: flex;
  margin-top: 3%;
`;
const StyledTitle = styled.h1`
  color: #ffd882;
`;

export default function ThinkingTrap(props) {
  const [trapData, setTrapData] = useState({});
  const [loading, setLoading] = useState(true);

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
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.user.id]);

  const emptyMessage =
    "Go through some Work-Throughs to see which thinking traps you are falling into!";

  const checkEmpty = Object.entries(trapData).length;
  return (
    <main>
      <StyledDiv>
        <BackButton onClick={() => { props.goToProgressPage("HOME") }}>
          <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg" />
        </BackButton>
        <Title>Thinking Traps Progress</Title>
      </StyledDiv>
      {loading ? <CenterDiv><CircularProgress /></CenterDiv> :
        <article>
          {checkEmpty ? (<TrapItems trapData={trapData} />) : (<StyledTitle>{emptyMessage}</StyledTitle>)}
        </article>}
    </main>
  );
}
