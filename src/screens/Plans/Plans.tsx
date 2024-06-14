import React from 'react';
import {Box, Center, Text} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import api from '../../services/api';
import { Header } from '../../components/molecule/Header.molecule';
import PlanCard from '../../components/molecule/Plans/PlanCard';
import { useQuery } from 'react-query';
import { ActivityIndicator } from 'react-native';

export default function Plans() {
  const {data, isLoading} = useQuery(['planos'], async () => {
    const res = await api.get('/plans');
    return res.data.planos;
  });

  if (isLoading) {
    return (
      <Screen>
        <ActivityIndicator style={{marginTop: '50%'}} size="large" color="#ffffff" />
      </Screen>
    );
  }

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

      <Center my={'50px'}>
        {
          data.map((element: any, index: number) => (
            <PlanCard
              key={index}
              name={element.name}
              big_price={element.big_price}
              little_price={element.little_price}
              text_discount={element.text_discount}
              text_installments={element.text_installments}
              description={element.description}
              big_square_color={element.big_square_color}
              little_square_color={element.little_square_color}
            />
          ))
        }
      </Center>
    </Screen>
  );
}
