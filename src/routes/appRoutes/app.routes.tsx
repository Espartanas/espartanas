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
import LevelDivision from '../../screens/LevelDivision/LevelDivision';
import TrainingDivision from '../../screens/TrainingDivision/TrainingDivision';
import Training2 from '../../screens/Training/Training2';
import Training3 from '../../screens/Training/Training3';
import Test from '../../screens/Test/Test';

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
  TrainingSystem: undefined;
  TrainingDivision: undefined;
  test: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen options={{headerShown: false}} name="Home" component={Home} />
      <Screen options={{headerShown: false}} name="Planos" component={Plans} />
      <Screen options={{headerShown: false}} name="Series" component={Series} />
      <Screen options={{headerShown: false}} name="Perfil" component={Profile} />
      <Screen options={{headerShown: false}} name="Espartanas" component={About} />
      <Screen options={{headerShown: false}} name="Training" component={Training3} />
      <Screen options={{headerShown: false}} name="Perguntas" component={Questions} />
      <Screen options={{headerShown: false}} name="FaleConosco" component={TalkToUs} />
      <Screen options={{headerShown: false}} name="TrainingSystem" component={Training} />
      <Screen options={{headerShown: false}} name="LevelDivision" component={LevelDivision} />
      <Screen options={{headerShown: false}} name="TrainingDivision" component={TrainingDivision} />
      <Screen options={{headerShown: false}} name="test" component={Test} />
    </Navigator>
  );
};
