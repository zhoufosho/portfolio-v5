import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Theme
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

// Fonts
import "./fonts/Karla-Italic.ttf";
import "./fonts/Karla-Bold.ttf";
import "./fonts/Karla-Regular.ttf";
import "./fonts/PTMono-Regular.ttf";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
