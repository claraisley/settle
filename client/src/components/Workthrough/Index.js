import React, { useState } from "react";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode"
import Followup from "./Followup.js";
import Completion from "./Completion.js";
import Start from "./Start.js";
import sampleData from "./sampleData.js"
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '25%',
  },
}));


const MOOD = "MOOD";
const QUESTION = "QUESTION";
const FOLLOWUP = "FOLLOWUP";
const COMPLETION = "COMPLETION";
const START = "START"


export default function Workthrough() {

  const classes = useStyles();

  const [state, setState] = useState({
    questions: [],
    responses: [],
    currentQuestion: {},
    // completed: 0
  })

  // React.useEffect(() => {
  //   function progress() {
  //     setState(prev => {
  //       ...prev,
  //       completed
      
  //       if (oldCompleted === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldCompleted + diff, 100);
  //     });
  //   }

  //   const timer = setInterval(progress, 500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const { mode, transition, back } = useVisualMode(START);

  const startNextQuestion = () => {
    transition(QUESTION)
  }

  const unansweredQuestions = state.questions.filter(question => !question.answered)
  // sets a current questions if there's no current question and there's still unanswered questions
  if (!state.currentQuestion.id && unansweredQuestions.length) {
    const currentQuestion = unansweredQuestions.pop()
    setState(prev => ({
      ...prev,
      currentQuestion
    }))
    // transitions to mood when there's no unanswered questions left (and it's not start or completion)
    // this function is why the back button on mood doesn't work...to be fixed depending on how we want to allow users to go back
  } else if (!unansweredQuestions.length && mode !== START && mode !== MOOD && mode !== COMPLETION) {
    transition(MOOD)
  }

  // sets current responses on the fly instead of keeping them in state
  const responses = state.responses.filter(response => {
    return response.thought === state.currentQuestion.id;
  })

  // starts the workthrough when the user selects 4 or 6 questions. needs to be updated to pull real data
  const startWorkthrough = (numberOfQuestions) => {
    const shuffled = sampleData.sampleThoughtData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, numberOfQuestions)
    for (let question of selected) {
      question.answered = false;
    }
    setState(prev => ({ ...prev, questions: selected, responses: sampleData.sampleResponseData }));
    startNextQuestion();
  }

  // this function is triggered when a user responds to a question. currently doesn't save their response anywhere
  const respond = () => {
    setState(prev => ({
      ...prev,
      questions: [
        ...state.questions.filter(({ id }) => id !== state.currentQuestion.id),
        { ...state.currentQuestion, answered: true }
      ],
      currentQuestion: {}
    }))
    transition(FOLLOWUP)
  }

  // triggered when a user responds to the mood question. currently doesn't save their response anywhere
  const respondMood = () => {
    transition(COMPLETION)
  }

  // progress is based on number of questions answered so doesn't go down if the user presses the back button
  const currentProgress = state.questions.filter(question => {
    return question.answered === false
  }).length

  return (
    <main className="workthrough">
      <h2>Workthrough</h2>
      <section>
        {mode === START && <Start startWorkthrough={startWorkthrough} />}
        {mode === MOOD && <Mood onResponse={respondMood} />}
        {mode === QUESTION && <Question question={state.currentQuestion} responses={responses} onResponse={respond} />}
        {mode === FOLLOWUP && <Followup />}
        {mode === COMPLETION && <Completion />}
      </section>
      <section>
        <label htmlFor="workthrough-progress">Progress {state.questions.length - currentProgress}/{state.questions.length}</label>
        <div className={classes.root}>
      <LinearProgress variant="determinate" color="secondary" />
    </div>
        <IconButton onClick={() => back()}>
          <ExpandLessIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => startNextQuestion()}>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </section>
    </main>
  )
}
