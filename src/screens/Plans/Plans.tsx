import React, { useState } from 'react';
import {Box, Center, Text} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import {plans} from '../../utils/plans';
import {useNavigation} from '@react-navigation/native';
import {useApp} from '../../context/appContext';
import {useQuery} from 'react-query';
import api from '../../services/api';
import { Header } from '../../components/molecule/Header.molecule';
import Carousel from 'react-native-snap-carousel';
import PlanCard from '../../components/molecule/Plans/PlanCard';

export default function Plans() {
  const navigation = useNavigation();
  const {userData, setUserData} = useApp();

  const [isAutoPlay, setIsAutoPlay] = useState(false);

  return (
    <Screen paddingX={'20px'} flex={1}>
      <Header title='Planos' />

      <Box>
        <Text
          textAlign={'center'}
          color={'#ffffff'}
          fontSize={'24px'}
          mt={'30px'}
        >
          Selecione um dos nossos planos abaixo e aproveite!
        </Text>

      </Box>

      <Box mt={'30px'}>
        <Text mt={'10px'} color={'#ffffff'} fontSize={'14px'}>
          • 3 níveis de séries (iniciante, intermediário e avançado);
        </Text>

        <Text mt={'10px'} color={'#ffffff'} fontSize={'14px'}>
          • Explicações extremamente detalhadas e com vídeo;
        </Text>

        <Text mt={'10px'} color={'#ffffff'} fontSize={'14px'}>
          • Mudança de treino a cada 2 meses;
        </Text>

        {/* <Text color={'#ffffff'} fontSize={'14px'}>
          • Telegram do Espartanas para acompanhamento da equipe;
        </Text> */}
      </Box>

      {/* <PlanCard /> */}

      <Center>
        <Carousel
          ref={(c) => {carousel = c; }}
          data={plans}
          renderItem={({item}) => {
            return (
              <PlanCard
                name={item.name}
                big_price={item.big_price}
                little_price={item.little_price}
                text_discount={item.text_discount}
                text_installments={item.text_installments}
                description={item.description}
              />
            )
          }}
          slideStyle={{paddingVertical: 40}}
          sliderWidth={380}
          itemWidth={280}
          sliderHeight={1000}
          centerContent
        />
      </Center>
    </Screen>
  );
}
