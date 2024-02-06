import React, {useContext} from 'react';
import {createContext, useState} from 'react';

interface IUserData {
  category: number;
  plan: number;
}

interface AppContext {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}

export const AppContext = createContext<AppContext>({} as AppContext);

// -----------------------------xxxxxxx--------------------------------

type Props = {
  children: JSX.Element;
};

export function AppProvider({children}: Props) {
  const [userData, setUserData] = useState({
    category: 10,
    plan: 10,
  } as IUserData);
  return (
    <AppContext.Provider
      value={
        {
          userData,
          setUserData,
        } as AppContext
      }>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContext {
  const context = useContext(AppContext);

  return context;
}
