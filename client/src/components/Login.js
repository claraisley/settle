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
const ContainerLogin = styled(Container)`
  padding: 3%;
`;

const PaperLogin = styled(Paper)`
  margin-top: 3em;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 5%;
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
  display: flex;
  justify-content: center;
`;

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
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  if (localStorage.getItem("currentUser")) {
    history.push("/menu");
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        handleClickOpen();
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useLoginForm(login);

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
          {"Login component"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            There was a problem signing you in. Double check your email and
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
