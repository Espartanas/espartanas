import React from 'react';
import {useAuth} from '../../context/authContext';
import {ProfileHeader} from '../../components/molecule/Home/ProfileHeader/ProfileHeader';
import Screen from '../../components/molecule/Screen.molecule';
import {Plans} from '../../components/molecule/Home/Plans/Plans';

export function Home() {
  const {user} = useAuth();

  console.log(user);

  return (
    <Screen bg={'white'}>
      <ProfileHeader user={user} />

      <Plans />
    </Screen>
  );
}
