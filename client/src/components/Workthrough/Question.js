import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(64),
      backgroundColor: "#353c52",
      backgroundImage: `url(http://www.transparenttextures.com/patterns/cubes.png)`
    },
    Button: {
      justifyContent: "center"
    }
  }
}));

export default function Question(props) {
  const classes = useStyles();

  const responseList = props.responses.map(response => {
    return (
      <Button
        column
        variant="contained"
        color="default"
        onClick={props.onResponse}
        key={response.id}
      >
        {response.text}
      </Button>
    );
  });

  return (
    <div className={classes.root}>
      <Paper elevation={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Question
            </Typography>
            <Typography color="textSecondary">{props.question.text}</Typography>
            {responseList}
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}
