import React from 'react';
import {HStack, Pressable, Text} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {ArrowBack} from '../../assets/icons/arrow-back';
import {useNavigation} from '@react-navigation/native';

type Props = IHStackProps & {
  title: string;
  showArrowBack?: boolean;
  showTitle?: boolean;
};

export function Header({title, showArrowBack, showTitle, ...rest}: Props) {
  const navigation = useNavigation();
  return (
    <HStack
      py={5}
      alignItems={'center'}
      justifyContent={showArrowBack ? 'space-between' : 'center'}
      {...rest}>
      {showArrowBack ? (
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowBack color={'white'} />
        </Pressable>
      ) : (
        <Text></Text>
      )}

      {showTitle && (
        <Text color={'white'} bold fontSize={20}>
          {title}
        </Text>
      )}
    </HStack>
  );
}
