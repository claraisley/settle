import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
// import deepOrange from "@material-ui/core/colors/deepOrange";
import axios from "axios";

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#deb559",
      secondary: "#ffffff"
      //#d6a026 - yellow
      //#d67557 -orange one
    },
    text: {
      primary: "#ffffff",
      secondary: "#353c52",
      fontSize: "1rem"
    },
    background: {
      default: "#353c52"
    }
  },
  typography: {
    fontFamily: "Poppins",

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
      <App />
    </Container>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
