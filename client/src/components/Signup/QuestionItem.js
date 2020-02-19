import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function QuestionItem(props) {
  const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
    interestValue: ""
  });

  const handleChangeA = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleChangeB = name => event => {
    setState({ ...state, [name]: event.target.checked, checkedA: false });
  };

  const handleInterestChange = name => event => {
    setState({...state, [name]: event.target.value})
  };

  return (
    <main>
      <h2>{props.question}</h2>
      <form autoComplete="off">
       
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
            value={state.interestValue}
            onChange={handleInterestChange("interestValue")}
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
        
      </form>
    </main>
  );
}
