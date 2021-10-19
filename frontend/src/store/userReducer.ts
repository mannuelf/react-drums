const initialState: IUser = {
  firstName: '',
  email: '',
  loggedIn: false,
};

type ACTIONTYPE =
  | { type: 'LOGIN'; payload: IUser }
  | { type: 'LOGOUT'; payload: IUser };

export function userReducer(
  state: typeof initialState = initialState,
  action: ACTIONTYPE,
): IUser {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}
