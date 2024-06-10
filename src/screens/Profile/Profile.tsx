import React, { useState } from 'react';
import Screen from '../../components/molecule/Screen.molecule';
import {Avatar, Center, Input, Text, VStack} from 'native-base';
import Button from '../../components/molecule/Button.molecule';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { ProfileFormData, ProfileSchema } from '../../utils/resolvers';
import { maskDate, maskLetters, maskPhone } from '../../utils/masks';
import { useAuth } from '../../context/authContext';
import { Header } from '../../components/molecule/Header.molecule';
import { logout } from '../../services/auth';

export default function Profile() {
  const {user, setAuth} = useAuth();
  const navigation = useNavigation();

  const [error, _setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    birthDate: '',
  });

  const {
    control,
    handleSubmit,
    formState: {
      errors: {firstName, lastName, email, phone, birthDate},
    },
  } = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      phone: user.phone,
      birthDate: user.birthdate,
    }
  });


  const onSubmit = async (data: ProfileFormData) => {
    const body = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
      birthdate: data.birthDate,
    };

    console.log(body);

    api
      .put('/update_user', body)
      .then(res => navigation.navigate('Home' as never))
      .catch(err => console.log(err.response.data));
  };

  return (
    <Screen paddingX={'20px'}>
      <Header title='Perfil' />

      <Center w={'100%'} h={'100px'} mt={'20px'}>
        <Avatar w={'100px'} h={'100px'} source={{uri: 'https://i.pravatar.cc/20322'}} />
      </Center>

      <VStack mt={'30px'}>
        <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                p={'5px'}
                mb={"5px"}
                borderColor={'#ffffff'}
                bg={'#ffffff'}
                placeholderTextColor={'gray.700'}
                placeholder="Primeiro nome"
                onChangeText={text => onChange(maskLetters(text))}
                value={value}
                maxLength={12}
                _focus={{bg: '#ffffff'}}
              />
            )}
          name="firstName"
        />

        <Text mb={'10px'} bold fontSize={'12px'} color={'red.500'}>
          {firstName?.message || error?.firstName}
        </Text>

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              p={'5px'}
              mb={"5px"}
              borderColor={'#ffffff'}
              bg={'#ffffff'}
              placeholderTextColor={'gray.700'}
              placeholder="Último nome"
              onChangeText={text => onChange(maskLetters(text))}
              value={value}
              maxLength={12}
              _focus={{bg: '#ffffff'}}
            />
          )}
          name="lastName"
        />

        <Text mb={'10px'} bold fontSize={'12px'} color={'red.500'}>
          {lastName?.message || error?.lastName}
        </Text>

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              p={'5px'}
              mb="5px"
              borderColor={'#ffffff'}
              bg={'#ffffff'}
              placeholderTextColor={'gray.700'}
              placeholder="Data de nascimento"
              onChangeText={text => onChange(maskDate(text))}
              value={value}
              maxLength={10}
              _focus={{bg: '#ffffff'}}
            />
          )}
          name="birthDate"
        />

        <Text mb={'10px'} bold fontSize={'12px'} color={'red.500'}>
          {birthDate?.message || error?.birthDate}
        </Text>

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              p={'5px'}
              mb={"5px"}
              color={'red.500'}
              borderColor={'#ffffff'}
              bg={'#ffffff'}
              placeholderTextColor={'gray.700'}
              placeholder="E-mail"
              onChangeText={onChange}
              isReadOnly
              value={value}
              _focus={{bg: '#ffffff'}}
            />
          )}
          name="email"
        />

        <Text mb={'10px'} bold fontSize={'12px'} color={'red.500'}>
          {email?.message || error?.email}
        </Text>

        <Controller 
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              p={'5px'}
              mb={"5px"}
              color={'red.500'}
              borderColor={'#ffffff'}
              bg={'#ffffff'}
              placeholderTextColor={'gray.700'}
              placeholder="Telefone"
              onChangeText={text => onChange(maskPhone(text))}
              value={value}
              maxLength={15}
              _focus={{bg: '#ffffff'}}
              isReadOnly
            />
          )}
          name="phone"
        />

        <Text mb={'10px'} bold fontSize={'12px'} color={'red.500'}>
          {phone?.message || error?.phone}
        </Text>

        <Button _pressed={{opacity: 0.5}} onPress={handleSubmit(onSubmit)} text='Editar' />

        <Button bg={'#EB6A6A'} mt={'20px'} _pressed={{opacity: 0.5}} onPress={() => {
          logout()
          setAuth(false)
        }} text='Sair' />

      </VStack>
    </Screen>
  );
}
