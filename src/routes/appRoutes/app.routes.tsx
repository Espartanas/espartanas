import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../../screens/Home/Home';
import Plans from '../../screens/Plans/Plans';
import About from '../../screens/About/About';
import Series from '../../screens/Series/Series';
import Profile from '../../screens/Profile/Profile';
import TalkToUs from '../../screens/TalkToUs/TalkToUs';
import Training from '../../screens/Training/Training';
import Questions from '../../screens/Questions/Questions';
import PaymentMethod from '../../screens/PaymentMethod/PaymentMethod';
import LevelDivision from '../../screens/LevelDivision/LevelDivision';
import TrainingDivision from '../../screens/TrainingDivision/TrainingDivision';
import Training2 from '../../screens/Training/Training2';
import Training3 from '../../screens/Training/Training3';
import Test from '../../screens/Test/Test';
import AddCreditCard from '../../screens/AddCreditCard/AddCreditCard';
import AddAddressData from '../../screens/AddAddressData/AddAddressData';

export type RootStackParamList = {
  Home: undefined;
  Planos: undefined;
  Perfil: undefined;
  Series: undefined;
  Training: undefined;
  Perguntas: undefined;
  Espartanas: undefined;
  FaleConosco: undefined;
  LevelDivision: undefined;
  PaymentMethod: undefined;
  AddCreditCard: undefined;
  TrainingSystem: undefined;
  AddAddressData: undefined;
  TrainingDivision: undefined;
  test: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Planos" component={Plans} />
      <Screen name="Series" component={Series} />
      <Screen name="Perfil" component={Profile} />
      <Screen name="Espartanas" component={About} />
      <Screen name="Training" component={Training3} />
      <Screen name="Perguntas" component={Questions} />
      <Screen name="FaleConosco" component={TalkToUs} />
      <Screen name="TrainingSystem" component={Training} />
      <Screen name="PaymentMethod" component={PaymentMethod} />
      <Screen name="LevelDivision" component={LevelDivision} />
      <Screen name="AddCreditCard" component={AddCreditCard} />
      <Screen name="AddAddressData" component={AddAddressData} />
      <Screen name="TrainingDivision" component={TrainingDivision} />
      <Screen name="test" component={Test} />
    </Navigator>
  );
};
