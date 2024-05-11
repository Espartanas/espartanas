import React, {useEffect, useState} from 'react';
import {Input, Pressable, Text, VStack} from 'native-base';
import Button from '../../Button.molecule';
import {useNavigation} from '@react-navigation/native';
import {CustomAsyncStorage} from '../../../../utils/CustomAsyncStorage';
import TouchID from 'react-native-touch-id';
import api from '../../../../services/api';
import {useAuth} from '../../../../context/authContext';
import {setToken} from '../../../../services/auth';

export function SignInInput() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {hasEmail, setHasEmail, setToken} = useAuth();

  // async function handleLoginBiometrics() {
  //   const email: string = (await CustomAsyncStorage.getItem(
  //     '@user_email',
  //   )) as string;

  //   const password: string = (await CustomAsyncStorage.getItem(
  //     '@user_password',
  //   )) as string;

  //   const isPermitedFaceID: string = JSON.parse(
  //     (await CustomAsyncStorage.getItem('@switch_face_id')) as string,
  //   );

  //   if (isPermitedFaceID) {
  //     setLogin({
  //       email,
  //       password,
  //     });
  //   }

  //   const configs = {
  //     title: 'Autenticação Biométrica',
  //     color: '#FF0000',
  //     sensorErrorDescription: 'Touch ID inválido',
  //   };

  //   if (isPermitedFaceID && email && password) {
  //     TouchID.authenticate('Login App Clube de Férias', configs)
  //       .then((success: boolean) => {
  //         console.log('Sucesso na autenticação: ' + success);
  //         signIn({email, password});
  //       })
  //       .catch((error: any) => {
  //         console.error('Erro na autenticação: ' + error);
  //       });
  //   }
  // }

  // useEffect(() => {
  //   handleLoginBiometrics();
  // }, []);

  async function validateEmail(email: string) {
    api
      .post('/has_email', {email})
      .then(res => {
        console.log('login', res.data.email);
        setHasEmail(res.data.email);
        if (!res.data.email) {
          navigation.navigate('register' as never);
        }
      })
      .catch(error => {
        console.log('ariel', error.response.data.message);
        if (!error.response.data.message) {
          navigation.navigate('register' as never);
        }
      });
  }

  function signIn(email: string, password: string) {
    api
      .post('/auth', {email, password})
      .then(res => {
        console.log('login', res.data);
        setToken(res.data.token)
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }

  return (
    <VStack>
      <Input
        borderColor={'#ffffff'}
        placeholder="Digite o seu e-mail"
        bg={'#ffffff'}
        placeholderTextColor={'gray.700'}
        onChangeText={text => setEmail(text)}
        _focus={{bg: '#ffffff'}}
        mb="20px"
      />

      {
        hasEmail &&
        <Input
          borderColor={'#ffffff'}
          placeholder="Password"
          bg={'#ffffff'}
          placeholderTextColor={'gray.700'}
          onChangeText={text => setPassword(text)}
          _focus={{bg: '#ffffff'}}
          mb="20px"
        />
      }

      <Button
        onPress={() => hasEmail ? signIn(email, password) : validateEmail(email)}
        text={hasEmail ? "Logar" : "Entrar"}
      />
      <Pressable
        onPress={() => navigation.navigate('forgetPassword' as never)}
      >
        <Text color={'#5968DF'} alignSelf={'flex-end'}>
          Esqueci minha senha
        </Text>
      </Pressable>
    </VStack>
  );
}
