import React from 'react';
import {Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const menu = [
  {
    name: 'Perfil',
    icon: '=D',
    screen: 'Profile',
  },
  {
    name: 'Plano',
    icon: '8-D',
    screen: 'Plans',
  },
  {
    name: 'Sobre',
    icon: '=S',
    screen: 'About',
  },
  {
    name: 'Documentação',
    icon: '=O',
    screen: 'Documents',
  },
];

export function Menu() {
  const navigation = useNavigation();
  return (
    <VStack pt={'20px'} flex={1} bg={'white'}>
      {menu.map((item, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen as never)}
          style={{flexDirection: 'row', alignItems: 'center', padding: 5}}
          key={index}>
          <Text fontSize={'18px'} bold>
            {item.icon}
          </Text>
          <Text fontSize={'16px'} ml={'10px'}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </VStack>
  );
}
