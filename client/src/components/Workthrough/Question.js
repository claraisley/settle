import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '& > *': {
      margin: theme.spacing(1),
      // width: theme.spacing(16),
      height: theme.spacing(64),
      backgroundColor: '#353c52',
    backgroundImage: `url(http://www.transparenttextures.com/patterns/cubes.png)`,
    },
  },
}));


export default function Question(props) {

  const classes = useStyles();

  const responseList = props.responses.map(response => {
    return <button onClick={props.onResponse} key={response.id} >{response.text}</button> })

  return (
    <div className={classes.root}>
      <Paper elevation={6}>
   <main className="question">
      <h2>Question</h2>
      <h4>{props.question.text}</h4>
      {responseList}
    </main>
      </Paper>
    </div>
  )
}
