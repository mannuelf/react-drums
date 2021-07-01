const initialState: IUser = {
  firstName: 'Mannuel',
  email: 'mannuel@email.com',
  loggedIn: false,
};

type ACTIONTYPE =
  | { type: 'LOGIN'; payload: IUser }
  | { type: 'LOGOUT'; payload: IUser };

export function userReducer(
  state: typeof initialState = initialState,
  action: ACTIONTYPE,
): IUser {
  return state;
}
