export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUsers {
  users: [IUser];
}

export interface AuthPayload {
  token: string;
  user: [IUser];
}
