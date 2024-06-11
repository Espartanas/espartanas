import React from 'react';
import {HStack, Pressable, Text} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {ArrowBack} from '../../assets/icons/arrow-back';
import {useNavigation} from '@react-navigation/native';

type Props = IHStackProps & {
  title: string;
  notShowArrowBack?: boolean;
};

export function Header({title, notShowArrowBack, ...rest}: Props) {
  const navigation = useNavigation();
  return (
    <HStack alignItems={'center'} justifyContent={'space-between'} mt={'20px'}>
      {
        notShowArrowBack ?
        <Text></Text> :
        <Pressable justifyContent={'center'} w={12} h={12} onPress={() => navigation.goBack()} _pressed={{opacity: 0.5}}>
          <ArrowBack color='#ffffff' />
        </Pressable>
      }

      <Text bold fontSize={'28px'} color={'#ffffff'}>
        {title}
      </Text>
    </HStack>
  );
}
