import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Home/Home';

export type RootStackParamList = {
  home: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="home" component={Home} />
    </Navigator>
  );
};
