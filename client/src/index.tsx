import React from "react";
import "./css/normalize.css";
import { BrowserRouter as Router } from "react-router-dom";
import * as dotenv from "dotenv";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import GlobalStyle from "./global-styles";
import LogRocket from "logrocket";
import ReactDOM from "react-dom";
import ReactGa from "react-ga";

dotenv.config({ path: __dirname + "./.env" });
ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);
LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET_ID}/react-drum-maschine`);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
