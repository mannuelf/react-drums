import.meta;

import App from './components/app/App';

import * as dotenv from 'dotenv';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ENV, AUTH_JWT, API_URL } from './constants';
import { Provider } from 'react-redux';
import { setContext } from '@apollo/client/link/context';
import { store } from './store/store';
import LogRocket from 'logrocket';
import ReactGA from 'react-ga4';

dotenv.config();

if (ENV && ENV.NODE_ENV) {
  ReactGA.initialize(`${ENV.SNOWPACK_PUBLIC_GOOGLE_ANALYTICS}`);
  ReactGA.send({ hitType: 'pageview', page: `${window.location.pathname}` });
  LogRocket.init(`${ENV.SNOWPACK_PUBLIC_APP_LOG_ROCKET_ID}/react-drum-maschine`);
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

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
