import React from 'react';
import {AddIcon, Box, HStack, Pressable, Text, VStack} from 'native-base';

import {plans} from '../../../../utils/plans';
import {useNavigation} from '@react-navigation/native';

export function Plans() {
  const navigation = useNavigation();
  return (
    <VStack mt={'10px'}>
      <Text fontSize={'16px'} bold>
        Seja Membro
      </Text>

      <HStack mt={'10px'} alignItems={'center'} justifyContent={'center'}>
        {plans.map((item, index) => (
          <Pressable
            alignItems={'center'}
            justifyContent={'center'}
            bg={'#F8F4F0'}
            mr={'10px'}
            p={'10px'}
            h={'110px'}
            w={'30%'}
            borderRadius={'200px'}
            key={index}
            onPress={() => navigation.navigate(item.name as never)}
            _pressed={{opacity: 0.5}}>
            <Text bold fontSize={'16px'}>
              {item.name}
            </Text>
            <Text fontSize={'13px'}>R$ {item.string_price}</Text>
            <Box mt={'10px'}>
              <AddIcon color={'green.700'} />
            </Box>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
}
