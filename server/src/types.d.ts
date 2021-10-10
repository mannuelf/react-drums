interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
}

interface IUsers {
  users: [IUser];
}

interface AuthPayload {
  token: string;
  user: [IUser];
}
