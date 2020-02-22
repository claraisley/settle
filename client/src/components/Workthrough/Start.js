import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
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
  button: {
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

export default function Start(props) {
  const classes = useStyles();

  return (
    <main className="start">
      <div className={classes.root}>
        <Paper elevation={10}>
          <Card className={classes.cards}>
            <CardContent>
              <Typography gutterBottom>
                When is the test that you're preparing for?
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.cards}>
            <FormLabel component="legend"></FormLabel>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => props.startWorkthrough(3)}
            >
              Today
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => props.startWorkthrough(5)}
            >
              Tomorrow
            </Button>
          </Card>
        </Paper>
      </div>
    </main>
  );
}
