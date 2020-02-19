import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./question.css";

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
    }
  },
  responseList: {
    justifyContent: "center",
    textAlign: "center",
    margin: theme.spacing(2)
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#353c52",
    color: "white"
  }
}));

export default function Question(props) {
  const classes = useStyles();

  const responseList = props.responses.map(response => {
    return (
      <Button
        className={classes.responseList}
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
      <Paper elevation={10}>
        <Card className={classes.cards}>
          <CardContent>
            <Typography class="header" gutterBottom>
              Question
            </Typography>
            <Typography>{props.question.text}</Typography>
          </CardContent>
        </Card>
        <div className="responseList">{responseList}</div>
      </Paper>
    </div>
  );
}
