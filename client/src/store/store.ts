import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './userReducer';

export const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware()),
);
