import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Home/Home';
import {Menu} from '../../screens/Menu/Menu';

export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen options={{headerShown: false}} name="Home" component={Home} />
      <Screen name="Menu" component={Menu} />
    </Navigator>
  );
};
