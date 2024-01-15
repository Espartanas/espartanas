import React from 'react';
import {AddIcon, Box, Pressable, Text, VStack} from 'native-base';
import Screen from '../../components/molecule/Screen.molecule';
import {plans} from '../../utils/plans';

export default function Plans() {
  return (
    <Screen flex={1} bg={'white'}>
      <VStack py={'50px'} alignItems={'center'} w={'100%'}>
        {plans.map((item, index) => (
          <Pressable
            mb={'50px'}
            alignItems={'center'}
            borderWidth={'1px'}
            borderColor={'rgba(30, 130, 76, .5)'}
            justifyContent={'center'}
            bg={'green.50'}
            p={'10px'}
            h={'320px'}
            w={'85%'}
            borderRadius={'200px'}
            key={index}
            onPress={() => navigation.navigate(item.name as never)}
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
              <AddIcon size={'30px'} color={'green.700'} />
            </Box>
          </Pressable>
        ))}
      </VStack>
    </Screen>
  );
}
