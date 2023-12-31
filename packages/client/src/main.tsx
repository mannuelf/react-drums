import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, cacheExchange, createClient, fetchExchange } from 'urql';
import App from './components/app/App';
import './main.css';

import LogRocket from 'logrocket';
import ReactGA from 'react-ga4';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';

if (import.meta.env.MODE !== 'development') {
  ReactGA.initialize(`${import.meta.env.VITE_GOOGLE_ANALYTICS}`);
  ReactGA.send({ hitType: 'pageview', page: `${window.location.pathname}` });
  LogRocket.init(`${import.meta.env.VITE_LOG_ROCKET_ID}/react-drum-maschine`);
}


const client = createClient({
  url: import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql',
  exchanges: [cacheExchange,fetchExchange]
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Provider value={client}>
        <App />
      </Provider>
    </ReduxProvider>
  </React.StrictMode>,
);
