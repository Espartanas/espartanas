import React, { useState } from 'react';
import Screen from '../../components/molecule/Screen.molecule';
import {HStack, Image, Input, Text, VStack} from 'native-base';
import Button from '../../components/molecule/Button.molecule';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { ProfileFormData, ProfileSchema } from '../../utils/resolvers';
import { maskLetters, maskPhone } from '../../utils/masks';
import { useAuth } from '../../context/authContext';

export default function Profile() {
  const {user} = useAuth();
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
      errors: {firstName, lastName, email, phone},
    },
  } = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      phone: user.phone,
    }
  });


  const onSubmit = async (data: ProfileFormData) => {
    const body = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
    };

    console.log(body);

    // api
    //   .put('/user', body)
    //   .then(res => navigation.navigate('login' as never))
    //   .catch(err => console.log(err.response.data));
  };

  return (
    <Screen paddingX={'20px'}>
       <HStack alignItems={'center'} justifyContent={'space-between'} mt={'20px'}>
        <Image w={24} h={24} tintColor={'#ffffff'} source={require('../../assets/images/logo.png')} alt={'logo'} />

        <Text fontSize={'28px'} color={'#ffffff'}>
          Perfil
        </Text>
      </HStack>

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
              mb={"5px"}
              borderColor={'#ffffff'}
              bg={'#ffffff'}
              placeholderTextColor={'gray.700'}
              placeholder="E-mail"
              onChangeText={onChange}
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
              borderColor={'#ffffff'}
              bg={'#ffffff'}
              placeholderTextColor={'gray.700'}
              placeholder="Telefone"
              onChangeText={text => onChange(maskPhone(text))}
              value={value}
              maxLength={15}
              _focus={{bg: '#ffffff'}}
            />
          )}
          name="phone"
        />

        <Text mb={'10px'} bold fontSize={'12px'} color={'red.500'}>
          {phone?.message || error?.phone}
        </Text>
        <Button _pressed={{opacity: 0.5}} onPress={handleSubmit(onSubmit)} text='Editar' />
      </VStack>
    </Screen>
  );
}
