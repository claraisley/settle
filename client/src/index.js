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
      main: deepOrange[400],
    },
      background: {
      // light: will be calculated from palette.primary.main,
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