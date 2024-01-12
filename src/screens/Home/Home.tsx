import React from 'react';
import {Box, Text} from 'native-base';
import {useAuth} from '../../context/authContext';
import {ProfileHeader} from '../../components/molecule/Home/ProfileHeader/ProfileHeader';
import Screen from '../../components/molecule/Screen.molecule';

export function Home() {
  const {user} = useAuth();

  console.log(user);

  return (
    <Screen bg={'white'}>
      <ProfileHeader user={user} />

      <Text>Seja membro.</Text>
    </Screen>
  );
}
