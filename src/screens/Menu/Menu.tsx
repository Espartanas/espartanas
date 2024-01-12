import React from 'react';
import {Box, Center, HStack, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';

const menu = [
  {
    name: 'Perfil',
    icon: '=D',
  },
  {
    name: 'Plano',
    icon: '8-D',
  },
  {
    name: 'Sobre',
    icon: '=S',
  },
  {
    name: 'Documentação',
    icon: '=O',
  },
];

export function Menu() {
  return (
    <VStack pt={'20px'} flex={1} bg={'white'}>
      {menu.map((item, index) => (
        <TouchableOpacity
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
