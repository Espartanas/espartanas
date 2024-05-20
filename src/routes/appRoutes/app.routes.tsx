import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Home/Home';
import Plans from '../../screens/Plans/Plans';
import Profile from '../../screens/Profile/Profile';
import About from '../../screens/About/About';

export type RootStackParamList = {
  Home: undefined;
  Planos: undefined;
  Perfil: undefined;
  Espartanas: undefined;
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
    </Navigator>
  );
};
