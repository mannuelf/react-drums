type Kit = {
  id: number;
  name: string;
  sounds: {
    id: number;
    name: string;
    src: string;
    keyCode: number;
    keyChar: string;
  }[];
};

type Sound = {
  sounds: {
    id: number;
    name: string;
    src: string;
    keyCode: number;
    keyChar: string;
  };
};

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt: string;
}

interface IUsers {
  users: [IUser];
}

interface AuthPayload {
  token: string;
  user: [IUser];
}
