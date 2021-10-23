import React, { createContext } from 'react';
import { AUTH_JWT } from '../constants';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext([null, () => {}]);

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider: React.FC = ({ children }: Props) => {
  const [auth, setAuth] = useLocalStorage(AUTH_JWT, null);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
