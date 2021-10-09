import React from 'react';
import ReactDOM from 'react-dom';
import * as dotenv from 'dotenv';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import ReactGa from 'react-ga';
import { Provider } from 'react-redux';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { App } from './components/app/App';
import { isProduction } from './utils/isProduction';
import { setContext } from '@apollo/client/link/context';
import { API_URL, AUTH_JWT } from './constants';
import { store } from './store/store';

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
 * Middleware: passes token auth set in local storage
 * to the to the GraphQL Server.
 * TODO:
 * find better way to hide secrets
 * https://www.rdegges.com/2018/please-stop-using-local-storage/
 */
const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await localStorage.getItem(AUTH_JWT);
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  } catch (error) {
    console.log('🔥', error);
    throw new Error(`Oops, ${error}`);
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
