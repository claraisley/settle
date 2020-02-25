import React from "react";
import styled from "styled-components";
import { Backpack } from "react-kawaii";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const BackPackItem = styled(Backpack)`
  padding: 1em;
`;

const StyledTitle = styled.h3`

color: #ffd882;

`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export function OneBackPack() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2}>
          <BackPackItem size={120} mood="excited" color="#ffd882"/>
        </Grid>
      </Grid>
    </div>
  );
}

export function TwoBackPack() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2}>
          <BackPackItem size={120} mood="happy" color="#ffd882"/>
        </Grid>
        <Grid item xs={3} sm={2}>
          <BackPackItem size={120} mood="happy" color="#ffd882"/>
        </Grid>
      </Grid>
    </div>
  );
}

export function ThreeBackPack() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2}>
          <BackPackItem size={120} mood="sad" color="#ffd882" />
        </Grid>
        <Grid item xs={3} sm={2}>
          <BackPackItem size={120} mood="sad" color="#ffd882" />
        </Grid>
        <Grid item xs={3} sm={2}>
          <BackPackItem size={120} mood="sad" color="#ffd882" />
        </Grid>
      </Grid>
    </div>
  );
}

export function FourBackPack() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="sad" color="#ffd882" />
      </Grid>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="sad"  color="#ffd882"/>
      </Grid>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="sad" color="#ffd882" />
      </Grid>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="sad" color="#ffd882" />
      </Grid>
    </Grid>
  </div>
  );
}

export function FiveBackPack() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="ko" color="#ffd882" />
      </Grid>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="ko" color="#ffd882" />
      </Grid>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="ko" color="#ffd882" />
      </Grid>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="ko" color="#ffd882"/>
      </Grid>
      <Grid item xs={4} sm={2}>
        <BackPackItem size={120} mood="ko" color="#ffd882" />
      </Grid>
    </Grid>
  </div>
  );
}

export function Legend1() {
  return (
    
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
    <BackPackItem size={60} mood="excited" color="#ffd882"/>
      </Grid>
      <Grid item xs={12} sm={6}>
      <StyledTitle>= Less likely to fall into this Thinking Trap</StyledTitle>
      </Grid>
      </Grid>
  );
}

export function Legend2() {
  return (
    
       
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
      <Grid container spacing={3}>
     <Grid item xs={2} sm={2}>
     <BackPackItem size={60} mood="ko" color="#ffd882"/>
      </Grid>
      <Grid item xs={2} sm={2}>
      <BackPackItem size={60} mood="ko" color="#ffd882"/>
      </Grid>
      <Grid item xs={2} sm={2}>
      <BackPackItem size={60} mood="ko" color="#ffd882"/>
      </Grid>
      <Grid item xs={2} sm={2}>
      <BackPackItem size={60} mood="ko" color="#ffd882"/>
      </Grid>
      <Grid item xs={2} sm={2}>
      <BackPackItem size={60} mood="ko" color="#ffd882"/>
      </Grid>
      </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>

      <StyledTitle>= Very likely to fall into this Thinking Trap</StyledTitle>
      </Grid>

      
      </Grid>
   
  );
}

