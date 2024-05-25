import React from 'react';
import {useAuth} from '../../context/authContext';
import Screen from '../../components/molecule/Screen.molecule';
import {HStack, Image, Pressable, ScrollView, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { menuIcons } from '../../utils/menuIcons';
import Button from '../../components/molecule/Button.molecule';
import { CustomAsyncStorage } from '../../utils/CustomAsyncStorage';
import ServicesCard from '../../components/molecule/Home/ServicesCard/ServicesCard';
import { homeSerivces } from '../../utils/homeServices';
import FrequentQuestions from '../../components/molecule/Home/FrequentQuestions/FrequentQuestions';
import { frequentQuestions } from '../../utils/FrequentQuestions';

export function Home() {
  const {user} = useAuth();

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
      <HStack justifyContent={'space-between'} mt={'20px'}>
        <Text w={'250px'} mt={'20px'} fontSize={'18px'} color={'#ffffff'}>
          Bem vindo ao Espartanas {user?.firstname} {user?.lastname}
        </Text>

        <Image w={24} h={24} tintColor={'#ffffff'} source={require('../../assets/images/logo.png')} alt={'logo'} />
      </HStack>

      <HStack mt={'30px'} justifyContent={'space-between'} w={'100%'}>
        <Text w={48} mt={'20px'} color={'#ffffff'}>
          Bem-vindo ao Espartanas, o seu parceiro definitivo na jornada de condicionamento físico e bem-estar!
        </Text>
        <Image w={32} borderRadius={10} h={32} source={require('../../assets/images/home_image_1.png')} alt={'logo'} />
      </HStack>

      <VStack mt={'30px'}>
        <Text fontSize={'24px'} bold color={'#ffffff'} mb={'10px'}>Menu</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            menuIcons?.map((element, index) => (
              <Pressable
                key={index}
                _pressed={{opacity: 0.5}}
                onPress={() => navigation.navigate(element.name as never)}
                rounded={'5px'}
                p={'10px'}
                w={'150px'}
                bg={element.name === 'Series' ? user?.premium === 'gratuito' ? 'red.300' : '#5968DF' : '#5968DF'} mr={'10px'}
              >
                <HStack alignItems={'center'} space={2}>
                  <Image tintColor={'#ffffff'} w={8} h={8} source={element.icon} alt={'logo'} />
                  <Text bold color={'#ffffff'}>
                    {element.name}
                  </Text>
                </HStack>

                <Text mt={'15px'} color={'#ffffff'}>
                  {element.text}
                </Text>
              </Pressable>
            ))
          }
        </ScrollView>
      </VStack>
      
      <HStack alignItems={'center'} mt={'30px'} justifyContent={'space-between'} w={'100%'}>
        <Image w={32} borderRadius={10} h={32} source={require('../../assets/images/home_image_2.png')} alt={'logo'} />
        <Text w={48} color={'#ffffff'}>
          Imagine ter acesso instantâneo a uma variedade de treinos para academia, tudo na ponta dos seus dedos.
        </Text>
      </HStack>

      <Text mt={'30px'} color={'#ffffff'}>
        Com o nosso aplicativo inovador, você está prestes a entrar em uma experiência revolucionária de treinamento.
      </Text>

      <Text mt={'30px'} color={'#ffffff'}>
        Nós entendemos que cada indivíduo é único, com diferentes metas, habilidades. Por isso que projetamos o Espartanas para ser flexível e adaptável. Aqui está um vislumbre do que você pode esperar:
      </Text>

      <Text mt={'30px'} fontSize={'24px'} bold color={'#ffffff'} mb={'10px'} w={'200px'}>Divisão de treinos e nivelamento</Text>

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

      <Text fontSize={'24px'} bold color={'#ffffff'} mb={'10px'}>Perguntas frequentes</Text>

      {
        frequentQuestions.slice(0, 4).map((element, index) => (
          <FrequentQuestions
            key={index}
            question={element.questions}
            answer={element.answer}
          />
        ))
      }

      <Button onPress={() => navigation.navigate('Perguntas' as never)} bg={'#5968DF'} text='Mais perguntas' />
      
      <Button onPress={storage} my={'30px'} bg={'#25D366'} text='Whatsapp' />
    </Screen>
  );
}
