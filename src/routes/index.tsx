import React, { useEffect, useState } from 'react';
import {useAuth} from '../context/authContext';
import {AuthRoutes} from './authRoutes/auth.routes';
import {AppRoutes} from './appRoutes/app.routes';
import api from '../services/api';
import { Image, Text } from 'native-base';
import Screen from '../components/molecule/Screen.molecule';
import ValidateAccount from '../screens/ValidateAccount/ValidateAccount';

export default function Routes() {
  const [loading, setLoading] = useState(true);
  const {auth, setUser, user, setAuth} = useAuth();
 
  useEffect(() => {
    api
      .get('/me')
      .then((res) => {
        setUser(res.data.user)
        setAuth(true);
      })
      .catch((error) => console.log('/me error', error.response.data))
      .finally(() => setLoading(false));
  }, [])

  console.log(user);

  if (loading) {
    return (
      <Screen footer mt={'140px'} alignItems={'center'} justifyContent={'center'}>
        <Text color={'white'} fontSize={28} py={5} bold>Espartanas</Text>
        <Image w={72} h={72} tintColor={'#ffffff'} source={require('../assets/images/logo.png')} alt={'logo'} />
      </Screen>
    )
  }

  return auth ? user.valid_account ? <AppRoutes /> : <ValidateAccount /> : <AuthRoutes />;
}
