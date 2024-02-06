import React from 'react';
import {AddIcon, Box, Center, Pressable, Text, VStack} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import {plans} from '../../utils/plans';
import {useNavigation} from '@react-navigation/native';
import {useApp} from '../../context/appContext';
import {useQuery} from 'react-query';
import api from '../../services/api';

export default function Plans() {
  const navigation = useNavigation();
  const {userData, setUserData} = useApp();

  const {data, isLoading} = useQuery(['allPlans'], async () => {
    const res = await api.get('/plan');
    return res.data;
  });

  function goToPlanPayment(item: any) {
    setUserData({...userData, plan: item.id});
    navigation.navigate('PlanPayment' as never);
  }

  if (isLoading) return <Text>Loading!</Text>;

  return (
    <Screen flex={1} bg={'white'}>
      <Center mt={'30px'}>
        <Text fontSize={'18px'} bold>
          Selecione um dos nossos planos
        </Text>
      </Center>
      <VStack py={'30px'} alignItems={'center'} w={'100%'}>
        {data.map((item: any, index: number) => (
          <Pressable
            mb={'20px'}
            alignItems={'center'}
            borderWidth={'1px'}
            borderColor={'blue.800'}
            justifyContent={'center'}
            p={'10px'}
            h={'180px'}
            w={'85%'}
            borderRadius={'20px'}
            key={index}
            onPress={() => goToPlanPayment(item)}
            _pressed={{opacity: 0.5}}>
            <Text bold fontSize={'20px'}>
              {item.name}
            </Text>
            <Text fontSize={'18px'}>R$ {item.price},00</Text>
            {item?.discount !== 0 && (
              <Text bold fontSize={'18px'}>
                {item?.discount}% de desconto
              </Text>
            )}
            <Text mt={'10px'} textAlign={'center'} fontSize={'12px'}>
              {item.description}
            </Text>
          </Pressable>
        ))}
      </VStack>

      <Pressable
        mx={'20px'}
        mb={'40px'}
        alignItems={'center'}
        justifyContent={'center'}
        h={'60px'}
        bg={'white'}
        borderRadius={'10px'}
        borderWidth={'1px'}
        borderColor={'blue.800'}
        _pressed={{opacity: 0.5}}
        onPress={() => navigation.navigate('Dashboard' as never)}>
        <Text fontSize={'20px'} color={'blue.800'} bold>
          Assinar depois
        </Text>
      </Pressable>
    </Screen>
  );
}
