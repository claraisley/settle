import React, { useState } from "react";
import styled from "styled-components";
import Mood from "./Mood.js";
import Question from "./Question.js";
import useVisualMode from "../../hooks/useVisualMode";
import Followup from "./Followup.js";
import Completion from "./Completion.js";
import Start from "./Start.js";
import axios from "axios";

const MainQuiz = styled.main`
  padding-top: 8em;
`;


const MOOD = "MOOD";
const QUESTION = "QUESTION";
// const FOLLOWUP = "FOLLOWUP";
const COMPLETION = "COMPLETION";
const START = "START";

export default function Workthrough(props) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    questions: [],
    interests: [],
    currentQuestion: {},
    responsesChosen: [],
    currentFollowup: {},
    currentThinkingTrap: {}
  });

  const { mode, transition } = useVisualMode(START);

  const startNextQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestion: {}
    }));
    transition(QUESTION);
  };

  const unansweredQuestions = state.questions.filter(
    question => !question.answered
  );
  // sets a current questions if there's no current question and there's still unanswered questions
  if (!state.currentQuestion.id && unansweredQuestions.length) {
    const currentQuestion = unansweredQuestions.pop();
    setState(prev => ({
      ...prev,
      currentQuestion
    }));
    // transitions to mood when there's no unanswered questions left
    // this function is why the back button on mood doesn't work...to be fixed depending on how we want to allow users to go back
  } else if (!unansweredQuestions.length && mode === QUESTION) {
    transition(MOOD);
  }

  // starts the workthrough when the user selects today or tomorrow on the start page
  const startWorkthrough = numberOfQuestions => {
    Promise.all([
      axios.request({
        url: "/reflections",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        params: {
          number: numberOfQuestions,
          id: props.user.id
        },
        withCredentials: true
      }),
      axios.request({
        url: "/user_interests",

        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        params: {
          id: props.user.id
        },
        withCredentials: true
      })
    ])
      .then(function (response) {
        for (let question of response[0].data) {
          question.answered = false;
        }
        setState(prev => ({
          ...prev,
          questions: response[0].data,
          interests: response[1].data
        }));
        startNextQuestion();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // this function is triggered when a user responds to a question
  // sets the current question answered to true, saves their response in the responseChosen array in state, and pulls the followup
  const respond = responseID => {
    setOpen(true);
    const followup = state.currentQuestion.responses.find(
      response => response.id === responseID
    ).follow_ups;

    const thinkingTrap = state.currentQuestion.responses.find(
      response => response.id === responseID
    ).thinking_trap;
    setState(prev => ({
      ...prev,
      questions: [
        ...state.questions.filter(({ id }) => id !== state.currentQuestion.id),
        { ...state.currentQuestion, answered: true }
      ],
      responsesChosen: [...prev.responsesChosen, responseID],
      currentFollowup: followup,
      currentThinkingTrap: thinkingTrap
    }));
  };

  // triggered when a user responds to the mood question and sends completed reflection data to database
  const respondMood = moodValue => {
    const reflection_responses = state.responsesChosen.map(response => {
      return { response_id: response };
    });
    const postData = {
      user_id: props.user.id,
      moods: [{ value: moodValue }],
      reflection_responses: reflection_responses
    };
    axios
      .request({
        url: "/reflections",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true
        },
        data: postData,
        withCredentials: true
      })
      .then(function (response) {
        transition(COMPLETION);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // progress is based on number of questions answered so doesn't go down if the user presses the back button
  const currentProgress = state.questions.filter(question => {
    return question.answered === false;
  }).length;

  // function to start a new workthrough by clearing start and transitioning to start
  const restartWorkthrough = () => {
    setState(prev => ({
      ...prev,
      questions: [],
      interests: [],
      currentQuestion: {},
      responsesChosen: [],
      currentFollowup: {},
      currentThinkingTrap: {}
    }));
    transition(START);
  };

  return (
    <MainQuiz className="workthrough">
      <section>
        {mode === START && <Start startWorkthrough={startWorkthrough} />}
        {mode === MOOD &&
          <Mood
            onResponse={respondMood}
            restartWorkthrough={restartWorkthrough}
            questionsDone={state.questions.length - currentProgress}
            totalQuestions={state.questions.length}
          />}
        {mode === QUESTION && (
          <Question
            question={state.currentQuestion}
            responses={state.currentQuestion.responses}
            onResponse={respond}
            interests={state.interests}
            restartWorkthrough={restartWorkthrough}
            startNextQuestion={startNextQuestion}
            questionsDone={state.questions.length - currentProgress}
            totalQuestions={state.questions.length}
          />
        )}
        <Followup
          open={open}
          handleClose={() => setOpen(prev => !prev)}
          followup={state.currentFollowup}
          thinkingTrap={state.currentThinkingTrap}
          interests={state.interests}
          nextQuestion={() => {
            setOpen(prev => {
              startNextQuestion();
              return !prev;
            });
          }}
        />
        {mode === COMPLETION && (
          <Completion restartWorkthrough={restartWorkthrough} />
        )}
      </section>
    </MainQuiz>
  );
}
