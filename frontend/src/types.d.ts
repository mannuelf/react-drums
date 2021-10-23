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
  firstName: string;
  lastName?: string;
  email?: string;
  password?: string;
  loggedIn?: boolean;
  isAdmin?: boolean;
}

interface IUsers {
  users: [IUser];
}

interface AuthPayload {
  token: string;
  user: [IUser];
  error: Error;
}

interface ILogo {
  light: string;
  dark: string;
}
