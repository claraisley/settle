import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import CardHeader from "@material-ui/core/CardHeader";
import { useHistory } from "react-router-dom";

const StyledCard = styled(Card)`
  background-color: #353c52;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  height: 36vh;
`;
const StyledCardHeader = styled(CardHeader)`
  color: #ffd882;
`;
const StyledImg = styled.img`
  width: 22vh;
`;
const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledMain = styled.main`
  margin-top: 2rem;
`;

export default function Menu() {
  const history = useHistory();
  const redirect = path => {
    history.push(path);
  };

  return (
    <StyledMain>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <StyledCard >
            <StyledCardActionArea onClick={() => redirect("/progress")}>
              <StyledCardHeader title="My Progress" />
              <CardContent>
                <StyledImg
                  src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582598169/graphic_1_v82tbt.svg"
                />
              </CardContent>
            </StyledCardActionArea>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard >
            <StyledCardActionArea onClick={() => redirect("/meditations")}>
              <StyledCardHeader title="Meditations" />
              <CardContent>
                <StyledImg
                  src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582598360/yoga_frq3hc.svg"
                />
              </CardContent>
            </StyledCardActionArea>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard >
            <StyledCardActionArea onClick={() => redirect("/workthrough")}>
              <StyledCardHeader title="Work-Throughs" />
              <CardContent>
                <StyledImg
                  src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582598514/question_wk8bwh.svg   "
                />
              </CardContent>
            </StyledCardActionArea>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard >
            <StyledCardActionArea onClick={() => redirect("/test-anxiety")}>
              <StyledCardHeader title="What is Test Anxiety?" />
              <CardContent>
                <StyledImg
                  src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582599106/exam_hdwxnf.svg"
                />
              </CardContent>
            </StyledCardActionArea>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard >
            <StyledCardActionArea onClick={() => redirect("/thinking-traps")}>
              <StyledCardHeader title="Thinking Traps" />
              <CardContent>
                <StyledImg
                  src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582599362/fishing-net_ld2ofp.svg"
                />
              </CardContent>
            </StyledCardActionArea>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <StyledCard >
            <StyledCardActionArea onClick={() => redirect("/tips-tricks")}>
              <StyledCardHeader title="Dos and Don'ts" />
              <CardContent>
                <StyledImg
                  src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582599443/right_mhzxwa.svg"
                />
              </CardContent>
            </StyledCardActionArea>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledMain>
  );
}
