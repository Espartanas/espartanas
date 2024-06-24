import React, { useEffect, useState } from 'react';
import Screen from '../../components/molecule/Screen.molecule';
import {Avatar, Box, Center, Image, Input, Pressable, Text, VStack, useToast} from 'native-base';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request, PERMISSIONS} from 'react-native-permissions';
import { ActivityIndicator, PermissionsAndroid, Platform } from 'react-native';

interface IImagePickerResponse {
  error: string;
  uri: string;
  didCancel: boolean;
  assets: {
    uri: string;
  }[];
}

const options = {
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 500,
  maxWidth: 500,
};

export default function Profile() {
  const {user, setAuth, updateUser} = useAuth();
  const navigation = useNavigation();

  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const [avatar, setAvatar] = useState(null) as any;

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

    setLoading(true);

    api
      .put('/update_user', body)
      .then(res => {
        console.log(res.data)
        toast.show({
          description: res.data.message,
          placement: 'top',
          bgColor: 'green.700',
        })
        updateUser();
      })
      .catch(err => {
        toast.show({
          description: err.response.data.message,
          placement: 'top',
          bgColor: 'red.700',
        })
        console.log(err.response.data)
      })
      .finally(() => setLoading(false));
  };

  const handleCameraLaunch = async (): Promise<void> => {
    setLoading(true);
    launchCamera(options, (response: IImagePickerResponse) => {
      if (response.assets !== undefined) {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        saveNewImage(imageUri);
        return;
      }

      setLoading(false);
    });
  };

  const openImagePicker = async (): Promise<void> => {
    launchImageLibrary(options, (response: IImagePickerResponse) => {
      setLoading(true);

      if (response.assets !== undefined) {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        saveNewImage(imageUri);
        return;
      }

      setLoading(false);
    });
  };

  const requestCameraPermission = async (type: string): Promise<void> => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        type === 'camera' ? handleCameraLaunch() : openImagePicker();
      } else {
        console.error('Camera permission denied');
      }
    } catch (err) {
      console.error(err);
    }
  };

  function saveNewImage(image: string) {
    let bodyFormData = new FormData();

    let imageObject = {
      uri: image,
      type: 'image/jpeg',
      name: 'user.jpg',
    };

    bodyFormData.append('avatar', imageObject);

    api
      .post('/update_avatar', bodyFormData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        toast.show({
          description: "Avatar atualizado com sucesso!",
          placement: 'top',
          bgColor: 'green.700',
        })
        updateUser();
      })
      .catch(err => {
        toast.show({
          description: "Error ao atualizar o avatar! Tente em alguns minutos!",
          placement: 'top',
          bgColor: 'red.700',
        })
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function getFreeTrial() {
    api
      .post('/free_trial/1')
      .then(res => {
        console.log(res.data)
        toast.show({
          description: res.data.message,
          placement: 'top',
          bgColor: 'green.700',
        })
        updateUser()
      })
      .catch(err => {
        toast.show({
          description: err.response.data.message,
          placement: 'top',
          bgColor: 'red.700',
        })
        console.log(err.response.data)
      });
  }

  return (
    <Screen paddingX={'20px'}>
      <Header title='Perfil' />

      <Box alignItems={'center'} justifyContent={'center'} w={'100%'} h={'100px'} mt={'20px'}>
        <Avatar w={'100px'} h={'100px'} source={user.avatar ? {uri: `http://aespartana.cloud:3001/avatar_public/${user.avatar}`} : require('../../assets/images/no_image.jpg')} />
      </Box>

      <Center mt={'20px'} flexDir={'row'}>
        <Pressable onPress={() => requestCameraPermission('camera')} _pressed={{opacity: 0.5}} alignItems={'center'} w={'80px'} bg={'#5968DF'} p={'5px'} borderLeftRadius={'100px'} borderRightWidth={'1px'} borderRightColor={'#ffffff'}>
          <Image tintColor={'#ffffff'} w={6} h={6} alt='Camera celular' source={require('../../assets/images/camera.png')} />
        </Pressable>

        <Pressable onPress={() => requestCameraPermission('library')} _pressed={{opacity: 0.5}} alignItems={'center'} w={'80px'} bg={'#EB6A6A'} p={'5px'} borderRightRadius={'100px'} borderLeftWidth={'1px'} borderLeftColor={'#ffffff'}>
          <Image tintColor={'#ffffff'} w={6} h={6} alt='Memoria do celular' source={require('../../assets/images/memoria.png')} />
        </Pressable>
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

        <Button _pressed={{opacity: 0.5}} onPress={handleSubmit(onSubmit)} text={loading ? <ActivityIndicator size="small" color="#ffffff" /> : 'Editar'} />

        {
          !user.premium &&
          <Button onPress={getFreeTrial} variant borderColorVariant={'gold'} mt={'20px'} text='Free Trial' />
        } 

        <Button bg={'#EB6A6A'} mt={'20px'} _pressed={{opacity: 0.5}} onPress={() => {
          logout()
          setAuth(false)
        }} text='Sair' />


      </VStack>
    </Screen>
  );
}
