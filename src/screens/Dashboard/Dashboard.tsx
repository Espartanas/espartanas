import React from 'react';
import {Box} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import {ProfileHeader} from '../../components/molecule/Home/ProfileHeader/ProfileHeader';
import {useAuth} from '../../context/authContext';

export default function Dashboard() {
  const {user} = useAuth();
  return (
    <Screen>
      <Box>
        <ProfileHeader user={user} />
      </Box>
    </Screen>
  );
}
