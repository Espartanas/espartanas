import React, {Dispatch, SetStateAction, useContext} from 'react';
import {createContext, useState} from 'react';

interface AuthContext {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element;
};

export function AuthProvider({children}: Props) {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={
        {
          user,
          setUser,
          auth,
          setAuth,
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
