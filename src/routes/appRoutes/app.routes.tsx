import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Home/Home';
import Plans from '../../screens/Plans/Plans';
import Profile from '../../screens/Profile/Profile';
import About from '../../screens/About/About';
import Questions from '../../screens/Questions/Questions';
import TalkToUs from '../../screens/TalkToUs/TalkToUs';

export type RootStackParamList = {
  Home: undefined;
  Planos: undefined;
  Perfil: undefined;
  Espartanas: undefined;
  Perguntas: undefined;
  FaleConosco: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Screen
        options={{headerShown: false}}
        name="Planos"
        component={Plans}
      />
      <Screen
        options={{headerShown: false}}
        name="Perfil"
        component={Profile}
      />
      <Screen
        options={{headerShown: false}}
        name="Espartanas"
        component={About}
      />
      <Screen
        options={{headerShown: false}}
        name="Perguntas"
        component={Questions}
      />
      <Screen
        options={{headerShown: false}}
        name="FaleConosco"
        component={TalkToUs}
      />
    </Navigator>
  );
};
