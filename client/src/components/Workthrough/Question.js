import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
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
  responseList: {
    justifyContent: "center",
    textAlign: "center",
    margin: theme.spacing(3)
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#353c52",
    color: "white"
  }
  // formControl: {
  //   margin: theme.spacing(3)
  // }
}));

export default function Question(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const responseList = props.responses.map(response => {
    return (
      <FormControlLabel
        key={response.id}
        className={classes.responseList}
        value={response.text}
        onClick={() => props.onResponse(response.id)}
        control={<Radio className={classes.cards} />}
        label={response.text}
      />
    );
  });

  return (
    <div className={classes.root}>
      <Paper elevation={10}>
        <Card className={classes.cards}>
          <CardContent>
            <Typography gutterBottom>Question</Typography>
            <Typography>{props.question.text}</Typography>
          </CardContent>
        </Card>
        <Card className={classes.cards}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend"></FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <div>{responseList}</div>
            </RadioGroup>
          </FormControl>
        </Card>
      </Paper>
    </div>
  );
}
