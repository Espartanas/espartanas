import React, {useEffect, useState} from 'react';
import {Input, Pressable, Text, VStack} from 'native-base';
import Button from '../../Button.molecule';
import {useNavigation} from '@react-navigation/native';
import {CustomAsyncStorage} from '../../../../utils/CustomAsyncStorage';
import TouchID from 'react-native-touch-id';

export function SignInInput() {
  const navigation = useNavigation();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  async function signIn() {
    console.log(login);
  }

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

    const configs = {
      title: 'Autenticação Biométrica',
      color: '#FF0000',
      sensorErrorDescription: 'Touch ID inválido',
    };

    if (isPermitedFaceID && email && password) {
      TouchID.authenticate('Login App Clube de Férias', configs)
        .then((success: boolean) => {
          console.log('Sucesso na autenticação: ' + success);
          // signIn(email, password);
        })
        .catch((error: any) => {
          console.error('Erro na autenticação: ' + error);
        });
    }
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
      <Text fontSize={'12px'} bold color={'red.500'} ml="12px" mb="20px">
        error
      </Text>

      <Input
        borderWidth={0}
        borderBottomWidth={1}
        borderColor={'gray.600'}
        placeholder="Senha"
        onChangeText={text => setLogin({...login, password: text})}
      />
      <Text fontSize={'12px'} bold color={'red.500'} ml="12px" mb="10px">
        error
      </Text>

      <Pressable
        onPress={() => navigation.navigate('forgetPassword' as never)}
        mb="20px">
        <Text color={'blue.500'} alignSelf={'flex-end'}>
          Esqueci minha senha
        </Text>
      </Pressable>

      <Button onPress={signIn} text="Entrar" />
    </VStack>
  );
}
