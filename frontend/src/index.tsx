import.meta;
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGa from 'react-ga';
import LogRocket from 'logrocket';
import * as dotenv from 'dotenv';
import { Provider } from 'react-redux';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import App from './components/app/App';
import { ENV, AUTH_JWT, API_URL } from './constants';
import { store } from './store/store';

dotenv.config();

if (ENV && ENV.NODE_ENV !== 'development') {
  ReactGa.initialize(`${ENV.SNOWPACK_PUBLIC_GOOGLE_ANALYTICS}`);
  ReactGa.pageview(window.location.pathname + window.location.search);
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
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
