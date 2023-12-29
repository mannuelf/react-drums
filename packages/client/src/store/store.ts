import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { userReducer } from './userReducer';

//@ts-ignore
export const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware()),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
