import React from 'react';
import {Avatar, Box, Center, Text, VStack} from 'native-base';

type Props = {
  user: any;
};

export function ProfileHeader({user}: Props) {
  console.log(user);
  return (
    <Center>
      <VStack mt={'10px'} alignItems={'center'}>
        <Box>
          <Avatar
            alignSelf={'center'}
            size={'80px'}
            my={'10px'}
            source={{
              uri: user?.photo ? user?.photo : 'https://i.pravatar.cc/2032',
            }}
          />
        </Box>

        <Box>
          <Text fontSize={'16px'} bold>
            Olá, {user?.firstName + ' ' + user?.lastName}
          </Text>
        </Box>
      </VStack>
    </Center>
  );
}
