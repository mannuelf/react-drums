const initialState: User = {
  firstName: '',
  email: '',
  loggedIn: false,
};

type ACTIONTYPE =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT'; payload: User };

export function userReducer(
  state: typeof initialState = initialState,
  action: ACTIONTYPE,
): User {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
