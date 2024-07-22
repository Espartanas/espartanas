import React from 'react';
import {Box, Center, Text} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import api from '../../services/api';
import { Header } from '../../components/molecule/Header.molecule';
import PlanCard from '../../components/molecule/Plans/PlanCard';
import { useQuery } from 'react-query';
import { ActivityIndicator } from 'react-native';
import { plans } from '../../utils/plans';

export default function Plans() {
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
      </Box>

      <Center p={'0px'} gap={'20px'} flexDir={'row'}flexWrap={'wrap'} my={'50px'}>
        {
          plans.map((element: any, index: number) => (
            <PlanCard
              key={index}
              name={element.name}
              big_price={element.big_price}
              big_price_number={element.big_price_number}
              text_discount={element.text_discount}
              premium_points={element.premium_points}
            />
          ))
        }
      </Center>

      <Box mb={'50px'}>
        <Text color={'#ffffff'} fontSize={'14px'}>Parcele dos planos de acordo com:</Text>
        <Text mt={'10px'} color={'#ffffff'} fontSize={'14px'}>
          • 90 dias (trimestral) - Parcelamento em 3x sem juros
        </Text>

        <Text mt={'10px'} color={'#ffffff'} fontSize={'14px'}>
          • 180 dias (semestral) - Parcelamento em 6x sem juros
        </Text>

        <Text mt={'10px'} color={'#ffffff'} fontSize={'14px'}>
          • 360 dias (anual) - Parcelamento em 6x sem juros
        </Text>
      </Box>
    </Screen>
  );
}
