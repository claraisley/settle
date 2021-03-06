import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import styled from "styled-components";
import {
  OneBackPack,
  TwoBackPack,
  ThreeBackPack,
  FourBackPack,
  FiveBackPack,
  Legend1,
  Legend2
} from "./backpacks";

const Tooltiptip = styled.span`
  font-size: 1rem;
  line-height: 150%;
  display: inline-block;
  margin: 10px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "#353c52"
  }
}));

export default function TrapItems(props) {
  const classes = useStyles();

  const rounded = Object.entries(props.trapData).map(trap => {
    return Math.round(trap[1]);
  });


  const lookup = {
    0: "Catastrophizing",
    1: "Filtering",
    2: "Fortune-telling",
    3: "Mind-reading",
    4: "Black-and-white Thinking",
    5: "Over-generalization",
    6: "Should-statements"
  };

  const definitions = {
    0: "Catastrophizing is when we assume the worst possible scenerio will happen.",
    1: "Filtering involves only paying attention to the negative aspects of a situation, and ignoring all the positive.",
    2: "Fortune-telling is a thinking error where we predict that things will turn out badly without realistically considering the evidence and odds in a situation.",
    3: "Mind-reading is a thinking error where we believe we know a person's intentions or thoughts.",
    4: "When we constantly think of things in extreme terms, such as “always” and “never” we are fall into the trap of Black-and-white thinking.",
    5: "Over-generalization occurs when we inaccurately conclude that one negative event puts us in a never-ending pattern of defeat. One failed test becomes 'I always fail tests'.",
    6: "Should-statements are a common thinking trap where we tell ourselves how we “should”, “must”, or “ought” to feel and behave. In reality they often leave us anxious and dissapointed in ourselves."
  };

  const comps = [
    OneBackPack,
    TwoBackPack,
    ThreeBackPack,
    FourBackPack,
    FiveBackPack
  ];

  const traps = rounded.map((trap, index) => {
    let Comp = comps[trap] || FiveBackPack;
    return (
      <Grid item xs={12} sm={6} key={index}>
        <Paper className={classes.paper} elevation={12}>
          <Tooltip
            TransitionComponent={Zoom}
            title={<Tooltiptip>{definitions[index]}</Tooltiptip>}
            classes={{ tooltip: classes.customWidth }}
            arrow
          >
            <h1>
              {lookup[index]}
              <sup>[?]</sup>
            </h1>
          </Tooltip>
          <Comp />
        </Paper>
      </Grid>
    );
  });

  return (
    <main>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={12}>
              <Legend1 />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={12}>
              <Legend2 />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {traps}
        </Grid>
      </div>
    </main>
  );
}
