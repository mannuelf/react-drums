import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import LogRocket from 'logrocket';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { Provider, cacheExchange, createClient, fetchExchange } from 'urql';
import App from './components/app/App';
import './main.css';

if (import.meta.env.MODE !== 'development') {
  ReactGA.initialize(`${import.meta.env.VITE_GOOGLE_ANALYTICS}`);
  ReactGA.send({ hitType: 'pageview', page: `${window.location.pathname}` });
  LogRocket.init(`${import.meta.env.VITE_LOG_ROCKET_ID}/react-drum-maschine`);
}

if (import.meta.env.MODE === 'development') {
  // https://www.apollographql.com/docs/react/errors/#%7B%22version%22%3A%223.8.8%22%2C%22message%22%3A49%2C%22args%22%3A%5B%5D%7D
  loadDevMessages();
  loadErrorMessages();
}

const client = createClient({
  url: import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
);
