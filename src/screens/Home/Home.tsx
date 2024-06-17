import React from 'react';
import {useAuth} from '../../context/authContext';
import Screen from '../../components/molecule/Screen.molecule';
import {Box, Center, HStack, Image, Pressable, ScrollView, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { menuIcons } from '../../utils/menuIcons';
import Button from '../../components/molecule/Button.molecule';
import { CustomAsyncStorage } from '../../utils/CustomAsyncStorage';
import ServicesCard from '../../components/molecule/Home/ServicesCard/ServicesCard';
import { homeSerivces } from '../../utils/homeServices';
import FrequentQuestions from '../../components/molecule/Home/FrequentQuestions/FrequentQuestions';
import { frequentQuestions } from '../../utils/FrequentQuestions';
import HeaderProfile from '../../components/molecule/Home/HeaderProfile/HeaderProfile';
import Carousel from 'react-native-snap-carousel';

export function Home() {
  const {user, updateUser} = useAuth();

  const navigation = useNavigation();

  async function storage() {
    const email = await CustomAsyncStorage.getItem('@user_email');
    const password = await CustomAsyncStorage.getItem('@user_password');
    const token = await CustomAsyncStorage.getItem('@user_token');

    // await CustomAsyncStorage.removeItem('@user_email');
    // await CustomAsyncStorage.removeItem('@user_password');
    // await CustomAsyncStorage.removeItem('@user_token');

    console.log(email, password, token)
  }

  return (
    <Screen flex={1} paddingX={'20px'}>
      <HeaderProfile user={user} />

       {/* <Center>
        <Carousel
          ref={(c) => {carousel = c; }}
          data={[user]}
          renderItem={({item}: any) => {
            return (
              <Box bg={'white'} w={'100%'} h={'120px'}>
                <Text>{item.firstname}</Text>
              </Box>
            )
          }}
          slideStyle={{paddingVertical: 40}}
          sliderWidth={380}
          itemWidth={280}
          sliderHeight={1000}
          centerContent
        />
      </Center> */}

      <VStack mt={'20px'} alignItems={'center'} justifyContent={'center'} flexDir={'row'} flexWrap={'wrap'}>
        {
          menuIcons?.map((element, index) => (
            <Pressable
              key={index}
              m={'10px'}
              _pressed={{opacity: 0.5}}
              onPress={() => {
                updateUser();
                (element.name === 'Series' || element.name === 'Nivelamento' || element.name === 'Divisão de treinos') && !user?.premium ? navigation.navigate('Planos' as never) : navigation.navigate((element.nav || element.name) as never)
              }}
              rounded={'5px'}
              p={'10px'}
              w={'150px'}
              h={'150px'}
              bg={(element.name === 'Series' || element.name === 'Nivelamento' || element.name === 'Divisão de treinos') ? (user?.premium ? '#5968DF' : '#EB6A6A') : '#5968DF'} mr={'10px'}
            >
              <HStack alignItems={'center'} space={2}>
                <Image tintColor={'#ffffff'} w={8} h={8} source={element.icon} alt={'logo'} />
                <Text w={'80%'} bold color={'#ffffff'}>
                  {element.name}
                </Text>
              </HStack>

              <Text mt={'15px'} color={'#ffffff'}>
                {element.text}
              </Text>
            </Pressable>
          ))
        }
      </VStack>

      <Box borderRadius={5} alignItems={'center'} justifyContent={'center'} my={'20px'} bg={'#EB6A6A'} opacity={0.5} h={'38px'}>
        <Text fontSize={'18px'} bold color={'#ffffff'}>Divisão de treinos e nivelamento</Text>
      </Box>

      <Text mb={'20px'} color={'#ffffff'}>
        Nós entendemos que cada indivíduo é único, com diferentes metas, habilidades. Por isso que projetamos o Espartanas para ser flexível e adaptável. Aqui está um vislumbre do que você pode esperar:
      </Text>


      {
        homeSerivces?.map((element, index) => (
          <ServicesCard
            key={index}
            image={element.image}
            textImage={element.textImage}
            textSign={element.textSign}
            buttonText={user.premium === 'gratuito' ? element.buttonText : 'Acessar'}
            variant={element.variant}
            premium={user.premium}
            screen={element.screen}
          />
        ))
      }
    </Screen>
  );
}
