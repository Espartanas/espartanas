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
  Menu: undefined;
  Plans: undefined;
  Profile: undefined;
  Dashboard: undefined;
  PlanPayment: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen
        options={{headerTitle: 'Bem Vindo'}}
        name="Home"
        component={Home}
      />
      <Screen name="Menu" component={Menu} />
      <Screen
        options={{headerTitle: 'Planos'}}
        name="Plans"
        component={Plans}
      />
      <Screen
        options={{headerTitle: 'Perfil'}}
        name="Profile"
        component={Profile}
      />
      <Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={Dashboard}
      />
      <Screen
        options={{headerTitle: 'Pagamento'}}
        name="PlanPayment"
        component={PlanPayment}
      />
    </Navigator>
  );
};
