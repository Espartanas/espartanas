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
  const {user, auth, setUser, setAuth} = useAuth();
  const navigation = useNavigation();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  async function handleLoginBiometrics() {
    const email: string = (await CustomAsyncStorage.getItem(
      '@user_email',
    )) as string;

    const password: string = (await CustomAsyncStorage.getItem(
      '@user_password',
    )) as string;

    const isPermitedFaceID: string = JSON.parse(
      (await CustomAsyncStorage.getItem('@switch_face_id')) as string,
    );

    if (isPermitedFaceID) {
      setLogin({
        email,
        password,
      });
    }

    const configs = {
      title: 'Autenticação Biométrica',
      color: '#FF0000',
      sensorErrorDescription: 'Touch ID inválido',
    };

    if (isPermitedFaceID && email && password) {
      TouchID.authenticate('Login App Clube de Férias', configs)
        .then((success: boolean) => {
          console.log('Sucesso na autenticação: ' + success);
          signIn({email, password});
        })
        .catch((error: any) => {
          console.error('Erro na autenticação: ' + error);
        });
    }
  }

  async function signIn({email, password}: {email: string; password: string}) {
    console.log(email, password);
    api
      .post('/auth/login', {email, password})
      .then(res => {
        console.log('login', res.data);
        setUser(res.data.user);
        setToken(res.data.access_token);
        setLoginError('');
        setAuth(true);
      })
      .catch(error => {
        console.log(error.response.data);
        setLoginError(error.response.data.message[0]);
      });
  }

  useEffect(() => {
    handleLoginBiometrics();
  }, []);

  return (
    <VStack>
      <Input
        borderWidth={0}
        borderBottomWidth={1}
        borderColor={'gray.600'}
        placeholder="E-mail"
        onChangeText={text => setLogin({...login, email: text})}
      />
      <Text
        mt="5px"
        fontSize={'12px'}
        bold
        color={'red.500'}
        ml="12px"
        mb="20px">
        {loginError}
      </Text>

      <Input
        borderWidth={0}
        borderBottomWidth={1}
        type="password"
        borderColor={'gray.600'}
        placeholder="Senha"
        onChangeText={text => setLogin({...login, password: text})}
      />

      <Pressable
        onPress={() => navigation.navigate('forgetPassword' as never)}
        mb="20px">
        <Text color={'blue.500'} alignSelf={'flex-end'}>
          Esqueci minha senha
        </Text>
      </Pressable>

      <Button onPress={() => signIn(login)} text="Entrar" />
    </VStack>
  );
}
