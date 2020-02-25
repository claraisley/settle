import React, { useState } from "react";

import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const QuestionCheckbox = styled(Checkbox)`
  color: #d67557;
  & > span:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const QuestionTextField = styled(TextField)`
  & > * {
    color: white;
    & > fieldset {
      border-color: white;
    }
  }
`;
export default function QuestionItem(props) {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false
  });

  const handleChangeA = name => event => {
    setState({ ...state, [name]: event.target.checked, checkedB: false });
  };

  const handleChangeB = name => event => {
    setState({ ...state, [name]: event.target.checked, checkedA: false });
  };

  const handleInterestChange = event => {
    props.changeQuestion(props.id, event.target.value);
  };

  return (
    <main>
      <h2>{props.question}</h2>
      <FormControlLabel
        control={
          <QuestionCheckbox
            checked={state.checkedA}
            onChange={handleChangeA("checkedA")}
            value="checkedA"
            color="primary"
          />
        }
        label="Yes"
      />
      <FormControlLabel
        control={
          <QuestionCheckbox
            checked={state.checkedB}
            onChange={handleChangeB("checkedB")}
            value="checkedB"
            color="primary"
          />
        }
        label="No"
      />
      {state.checkedA && (
        <QuestionTextField
          fullWidth
          variant="outlined"
          id={props.id}
          type="text"
          label={props.field}
          name="interestValue"
          value={props.value === undefined ? "" : props.value}
          onChange={handleInterestChange}
        />
      )}
    </main>
  );
}
