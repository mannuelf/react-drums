export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUsers {
  users: [IUser];
}

export interface IAuthPayload {
  token: string;
  user: [IUser];
  error: IError;
}

export interface IError {
  message: string;
}
