import React from 'react';
import {AddIcon, Box, Pressable, Text, VStack} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import {plans} from '../../utils/plans';
import {useNavigation} from '@react-navigation/native';

export default function Plans() {
  const navigation = useNavigation();
  return (
    <Screen flex={1} bg={'white'}>
      <VStack py={'50px'} alignItems={'center'} w={'100%'}>
        {plans.map((item, index) => (
          <Pressable
            mb={'20px'}
            alignItems={'center'}
            borderWidth={'1px'}
            borderColor={'blue.800'}
            justifyContent={'center'}
            p={'10px'}
            h={'250px'}
            w={'85%'}
            borderRadius={'20px'}
            key={index}
            onPress={() => navigation.navigate('Dashboard' as never)}
            _pressed={{opacity: 0.5}}>
            <Text bold fontSize={'20px'}>
              {item.name}
            </Text>
            <Text fontSize={'18px'}>R$ {item.string_price}</Text>
            {item.mounth_discount && (
              <Text bold fontSize={'18px'}>
                {item.mounth_discount}
              </Text>
            )}
            <Text mt={'20px'} textAlign={'center'} fontSize={'12px'}>
              {item.description}
            </Text>
            <Box mt={'30px'}>
              <AddIcon size={'20px'} color={'green.700'} />
            </Box>
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
        onPress={() => navigation.navigate('Plans' as never)}>
        <Text fontSize={'20px'} color={'blue.800'} bold>
          Depois assino
        </Text>
      </Pressable>
    </Screen>
  );
}
