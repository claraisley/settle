import React, { useState } from "react";
// import FormGroup from "@material-ui/core/FormGroup";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function QuestionItem(props) {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChangeA = name => event => {
    setState({ ...state, [name]: event.target.checked, checkedB: false });
  };

  const handleChangeB = name => event => {
    setState({ ...state, [name]: event.target.checked, checkedA: false });
  };

  const handleInterestChange = event => {
    props.changeQuestion(props.id, event.target.value)
  };

  return (
    <main>
      <h2>{props.question}</h2>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChangeA("checkedA")}
                value="checkedA"
                color="primary"
              />
            }
            label="Yes"
          />
          
          {state.checkedA && <TextField
            fullWidth
            variant="outlined"
            id={props.id}
            type="text"
            label={props.field}
            name="interestValue"
            value={props.value === undefined ? "" : props.value }
            onChange={handleInterestChange}
          />}
          
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChangeB("checkedB")}
                value="checkedB"
                color="primary"
              />
            }
            label="No"
          />
    </main>
  );
}
