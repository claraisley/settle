import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  OneBackPack,
  TwoBackPack,
  ThreeBackPack,
  FourBackPack,
  FiveBackPack,
  Legend1,
  Legend2
} from "./backpacks";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: 'white',
    backgroundColor: '#353c52'
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
          <h1>{lookup[index]}</h1>
          <Comp />
        </Paper>
      </Grid>
    );
  });

 

  return (
    <main>
      <div className={classes.root}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} >
        
        <Paper className={classes.paper} elevation={12}>
          <Legend1/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} >
        
        <Paper className={classes.paper} elevation={12}>
          <Legend2/>
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
