import React from "react";
import QuestionList from "./QuestionList";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useSignUpQuiz from "../../hooks/useSignUpQuiz";
const axios = require("axios").default;

export default function SignUpQuiz(props) {
  const history = useHistory();

  const assignUserInterest = () => {
    const userId = props.user.id;
    const interests = Object.entries(questionState);

    let axiosArr = [];
    for (let interest of interests) {
      const postData = {
        interest_id: interest[0],
        value: interest[1],
        user_id: userId
      };
      const newPromise = axios({
        method: "post",
        url: "/user_interests",
        data: postData
      });
      axiosArr.push(newPromise);
    }
    
    console.log(axiosArr)

    return axios
      .all(axiosArr)
      .then(
        axios.spread((...responses) => {
          responses.forEach(res => console.log("Success"));
          console.log("submitted all axios calls");
          localStorage.removeItem("mode");
          history.push("/explore");
        })
      )

      .catch(error => {
        console.log(error)
      });
  };

  const { handleSubmit, changeQuestion, questionState } = useSignUpQuiz(assignUserInterest);


  return (
    <main>
      <p>
        Thanks for signing up {props.user.name}, we'd like to
        ask you a few questions to get to know you better. It'll help us loads!
      </p>
      <form onSubmit={handleSubmit}>
        <QuestionList
          signupQuestions={props.signupQuestions}
          questionState={questionState}
          changeQuestion={changeQuestion}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </main>
  );
}
