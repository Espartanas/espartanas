import React, {useContext} from 'react';
import {createContext, useState} from 'react';

interface IUserData {
  category: number;
  plan: number;
}

export interface ICreditCard {
  holderName: string;
  number: string;
  expiryMonth: string;
  expiryYear: string;
  ccv: string;
  installmentCount: string;
  installmentValue: number;
  cpfCnpj?: string;
}

interface AppContext {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  paymentData: any;
  setPaymentData: React.Dispatch<React.SetStateAction<any>>;
  creditCardData: ICreditCard;
  setCreditCardData: React.Dispatch<React.SetStateAction<ICreditCard>>;
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

  const [paymentData, setPaymentData] = useState({})

  const [creditCardData, setCreditCardData] = useState<ICreditCard>({} as ICreditCard);

  return (
    <AppContext.Provider
      value={
        {
          userData, setUserData,
          paymentData, setPaymentData,
          creditCardData, setCreditCardData,
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
