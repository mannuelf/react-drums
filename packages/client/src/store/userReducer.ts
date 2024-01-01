import { User } from "../types/types";

interface UserState {
  firstName: string;
  email: string;
  loggedIn: boolean;
}

const initialState: UserState = {
  firstName: '',
  email: '',
  loggedIn: false,
};

type ACTION_TYPE =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT'; payload: User };

export function userReducer(
  state: typeof initialState = initialState,
  action: ACTION_TYPE,
): UserState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
