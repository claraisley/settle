import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { useHistory } from "react-router-dom";

const StyledCard = styled(Card)`
  background-color: #353c52;
  margin-top: 5%;
`;

const StyledPaper = styled(Paper)`
  background-color: #353c52;
 
  margin: 5%;
  margin-top: 5%;
  padding: 5%;
`;
const StyledCardHeader = styled(CardHeader)`
  color: #ffd882;
`;

export default function Menu() {
  const history = useHistory();
  const redirect = path => {
    history.push(path);
  };
  return (
    <main>
      <StyledPaper elevation={12}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} sm={4}>
            <StyledCard >
              <CardActionArea onClick={() => redirect("/progress")}>
                <StyledCardHeader title="My Progress" />
                <CardContent>
                  <CardMedia
                    component="img"
                    image="https://res.cloudinary.com/dpfixnpii/image/upload/v1582598169/graphic_1_v82tbt.svg"
                  />
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" onClick={() => redirect("/progress")}>
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard >
              <CardActionArea onClick={() => redirect("/meditations")}>
                <StyledCardHeader title="Meditations" />
                <CardContent>
                  <CardMedia
                    component="img"
                    image="https://res.cloudinary.com/dpfixnpii/image/upload/v1582598360/yoga_frq3hc.svg"
                  />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" onClick={() => redirect("/meditations")}>
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard >
              <CardActionArea onClick={() => redirect("/workthrough")}>
                <StyledCardHeader title="Work-Throughs" />
                <CardContent>
                  <CardMedia
                    component="img"
                    image="https://res.cloudinary.com/dpfixnpii/image/upload/v1582598514/question_wk8bwh.svg   "
                  />
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" onClick={() => redirect("/workthrough")}>
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard >
              <CardActionArea onClick={() => redirect("/test-anxiety")}>
                <StyledCardHeader title="What is Test Anxiety?" />
                <CardContent>
                  <CardMedia
                    component="img"
                    image="https://res.cloudinary.com/dpfixnpii/image/upload/v1582599106/exam_hdwxnf.svg"
                  />
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" onClick={() => redirect("/test-anxiety")}>
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard >
              <CardActionArea onClick={() => redirect("/thinking-traps")}>
                <StyledCardHeader title="Thinking Traps" />
                <CardContent>
                  <CardMedia
                    component="img"
                    image="https://res.cloudinary.com/dpfixnpii/image/upload/v1582599362/fishing-net_ld2ofp.svg"
                  />
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  size="small"
                  onClick={() => redirect("/thinking-traps")}
                >
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard >
              <CardActionArea onClick={() => redirect("/tips-tricks")}>
                <StyledCardHeader title="Dos and Don'ts" />
                <CardContent>
                  <CardMedia
                    component="img"
                    image="https://res.cloudinary.com/dpfixnpii/image/upload/v1582599443/right_mhzxwa.svg"
                  />
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" onClick={() => redirect("/tips-tricks")}>
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledPaper>
    </main>
  );
}
