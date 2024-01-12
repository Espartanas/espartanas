import React from 'react';
import {Avatar, Box, Center, HStack, Image, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {
  user: any;
};

export function ProfileHeader({user}: Props) {
  console.log(user);
  const navigation = useNavigation();

  return (
    <HStack justifyContent={'space-between'}>
      <HStack mt={'10px'} alignItems={'center'}>
        <Box>
          <Avatar
            alignSelf={'center'}
            size={'50px'}
            my={'10px'}
            source={{
              uri: user?.photo ? user?.photo : 'https://i.pravatar.cc/2032',
            }}
          />
        </Box>

        <Box ml={'10px'}>
          <Text fontSize={'16px'} bold>
            Olá, {user?.firstName + ' ' + user?.lastName}
          </Text>
        </Box>
      </HStack>

      <Center>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu' as never);
          }}>
          <Image
            mt={'5px'}
            source={require('../../../../assets/images/menu.webp')}
            alt={'menu'}
            w={'50px'}
            h={'50px'}
          />
        </TouchableOpacity>
      </Center>
    </HStack>
  );
}
