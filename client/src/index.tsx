import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as dotenv from 'dotenv';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import ReactDOM from 'react-dom';
import ReactGa from 'react-ga';

import App from './components/app/App';
import { AuthProvider } from './context/AuthContext';
import isProduction from './utils/isProduction';
import GlobalStyle from './global-styles';
import './css/normalize.css';

dotenv.config({ path: __dirname + './.env' });

if (isProduction()) {
  ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
  ReactGa.pageview(window.location.pathname + window.location.search);
  LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET_ID}/react-drum-maschine`);
}

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
