import React, {Dispatch, SetStateAction, useContext} from 'react';
import {createContext, useState} from 'react';

interface AuthContext {}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element;
};

export function AuthProvider({children}: Props) {
  return (
    <AuthContext.Provider
      value={
        {
          userData,
          setUserData,
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
