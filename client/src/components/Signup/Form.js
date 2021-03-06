import React from "react";
import styled from "styled-components";
import useSignUpForm from "../../hooks/useSignUpForm";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import KawaiiAnimation from "../backpackAnimation";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const axios = require("axios").default;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// CSS STYLED COMPONENTS
const ContainerSignup = styled(Container)`
  padding: 3%;
`;
const PaperSignup = styled(Paper)`
  margin-top: 3em;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 5%;
  background-color: #353c52;
`;
const TextFieldSignup = styled(TextField)`
  & > * {
    color: white;
    & > fieldset {
      border-color: white;
    }
  }
`;
const TypographySignup = styled(Typography)`
  font-size: x-large;
  font-weight: 600;
`;
const BackpackBox = styled.div`
  display: flex;
  justify-content: center;
`;

// MATERIAL UI COMPONENT STYLING THEME
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

// SIGNUP FUNCTION

export default function SignUp(props) {
  const [open, setOpen] = React.useState(false);
  let history = useHistory();
  const classes = useStyles();

  if (localStorage.getItem("currentUser")) {
    history.push("/menu");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        props.setUser({
          email: response.data.email,
          name: response.data.name,
          id: response.data.id
        });
        localStorage.setItem("currentUser", JSON.stringify(response));
        props.userCreated();
      })
      .catch(err => {
        console.log(err);
        handleClickOpen();
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signUserUp);

  return (
    <main>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Signup form component"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            There was a problem creating your account. Double check your email and
            password, then try again!
      </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
      </Button>
        </DialogActions>
      </Dialog>
      <BackpackBox>
        <KawaiiAnimation />
      </BackpackBox>
      <PaperSignup elevation={10}>
        <ContainerSignup component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <TypographySignup component="h1" variant="h5">
              Sign Up
            </TypographySignup>
            <form
              className={classes.form}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextFieldSignup
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    type="text"
                    id="firstName"
                    label="First Name"
                    value={inputs.firstName || ""}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldSignup
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={inputs.lastName || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldSignup
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldSignup
                    variant="outlined"
                    required
                    fullWidth
                    name="password1"
                    label="Password"
                    type="password"
                    id="password1"
                    value={inputs.password1 || ""}
                    onChange={handleInputChange}
                    helperText="Password must be 6 characters or more"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldSignup
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Password Confirmation"
                    type="password"
                    id="password2"
                    value={inputs.password2 || ""}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    href=""
                    onClick={() => history.push("/login")}
                    variant="body2"
                  >
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </ContainerSignup>
      </PaperSignup>
    </main>
  );
}
