import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './global.css';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import LogRocket from 'logrocket';
import ReactGA from 'react-ga4';
import { Provider } from 'react-redux';
import { API_URL, AUTH_JWT } from './constants';
import { store } from './store/store';

if (import.meta.env.MODE !== 'development') {
  ReactGA.initialize(`${import.meta.env.VITE_GOOGLE_ANALYTICS}`);
  ReactGA.send({ hitType: 'pageview', page: `${window.location.pathname}` });
  LogRocket.init(`${import.meta.env.VITE_LOG_ROCKET_ID}/react-drum-maschine`);
}

const httpLink = createHttpLink({
  uri: API_URL,
});

/**
 * Middleware
 * - pass auth token auth set in localStorage to GraphQL Server.
 * https://www.rdegges.com/2018/please-stop-using-local-storage/
 */
const authLink = setContext((_, { headers }) => {
  try {
    const token = localStorage.getItem(AUTH_JWT);
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

/**
 * Apollo Client
 * - connect Apollo Client to GraphQL Server.
 * - cache data in memory.
 */
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
);
