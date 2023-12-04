import React from 'react';
import {Box, Image} from 'native-base';
import {Header} from '../../components/molecule/Header.molecule';
import {SignInInput} from '../../components/molecule/SingIn/SignInInput/SignInInput.molecule';
import Screen from '../../components/molecule/Screen.molecule';
import Main from '../../components/molecule/Main.molecule';
import {SignInRegister} from '../../components/molecule/SingIn/SignInRegister/SignInRegister.molecule';
import SignFaceId from '../../components/molecule/SingIn/SignFaceId/SignFaceId.molecule';
import {Footer} from '../../components/atom/Footer.atom';

export function SignUp() {
  return (
    <Screen>
      <Header
        py={5}
        showTitle
        alignItems={'center'}
        justifyContent={'space-between'}
        title="Espartanas"
      />

      <Main>
        <Box alignItems={'center'} justifyContent={'center'}>
          <Image
            width={48}
            height={48}
            source={require('../../assets/images/logo.png')}
            alt="logo"
          />
        </Box>

        <SignInInput />

        <SignFaceId />

        <SignInRegister />
      </Main>

      <Footer />
    </Screen>
  );
}
