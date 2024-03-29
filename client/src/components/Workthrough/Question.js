import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import personalizeText from "./HelperFunction";
import LinearProgress from "@material-ui/core/LinearProgress";

const StyledProgress = styled(LinearProgress)`
  height: 1rem;
  margin: 1rem;
  border-radius: 4px;
`;
const RestartButton = styled(Button)`
  margin: 2em;
`;
const CardQuestion = styled(Card)`
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
`;
const CardContentQuestion = styled(CardContent)`
  & > p {
    margin-top: 5%;
    margin-bottom: 5%;
    color: white;
    text-align: center;
  }
`;
const TypographyHeader = styled(Typography)`
  font-size: x-large;
  font-weight: 600;
`;


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),

      backgroundColor: "#353c52"
    }
  },
  responseList: {
    justifyContent: "center",
    textAlign: "center",
    margin: theme.spacing(2)
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#353c52",
    color: "white"
  }
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
        onChange={() => {
          props.onResponse(response.id);
        }}
        control={<Radio className={classes.cards} />}
        label={personalizeText(props.interests, response.text)}
      />
    );
  });

  return (
    <div className={classes.root}>
      <Paper elevation={10}>
        <CardQuestion className={classes.cards}>
          <CardContentQuestion>
            <TypographyHeader gutterBottom>
              {personalizeText(props.interests, props.question.text)}
            </TypographyHeader>
          </CardContentQuestion>
        </CardQuestion>

        <CardQuestion className={classes.cards}>
        

            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
              className={{ root: classes.radio, checked: classes.checked }}
            >
             {responseList}
            </RadioGroup>
  
        </CardQuestion>

        <StyledProgress
          variant="determinate"
          value={(props.questionsDone / props.totalQuestions) * 100}
        />

        <RestartButton
          variant="contained"
          color="primary"
          onClick={() => props.restartWorkthrough()}
        >
          Quit without saving
        </RestartButton>
      </Paper>
    </div>
  );
}
