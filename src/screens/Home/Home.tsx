import React from 'react';
import {Box, Text} from 'native-base';
import {useAuth} from '../../context/authContext';
import {ProfileHeader} from '../../components/molecule/Home/ProfileHeader/ProfileHeader';

export function Home() {
  const {user} = useAuth();

  console.log(user);

  return (
    <Box bg={'white'}>
      {/* <ProfileHeader user={user} /> */}
      <Text>Home</Text>
    </Box>
  );
}
