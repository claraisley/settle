import { useState } from "react";

const useSignUpQuiz = callback => {
  const [questionState, setQuestionState] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const changeQuestion = (id, newValue) => {
    setQuestionState({ ...questionState, [id]: newValue });
   };
 

  return {
    handleSubmit,
    changeQuestion,
    questionState
  };
};
export default useSignUpQuiz;