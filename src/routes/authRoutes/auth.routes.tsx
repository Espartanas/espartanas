import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignUp} from '../../screens/Sign/SignIn';
import {Register} from '../../screens/Register/Register';
import {ForgetPassword} from '../../screens/ForgetPassword/ForgetPassword';

export type RootStackParamList = {
  login: undefined;
  register: undefined;
  forgetPassword: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'login'}>
      <Screen name="login" component={SignUp} />
      <Screen name="register" component={Register} />
      <Screen name="forgetPassword" component={ForgetPassword} />
    </Navigator>
  );
};
