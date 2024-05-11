import React from 'react';
import {Box, Center, Image, Text} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import ForgotPasswordInput from '../../components/molecule/SingIn/ForgotPasswordInput/ForgotPasswordInput';

export function ForgetPassword() {
  return (
    <Screen paddingX={'20px'} footer>
      <Center>
        <Text color={'white'} fontSize={28} py={5} bold>Recuperar Senha</Text>
      </Center>

      <Box my={'100px'} alignItems={'center'} justifyContent={'center'}>
        <Image
          width={56}
          height={56}
          tintColor={'#ffffff'}
          source={require('../../assets/images/logo.png')}
          alt="logo"
        />
      </Box>

      <ForgotPasswordInput />

    </Screen>
  );
}
