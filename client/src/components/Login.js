import React from "react";
import styled from "styled-components";
import useLoginForm from "../hooks/useLoginForm";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import KawaiiAnimation from "./backpackAnimation";

const axios = require("axios").default;

// CSS STYLED COMPONENTS

const ContainerLogin = styled(Container)`
  padding: 3%;
`;

const PaperLogin = styled(Paper)`
  margin-top: 8%;
  margin-left: 20%;
  margin-right: 20%;
  background-color: #353c52;
`;

const LoginTextField = styled(TextField)`
  & > * {
    color: white;
    & > fieldset {
      border-color: white;
    }
  }
`;

const TypographyLogin = styled(Typography)`
  font-size: x-large;
  font-weight: 600;
`;


const BackpackBox = styled.div`
margin-top: 2%;
margin-bottom: 2%;
margin-left: 45%
`


// MATERIAL UI STYLING CSS

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// LOGIN FUNCTION

export default function Login(props) {
  const classes = useStyles();

  const history = useHistory();

  if (localStorage.getItem("currentUser")) {
    history.push("/menu");
  }
  const login = () => {
    const body = {
      email: inputs.email,
      password: inputs.password
    };

    return axios({
      method: "post",
      url: "/auth/login",
      data: body,
      withCredentials: true
    })
      .then(response => {
        props.setUser({
          email: response.data.email,
          name: response.data.name,
          id: response.data.id
        });
        localStorage.setItem("currentUser", JSON.stringify(response));
        history.push("/menu");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useLoginForm(login);

  return (
    <main>
      <BackpackBox>
      <KawaiiAnimation/>
      </BackpackBox>
      <PaperLogin elevation={10}>
        <ContainerLogin component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <TypographyLogin component="h1" variant="h5">
              Login
            </TypographyLogin>
            <form className={classes.form} onSubmit={handleSubmit}>
              <LoginTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={inputs.email || ""}
                onChange={handleInputChange}
                autoFocus
                style={{ color: "white" }}
              />
              <LoginTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={inputs.password || ""}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    href=""
                    onClick={() => history.push("/signup")}
                    variant="body2"
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}></Box>
        </ContainerLogin>
      </PaperLogin>
    </main>
  );
}
