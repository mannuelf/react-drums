type Kit = {
  id: number;
  name: string;
  sounds: {
    id: number;
    name: string;
    src: string;
    keyCode: number;
    keyChar: string;
    onClick?: () => void;
  }[];
};

interface Sound {
  id: number;
  name: string;
  src: string;
  keyCode: number;
  keyChar: string;
}

type Sounds = {
  sounds: Sound[];
};

interface User {
  firstName: string;
  lastName?: string;
  email?: string;
  password?: string;
  loggedIn?: boolean;
  isAdmin?: boolean;
}

interface Users {
  users: [User];
}

interface AuthPayload {
  token: string;
  user: [User];
  error: Error;
}

interface Logo {
  light: string;
  dark: string;
}
