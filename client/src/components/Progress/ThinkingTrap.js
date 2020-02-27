import React, { useState, useEffect } from "react";
import TrapItems from "./ThinkTrapItems";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
const axios = require("axios").default;

const CenterDiv = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
`;
const BackButton = styled(Button)`
  height: 40px;
  width: 40px;
`;
const BackImg = styled.img`
  height: 40px;
  width: 40px;
`;
const Title = styled.h1`
  margin-bottom: 5%;
`;
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
        setLoading(false);
        console.log(response.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props.user.id]);

  const emptyMessage =
    "Go through some Work-Throughs to see which thinking traps you are falling into!";

  const checkEmpty = Object.entries(trapData).length;
  return (
    <main>
      <StyledDiv>
        <BackButton
          onClick={() => {
            props.goToProgressPage("HOME");
          }}
        >
          <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582400198/arrow_xph8bj.svg" />
        </BackButton>
        <Title>Thinking Traps</Title>
        <div></div>
      </StyledDiv>
      {loading ? (
        <CenterDiv>
          <CircularProgress />
        </CenterDiv>
      ) : (
        <article>
          {checkEmpty ? (
            <TrapItems trapData={trapData} />
          ) : (
            <CenterDiv>
              <StyledTitle>{emptyMessage}</StyledTitle>
            </CenterDiv>
          )}
        </article>
      )}
    </main>
  );
}
