import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as dotenv from 'dotenv';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import ReactDOM from 'react-dom';
import ReactGa from 'react-ga';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_URL, AUTH_JWT } from './constants';
import App from './components/app/App';
import isProduction from './utils/isProduction';

dotenv.config({ path: __dirname + './.env' });

if (isProduction()) {
  ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
  ReactGa.pageview(window.location.pathname + window.location.search);
  LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET_ID}/react-drum-maschine`);
}

const httpLink = createHttpLink({
  uri: API_URL,
});

/**
 * Middleware: passes auth set in local storage
 * to the to the GraphQL Server
 * TODO:
 * find better way to hide secrets:
 * https://www.rdegges.com/2018/please-stop-using-local-storage/
 */
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_JWT);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
