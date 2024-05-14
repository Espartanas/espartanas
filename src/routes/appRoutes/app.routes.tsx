import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Home/Home';
import {Menu} from '../../screens/Menu/Menu';
import Plans from '../../screens/Plans/Plans';
import Profile from '../../screens/Profile/Profile';
import Dashboard from '../../screens/Dashboard/Dashboard';
import PlanPayment from '../../screens/PlanPayment/PlanPayment';

export type RootStackParamList = {
  Home: undefined;
  Planos: undefined;
  Perfil: undefined;
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
        options={{headerTitle: 'Planos'}}
        name="Planos"
        component={Plans}
      />
      <Screen
        options={{headerShown: false}}
        name="Perfil"
        component={Profile}
      />
    </Navigator>
  );
};
