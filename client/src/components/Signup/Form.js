import React, {useState}  from 'react';
import useSignUpForm from "../../hooks/useSignUpForm";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const axios = require("axios").default;
  const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

export default function SignUpForm(props) {

  const classes = useStyles();

  const signUserUp = () => {
    const body = {
      first_name: inputs.firstName,
      last_name: inputs.lastName,
      email: inputs.email,
      password: inputs.password1,
      password_confirmation: inputs.password2
    };

    return axios({
      method: "post",
      url: "/users",
      data: body
    })
      .then(response => {
        alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
        
        console.log(response);
        props.setUser({email: response.data.email, name: response.data.name, id: response.data.id })

        props.userCreated()
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signUserUp);

  return (
    <main className="signup">
      <Grid
  container
  direction="column"
  justify="flex-end"
  alignItems="center"
>
      <h2>Signup </h2>
      <section>
        <form className={classes.root} autoComplete="off" id="create-user-form" onSubmit={handleSubmit}>
        <div>
        <TextField
          id="outlined-name"
          name="firstName"
          placeholder="Enter First Name"
          type="text"
          label="First Name"
          value={inputs.firstName || ""}
          onChange={handleInputChange}
          variant="outlined"
          required
        />
        </div>
          <div>
          <TextField
          id="outlined-name"
          name="lastName"
          placeholder="Enter Last Name"
          type="text"
          label="Last Name"
          value={inputs.lastName || ""}
          onChange={handleInputChange}
          variant="outlined"
          required
        />
          </div>
          <div>
          <TextField
          id="outlined-email"
          name="email"
          placeholder="Enter Email"
          type="email"
          label="email"
          value={inputs.email || ""}
          onChange={handleInputChange}
          variant="outlined"
          required
        />
          </div>
          <div>
          <TextField
          id="outlined-password1"
          name="password1"
          placeholder="Enter Password"
          type="password"
          label="password"
          value={inputs.password1 || ""}
          onChange={handleInputChange}
          variant="outlined"
          required
        />
          </div>
          <div>
          <TextField
          id="outlined-password2"
          name="password2"
          placeholder="Confirm Password"
          type="password"
          label="password"
          value={inputs.password2 || ""}
          onChange={handleInputChange}
          variant="outlined"
          required
        />
          </div>
          <Button type="submit" variant="contained">Sign up</Button>
        </form>
      </section>
    </Grid>
    </main>
  );
}

