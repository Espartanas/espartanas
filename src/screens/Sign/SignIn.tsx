import React from 'react';
import {Box, Center, Image, Text, View} from 'native-base';
import {Header} from '../../components/molecule/Header.molecule';
import {SignInInput} from '../../components/molecule/SingIn/SignInInput/SignInInput.molecule';
import Screen from '../../components/molecule/Screen.molecule';
import Main from '../../components/molecule/Main.molecule';
import {SignInRegister} from '../../components/molecule/SingIn/SignInRegister/SignInRegister.molecule';
import SignFaceId from '../../components/molecule/SingIn/SignFaceId/SignFaceId.molecule';
import {Footer} from '../../components/atom/Footer.atom';
import { useAuth } from '../../context/authContext';

export function SignUp() {
  const {hasEmail} = useAuth();
  
  return (
    <Screen paddingX={'20px'} footer>
      <Center>
        <Text color={'white'} fontSize={28} py={5} bold>Espartanas</Text>
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

      <SignInInput />
    </Screen>
  );
}
