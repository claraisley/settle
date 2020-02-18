import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button, Box, Container, CssBaseline } from '@material-ui/core';

import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[300],
    },
    text: {
      primary: "#ffffff",
      secondary: "#353c52"
    },
      background: {
        // default: "#3d496e"
      default: '#353c52',
    }
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
        <App />
    </Container>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();