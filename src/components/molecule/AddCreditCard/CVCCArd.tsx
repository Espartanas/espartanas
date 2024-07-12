import {Image, Text, View} from 'native-base';
import React from 'react';

import logo from '../../../assets/images/logo.png';

export default function CVCCard({cvc}: string | any) {
  return (
    <View
      bg={'#0A3E89'}
      borderWidth={1}
      borderColor={'white'}
      mt={'30px'}
      style={{width: '100%', borderRadius: 4, height: 200}}
      testID={'backgroundCardView'}>
      <View h={'40px'} w={'100%'} bg={'#c0c0c0'} mt={30} />

      <Text fontSize={12} bold color={'white'} m={10}>
        CVC{' '}
        <Text fontSize={16} color={'white'} bold>
          {cvc}
        </Text>
      </Text>

      <Image position={'absolute'} right={0} bottom={4} source={logo} width={100} height={100} alt={'logo'} tintColor={'white'} />
    </View>
  );
}
