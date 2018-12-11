import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();