import React from 'react';
import Main from '../../components/molecule/Main.molecule';
import Screen from '../../components/molecule/Screen.molecule';
import {HStack, Image, Input, Text, VStack} from 'native-base';
import Button from '../../components/molecule/Button.molecule';

export default function Profile() {
  return (
    <Screen paddingX={'20px'}>
       <HStack alignItems={'center'} justifyContent={'space-between'} mt={'20px'}>
        <Image w={24} h={24} tintColor={'#ffffff'} source={require('../../assets/images/logo.png')} alt={'logo'} />

        <Text fontSize={'28px'} color={'#ffffff'}>
          Perfil
        </Text>
      </HStack>

      <VStack mt={'30px'}>
        <Input
          p={'5px'}
          mb="20px"
          borderColor={'#ffffff'}
          bg={'#ffffff'}
          placeholderTextColor={'gray.700'}
          placeholder="Primeiro nome"
          // onChangeText={text => onChange(maskLetters(text))}
          // value={value}
          maxLength={12}
          _focus={{bg: '#ffffff'}}
        />

        <Input
          p={'5px'}
          mb="20px"
          borderColor={'#ffffff'}
          bg={'#ffffff'}
          placeholderTextColor={'gray.700'}
          placeholder="Último nome"
          // onChangeText={text => onChange(maskLetters(text))}
          // value={value}
          maxLength={12}
          _focus={{bg: '#ffffff'}}
        />

        <Input
          p={'5px'}
          mb="20px"
          borderColor={'#ffffff'}
          bg={'#ffffff'}
          placeholderTextColor={'gray.700'}
          placeholder="E-mail"
          // onChangeText={text => onChange(maskLetters(text))}
          // value={value}
          maxLength={12}
          _focus={{bg: '#ffffff'}}
        />

        <Input
          p={'5px'}
          mb="20px"
          borderColor={'#ffffff'}
          bg={'#ffffff'}
          placeholderTextColor={'gray.700'}
          placeholder="Telefone"
          // onChangeText={text => onChange(maskLetters(text))}
          // value={value}
          maxLength={12}
          _focus={{bg: '#ffffff'}}
        />

        <Button _pressed={{opacity: 0.5}} onPress={() => console.log('oi')} text='Editar' />
      </VStack>
    </Screen>
  );
}
