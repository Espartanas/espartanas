import React, {Dispatch, SetStateAction, useContext} from 'react';
import {createContext, useState} from 'react';

interface AuthContext {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  hasEmail: boolean;
  setHasEmail: Dispatch<SetStateAction<boolean>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element;
};

export function AuthProvider({children}: Props) {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const [hasEmail, setHasEmail] = useState(false);

  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider
      value={
        {
          user, setUser,
          auth, setAuth,
          hasEmail, setHasEmail,
          token, setToken,
        } as AuthContext
      }>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  return context;
}
